import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      summoner: [],
      rank: [],
      masteries: []
    },
    mutations: {
      add(state, payload) {
        state.summoner = payload
      },
      addrank(state, payload) {
        state.rank = payload
      },
      addmasteries(state, payload) {
        state.masteries = payload
      }
    }
  })
}

export default createStore
