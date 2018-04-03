import axios from 'axios'
const AuthModule = {
  state: {
    user: null,
    // currentTimeSheet: null,
    isLoggedIn: null
  },
  mutations: {
    setUser(state, payload) {
      // console.log(payload)
      if (payload) {
        state.user = payload.employee
        state.user.currentTimeSheet = payload.timeClock
        state.isLoggedIn = true
      } else {
        state.user = null
        state.currentTimeSheet = null
      }
    },
    setTimeClock(state, payload) {
      state.currentTimeSheet = payload
    }
  },
  actions: {
    adjustTimeClock({ commit }, payload) {
      console.log(payload.currentTimeSheet)

      axios
        .post('http://104.131.125.97:1880/clock', {
          id: payload.employeeId,
          notes: payload.notes
        })
        .then(response => {
          console.log(response)
          commit('setTimeClock', response.data.data)
          // commit("setTimeClock", "out");
        })
        .catch(error => {
          console.log(error)
        })
    },

    signUserOut({ commit }, payload) {
      commit('setLoading', true)
    },
    signUserIn({ commit }, payload) {
      axios
        // .post('http://ashdevtools.com:1880/login', {
        .post('http://104.131.125.97:1880/login', {
          email: payload.email
        })
        .then(response => {
          console.log(response.data)
          commit('setUser', response.data)
        })
    },

    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    currentTimeSheet(state) {
      return state.currentTimeSheet
    }
  }
}
export default AuthModule
