import axios from 'axios'

export default function({ params, store }) {
  /*   const getSummoner = function() {
    return axios.get(`/riot-api/na1/${params.id}`).then(response => {
      store.commit('add', response.data)
      getRank(response.data.id)
    })
  }

  const getRank = function(id) {
    return axios.get(`/riot-api/na1/${id}/rank`).then(response => {
      store.commit('addrank', response.data)
    })
  } */

  async function getSummoner() {
    try {
      let matchlist = []
      let partlist = []
      const summoner = await axios.get(`/riot-api/na1/${params.id}`)
      store.commit('add', summoner.data)
      const rank = await axios.get(`/riot-api/na1/${summoner.data.id}/rank`)
      store.commit('addrank', rank.data)
      const masteries = await axios.get(
        `/riot-api/na1/${summoner.data.id}/masteries`
      )
      store.commit('addmasteries', masteries.data)
      const matches = await axios.get(
        `/riot-api/na1/${summoner.data.accountId}/matches`
      )
      store.commit('addmatches', matches.data)
      matches.data.matches.slice(0, 5).forEach(r => {
        let match = axios.get(`/riot-api/na1/matches/${r.gameId}`)
        match.then(r => {
          matchlist.push(r.data)
          store.commit('addmatch', matchlist)
          let player = r.data.participantIdentities.findIndex(function(
            participant
          ) {
            return participant.player.summonerId == summoner.data.id
          })
          partlist.push(player)
          store.commit('addparticipant', partlist)
        })
      })
    } catch (error) {
      console.log(error)
    }
  }
  getSummoner()
}
