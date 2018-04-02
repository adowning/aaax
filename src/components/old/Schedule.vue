
  <template>
  <div v-if="mode">
<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=andrewscarpetcleaning.com_ur6faiooqnr05c5mutacogqmas%40group.calendar.google.com&amp;color=%2329527A&amp;src=andrewscarpetcleaning.com_hql90ovvmj58uil7c2ks1qpdp8%40group.calendar.google.com&amp;color=%23AB8B00&amp;src=andrewscarpetcleaning.com_hg7ehkgto6o7g6cd194le6i7cg%40group.calendar.google.com&amp;color=%235F6B02&amp;src=andrewscarpetcleaning.com_hqhgh43im0os92t91249hapr0c%40group.calendar.google.com&amp;color=%23875509&amp;ctz=America%2FChicago" style="border-width:0" width="100%" height="700" frameborder="0" scrolling="no"></iframe>
  </div>
</template>
<script>
export default {
  name: 'Schedule',
  data() {
    return {
      mode: false
    }
  },
  created() {
    if (process.env.NODE_ENV === 'production') {
      this.mode = true
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Lucida Grande', Helvetica, Arial, Verdana, sans-serif;
  font-size: 14px;
}

#calendar {
  max-width: 1400px;
  margin: 50px auto;
}
</style>
