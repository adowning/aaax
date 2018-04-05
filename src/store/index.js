import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './AuthModule'
import VuexPersist from 'vuex-persist'
const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.sessionStorage // or window.sessionStorage or localForage
})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: AuthModule
    // timeClock: TimeClockModule
  },
  state: {
    loading: false,
    error: null,
    theme: 'dark',
    onlineUsers: []
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
    setOnlineUsers(state, payload) {
      state.onlineUsers = payload
    }
  },
  actions: {
    loadOnlineUsers({ commit }) {
      //   firebase
      //     .database()
      //     .ref('presence')
      //     .on('value', function(snapshot) {
      //       let result = []
      //       result[0] = snapshot.numChildren()
      //       result[1] = snapshot.val()
      //       commit('setOnlineUsers', result)
      //     })
    },
    clearError({ commit }) {
      commit('clearError')
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    },
    onlineUsers(state) {
      return state.onlineUsers
    },
    theme(state) {
      return state.theme
    }
  },
  plugins: [vuexLocalStorage.plugin]
})
export default store
