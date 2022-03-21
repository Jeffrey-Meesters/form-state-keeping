import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedData: {
      one: 2,
      two: 3,
      three: 4
    }
  },
  mutations: {
  },
  actions: {
    submitData(context, data) {
      // Do a call to the API and save stuff
      console.log(data)
    }
  },
  modules: {
  }
})
