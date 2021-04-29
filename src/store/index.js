import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedOn:true,
    signedUp: false,
    createPost: false
  },
  mutations: {
    updateloggedOnStatus(state, loggedOnStatus){
      state.loggedOn = loggedOnStatus
    },
    updatesignedUpStatus(state, signedUpStatus){
      state.signedUp = signedUpStatus
    }
  },
  actions: {
  },
  modules: {
  }
})
