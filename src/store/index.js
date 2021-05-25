import { createStore } from 'vuex'

export default createStore({
  state: {
<<<<<<< HEAD
    loggedOn: false,
=======
    loggedOn: true,
>>>>>>> fe18c409d18ba09ed69958dffcab003b8721399b
    signedUp: false,

  },
  mutations: {
    updateloggedOnStatus(state, loggedOnStatus) {
      state.loggedOn = loggedOnStatus
    },
    updatesignedUpStatus(state, signedUpStatus) {
      state.signedUp = signedUpStatus
    }
  },
  actions: {
  },
  modules: {
  }
})
