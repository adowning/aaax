
<template>
<div class="q-pa-lg">
<q-alert
          color="warning"
          inline
          class="q-ma-sm"
        > I have left most of the features for the map off until the basics are tested.</q-alert>

    <div id="googleMap">
        <gmap-map style="width: 1200px; height: 700px" ref="map" class="q-ml-sm" :center="center" :zoom="zoom" map-type-id="terrain" :options="options">
              <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :opened="m.ifw2" :clickable="true"        
               @mouseover="statusText = m.text"
        @mouseout="statusText = null">
			<gmap-info-window :opened="m.ifw">{{m.ifw2text}}</gmap-info-window>
      			</gmap-marker>
        <div slot="visible">
        <div style="bottom: 0; left: 0; background-color: #8fbcbb; color: white; position: absolute; z-index: 100">
                {{infoContent}}
        </div>
      </div>
        </gmap-map>
    </div>
    </div>
</template>
<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import { loaded } from 'vue2-google-maps'
import fbApp from '../../plugins/firebase'
// import defaultStore from './firebaseInit'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAmwNvsV8ANcjbaAhgdrNhx39Qst6EUEeo',
    maxZoom: 10
  }
})

/* implement lib components */
Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)

/* create object for map-component with methods */
export default {
  data() {
    return {
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      statusText: '',
      ifw2: false,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      _id: '',
      markers: [],
      center: { lat: 32.3173, lng: -95.2473 },
      zoom: 8,
      options: {
        maxZoom: 16,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'on'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                lightness: 100
              },
              {
                visibility: 'simplified'
              }
            ]
          }
        ]
      }
    }
  },
  watch: {
    /* watch for this.markers changes */
    markers(markers) {
      if (markers.length) {
        loaded.then(() => {
          let bounds = new google.maps.LatLngBounds()
          for (let m of markers) {
            bounds.extend(m.position)
          }
          this.$refs.map.$mapObject.fitBounds(bounds)
          this.$nextTick(() => {
            this.$refs.map.resize()
            this.$refs.map.resizePreserveCenter()
          })
        })
      }
    }
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.infoText
      this.infoContent = 'asdfasdfadsffds'
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        //if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },

    geocode(marker) {
      let $this = this
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(marker.address)).then(
        response => {
          console.log(response)
          if (response.status === 200) {
            if (response.body.results[0]) {
              let obj = {
                id: marker.id,
                address: location,
                position: {
                  lat: response.body.results[0].geometry.location.lat,
                  lng: response.body.results[0].geometry.location.lng
                }
              }
              $this.markers.push(Object.assign(marker, obj))
            } else {
              console.log('Error - no Results')
            }
          } else {
            console.log('Error - Status not 200 ', response)
          }
        },
        response => {
          console.log('Error - Connection', response)
        }
      )
    }
  },
  mounted() {
    var defaultStore = fbApp.firestore()
    var $this = this
    loaded.then(() => {
      defaultStore
        .collection('assetsReporting')
        .where('type', '==', 'location')
        .onSnapshot(function(querySnapshot) {
          // markerManager.clear();
          $this.markers = []
          querySnapshot.forEach(function(doc) {
            var data = doc.data()
            var marker = {
              position: {
                lat: data.location.latitude,
                lng: data.location.longitude
              },
              ifw2text: data.username,
              ifw: true
            }
            $this.markers.push(marker)
          })
        })
    })
  }
}
</script>
