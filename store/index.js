import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      summoner: 0
    },
    mutations: {
      add(state, payload) {
        state.summoner = payload
      }
    }
  })
}

export default createStore
