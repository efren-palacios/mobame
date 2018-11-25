import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      summoner: [],
      rank: [],
      masteries: [],
      matches: [],
      match: [],
      participant: []
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
      },
      addmatches(state, payload) {
        state.matches = payload
      },
      addmatch(state, payload) {
        state.match = payload
      },
      addparticipant(state, payload) {
        state.participant = payload
      }
    }
  })
}

export default createStore
