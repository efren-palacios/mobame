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
    } catch (error) {
      console.log(error)
    }
  }
  getSummoner()
}
