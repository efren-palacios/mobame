<template>
  <div v-cloak class="app">
    <section class="bg-black">
      <div class="navbar">
        <div class="logo">
          <p>
            MOBA
            <span class="blue">ME</span>
          </p>
          <div class="form-container">
            <form @submit.prevent="submit" action class="form-flex" _lpchecked="1">
              <input
                v-model="search"
                autofocus="autofocus"
                placeholder="Search for a summoner..."
                type="text"
                value
                class="search-bar"
              >
              <button v-on:click="search" class="search-button">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section v-show="!name">
      <div
        style="align-items: center;height: 100vh;justify-content: center;background-color: rgb(29, 34, 39);color: rgb(200, 200, 200);display: flex;flex-direction: column;"
      >
        <img
          src="https://vignette4.wikia.nocookie.net/leagueoflegends/images/1/1b/Does_Not_Compute_Emote.png"
          alt
        >
        <h5>
          Oops! Summoner
          <strong
            style="color: rgb(39, 121, 189);text-shadow: 1px 2px 1px rgba(0,0,0,.2);"
          >{{this.$route.params.id}}</strong> not found
        </h5>
      </div>
    </section>
    <section class="fullscreen" v-show="name">
      <div class="champion">
        <div class="profile">
          <div v-if="masteries.length > 1">
            <div :key="index" v-for="(bg, index) of masteries.slice(0,1)">
              <div
                :style="{backgroundImage: 'url(https://cdn.communitydragon.org/8.21.1/champion/'+bg.championId+'/splash-art/centered/skin/0)' || 'https://cdn.communitydragon.org/8.21.1/champion/53/splash-art/centered/skin/5'}"
                class="background"
              ></div>
            </div>
          </div>
          <div class="summoner-profile">
            <div class="flex-center">
              <img
                :src="'https://cdn.communitydragon.org/9.1.1/profile-icon/'+icon"
                alt
                class="summoner-icon"
              >
            </div>
            <div class="summoner-info">
              <div class="summoner-name">{{name}}</div>
              <div class="summoner-stats">
                <div class="summoner-region">
                  <i class="fas ml-1 fa-globe-americas"></i>
                  <span class="mr-3">North America</span>
                  <br>
                </div>
                <div class="summoner-level">
                  <i class="fas ml-1 fa-certificate"></i>
                  Level {{level}}
                  <br>
                </div>
              </div>
              <div class="summoner-verification"></div>
              <div class="summoner-social">
                <div class="online-status">
                  <i class="fas fa-rss"></i>
                  <span class="font-bold">Online</span>
                </div>
                <div class="streaming">
                  <i class="fab fa-twitch"></i>
                  <span>Streaming</span>
                </div>
              </div>
              <div class="summoner-verification">
                <div>
                  <i class="fas fa-check-circle text-green"></i> Verified
                </div>
                <div>
                  <i class="far fa-clock"></i>
                  Updated {{summonertime}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rank-container">
        <div class="rank-summary">
          <div class="rank-data">
            <div>
              <i class="fas fa-trophy fa-fw"></i> Rank Summary
            </div>
          </div>
        </div>
        <div class="rank-stats">
          <div
            :key="index"
            v-bind="rank"
            v-for="(data, index) of rank.slice().reverse()"
            class="flex items-center mx-4"
          >
            <div class="rank-group">
              <div class="rank-data">
                <div>
                  <img
                    class="rank-role"
                    :src="'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/ranked/positions/rankposition_' + data.tier.toLowerCase() + '-' + emblem[data.position.toLowerCase()] + '_lg.png'"
                    alt
                    srcset
                  >
                </div>
                <div class="rank-name">{{datarankname[data.queueType]}}</div>
                <div
                  :class="'rank-' + data.tier.toLowerCase()"
                  class="rank-division rank-position"
                >{{data.position.toLowerCase()}}</div>
              </div>
              <div class="rank-data">
                <div class="rank-emblem">
                  <img
                    :src="'https://u.gg/assets/lol/ranks/s9_ranks/large/' + data.tier.toLowerCase() + '-' + dataranktier[data.rank.toLowerCase()] + '.png'"
                    alt
                    srcset
                  >
                </div>
                <div class="rank-ratio">
                  {{data.wins}}W
                  <span class="darken">/</span>
                  {{data.losses}}L
                  <span class="darken">/</span>
                  {{Math.round(data.wins / (data.wins + data.losses) * 100)}}%
                </div>
                <div
                  :class="'rank-' + data.tier.toLowerCase()"
                  class="rank-division"
                >{{data.tier.toLowerCase()}} {{data.rank}}</div>
                <div class="rank-lp">{{data.leaguePoints}} LP</div>
              </div>
            </div>
          </div>
        </div>
        <div class="rank-summary">
          <div>
            <p>
              <i class="fas fa-chart-bar"></i> Top Champions
            </p>
          </div>
        </div>
        <div class="rank-stats">
          <div class="rank-champ">
            <div :key="index" v-bind="masteries" v-for="(champs, index) of masteries">
              <div class="rank-icon">
                <img
                  :src="'https://cdn.communitydragon.org/9.1.1/champion/'+champs.championId+'/square' "
                  alt
                >
                <div>{{championName(champs.championId)}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="rank-summary">
          <div>
            <i class="far fa-keyboard"></i> Match History
          </div>
        </div>
        <div :key="index" v-for="(player, index) of participant">
          <div
            :class="{'match-card-victory': matchlist[index].participants[player].stats.win == true, 'match-card-defeat': matchlist[index].participants[player].stats.win == false}"
            class="match-card"
          >
            <div class="match-summary">
              <p
                v-if="matchlist[index].participants[player].stats.win == true"
                class="match-ending match-victory"
              >VICTORY</p>
              <p v-else class="match-ending match-defeat">DEFEAT</p>
              <div class="rank-queue">{{dataqueuename[matchlist[index].queueId]}}</div>
              <div>{{duration(matchlist[index].gameDuration)}}</div>
              <div>{{time(matchlist[index].gameCreation)}}</div>
            </div>

            <div class="match-summary">
              <div class="match-champ-stats">
                <img
                  class="match-champ"
                  :src="'https://cdn.communitydragon.org/9.1.1/champion/'+matchlist[index].participants[player].championId+'/square'"
                  alt
                >
                <p>
                  <strong>{{championName(matchlist[index].participants[player].championId)}}</strong>
                </p>
                <p>Level {{matchlist[index].participants[player].stats.champLevel}}</p>
                <p>{{matchlist[index].participants[player].stats.kills}}/{{matchlist[index].participants[player].stats.deaths}}/{{matchlist[index].participants[player].stats.assists}}</p>
              </div>
            </div>
            <div class="match-summary">
              <div class="match-summoners">
                <img
                  class="match-summoner-icon"
                  v-tooltip="getSummoners(matchlist[index].participants[player].spell1Id)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[player].spell1Id]+'.png'"
                  alt
                >
                <img
                  v-tooltip="getSummoners(matchlist[index].participants[player].spell2Id)"
                  class="match-summoner-icon"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[player].spell2Id]+'.png'"
                  alt
                >
                <img
                  v-tooltip="getItem(matchlist[index].participants[player].stats.item6)"
                  class="match-summoner-icon"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item6+'.png'"
                  alt
                >
              </div>
            </div>
            <div class="match-summary">
              <div class="match-summoners">
                <img
                  class="match-summoner-icon"
                  :src="'https://u.gg/assets/lol/runes/'+matchlist[index].participants[player].stats.perkPrimaryStyle+'.png'"
                  alt
                >
                <img
                  class="match-summoner-icon"
                  :src="'https://u.gg/assets/lol/runes/'+matchlist[index].participants[player].stats.perkSubStyle+'.png'"
                  alt
                >
              </div>
            </div>
            <!--           <div class="match-summary">
            <div>
              <img
                class="match-role"
                src="https://u.gg/assets/lol/roles/jung.svg?v9.1.2"
                alt=""
              />
            </div>
            <div>
              <p><b>142</b><span class="darken"> (5.6)</span> CS</p>
            </div>
            </div>-->
            <!--           <div class="match-summary">
            <div class="match-score">
              <div>
                6.50 <span class="darken">KDA</span> <br />
                <strong>7</strong> <span class="darken">/</span>
                <strong>2</strong> <span class="darken">/</span>
                <strong>6</strong>
              </div>
            </div>
            </div>-->
            <div class="match-summary">
              <div class="match-items">
                <a v-tooltip="getItem(matchlist[index].participants[player].stats.item0)">
                  <img
                    :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item0+'.png'"
                    alt
                  >
                </a>
                <a v-tooltip="getItem(matchlist[index].participants[player].stats.item1)">
                  <img
                    :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item1+'.png'"
                    alt
                  >
                </a>
                <a v-tooltip="getItem(matchlist[index].participants[player].stats.item2)">
                  <img
                    :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item2+'.png'"
                    alt
                  >
                </a>
                <a v-tooltip="getItem(matchlist[index].participants[player].stats.item3)">
                  <img
                    :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item3+'.png'"
                    alt
                  >
                </a>
                <a v-tooltip="getItem(matchlist[index].participants[player].stats.item4)">
                  <img
                    :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item4+'.png'"
                    alt
                  >
                </a>
                <a v-tooltip="getItem(matchlist[index].participants[player].stats.item5)">
                  <img
                    :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item5+'.png'"
                    alt
                  >
                </a>
              </div>
            </div>
            <div
              @click="toggle == index ? toggle = -1 : toggle = index"
              class="match-summary match-menu"
            >
              <i class="fas fa-bars"></i>
            </div>
          </div>
          <div
            v-show="index == toggle"
            :class="{'match-card-victory-menu': matchlist[index].participants[player].stats.win == true, 'match-card-defeat-menu': matchlist[index].participants[player].stats.win == false}"
            class="match-card match-players"
          >
            <div
              :key="id"
              v-for="(team, id) of matchlist[index].participantIdentities"
              class="teamlist"
            >
              <div class="champ-level">
                <img
                  :src="'https://cdn.communitydragon.org/9.1.1/champion/'+matchlist[index].participants[id].championId+'/square'"
                  alt
                  class="match-champs"
                >
                <div class="level">{{matchlist[index].participants[id].stats.champLevel}}</div>
              </div>

              <div class="match-summoners">
                <img
                  class="match-team-icon"
                  v-tooltip="getSummoners(matchlist[index].participants[id].spell1Id)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[id].spell1Id]+'.png'"
                  alt
                >
                <img
                  class="match-team-icon"
                  v-tooltip="getSummoners(matchlist[index].participants[id].spell2Id)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[id].spell2Id]+'.png'"
                  alt
                >
                <img
                  class="match-team-icon"
                  v-tooltip="getItem(matchlist[index].participants[id].stats.item6)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[id].stats.item6+'.png'"
                  alt
                >
              </div>
              <div class="match-summoners">
                <img
                  class="match-team-icon"
                  :src="'https://u.gg/assets/lol/runes/'+matchlist[index].participants[id].stats.perkPrimaryStyle+'.png'"
                  alt
                >
                <img
                  class="match-team-icon"
                  :src="'https://u.gg/assets/lol/runes/'+matchlist[index].participants[id].stats.perkSubStyle+'.png'"
                  alt
                >
              </div>
              <div class="team-summary">
                <p>
                  <nuxt-link
                    :to="{params: {id: matchlist[index].participantIdentities[id].player.summonerName}}"
                  >
                    <strong>{{matchlist[index].participantIdentities[id].player.summonerName}}</strong>
                  </nuxt-link>
                </p>
                <p>{{matchlist[index].participants[id].stats.kills}}/{{matchlist[index].participants[id].stats.deaths}}/{{matchlist[index].participants[id].stats.assists}}</p>
              </div>
              <div class="team-items">
                <img
                  v-tooltip="getItem(matchlist[index].participants[id].stats.item0)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[id].stats.item0+'.png'"
                  alt
                >
                <img
                  v-tooltip="getItem(matchlist[index].participants[id].stats.item1)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[id].stats.item1+'.png'"
                  alt
                >
                <img
                  v-tooltip="getItem(matchlist[index].participants[id].stats.item2)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[id].stats.item2+'.png'"
                  alt
                >
                <img
                  v-tooltip="getItem(matchlist[index].participants[id].stats.item3)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[id].stats.item3+'.png'"
                  alt
                >
                <img
                  v-tooltip="getItem(matchlist[index].participants[id].stats.item4)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[id].stats.item4+'.png'"
                  alt
                >
                <img
                  v-tooltip="getItem(matchlist[index].participants[id].stats.item5)"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[id].stats.item5+'.png'"
                  alt
                >
              </div>
            </div>
          </div>

          <!-- end of match -->
        </div>
      </div>
    </section>
    <section class="bg-black">
      <div class="navbar footer">
        <p>
          MOBA
          <span class="blue">ME</span> concept site created by
          <span class="blue">Efren Palacios</span> (Effy) &copy; 2019
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Vue from 'vue'
import VTooltip from 'v-tooltip'
let items = require('~/items.json')
let summonerdata = require('~/summoners.json')

Vue.use(VTooltip)

export default {
  data() {
    return {
      search: '',
      toggle: -1,
      summoner: {},
      datarank: {},
      datamasteries: {},
      datamatches: {},
      datamatchlist: [],
      partlist: [],
      items: items,
      summonerdata: summonerdata,
      summoners: summoners
    }
  },
  mounted: function() {
    this.$mount('.app')
  },
  methods: {
    championName: function(name) {
      return this.champname[name]
    },
    time: function(time) {
      return moment(time).format('MMM Do')
    },
    duration: function(time) {
      let duration = moment.duration(time, 'seconds')
      return moment(duration.asMilliseconds()).format('mm:ss')
    },
    submit(event) {
      event.preventDefault()
      this.$router.push(`/summoner/${this.search}`)
    },
    getItem(item) {
      if (item == 0) {
        return null
      }
      return `<strong class="rank-diamond">${
        this.items.data[item].name
      }</strong><br />${
        this.items.data[item].description
      }<br/><strong class="rank-bronze">Cost: ${
        this.items.data[item].gold.total
      } (${this.items.data[item].gold.base})`
    },
    getSummoners(item) {
      if (item == 0) {
        return null
      }
      item = this.summoners[item]
      return `<strong class="rank-diamond">${
        this.summonerdata.data[item].name
      }</strong><br />${this.summonerdata.data[item].description}`
    }
  },
  computed: {
    name() {
      return this.summoner.name
    },
    icon() {
      return this.summoner.profileIconId
    },
    summonertime() {
      return moment(this.summoner.revisionDate).fromNow()
    },
    level() {
      return this.summoner.summonerLevel
    },
    champname() {
      return champName
    },
    masteries() {
      return this.datamasteries.slice(0, 3)
    },
    rank() {
      return this.datarank
    },
    matches() {
      return this.datamatches.matches.slice(0, 5)
    },
    dataranktier() {
      return tier
    },
    emblem() {
      return emblem
    },
    datarankname() {
      return rankName
    },
    dataqueuename() {
      return queueName
    },
    summonername() {
      return summoners
    },
    summonerid() {
      return this.summoner.id
    },
    matchlist() {
      return this.datamatchlist
    },
    participant() {
      return this.partlist
    }
  },
  async asyncData({ params, error, redirect }) {
    let matchlist = []
    let partlist = []
    let server = 'http://effy.moe' //http://157.230.163.198
    try {
      let summoner = await axios.get(
        `${server}/riot-api/na1/${encodeURIComponent(params.id)}`
      )
      let rank = await axios.get(
        `${server}/riot-api/na1/${summoner.data.id}/rank`
      )
      let masteries = await axios.get(
        `${server}/riot-api/na1/${summoner.data.id}/masteries`
      )
      let matches = await axios.get(
        `${server}/riot-api/na1/${summoner.data.accountId}/matches`
      )
      await Promise.all(
        matches.data.matches.slice(0, 5).map(async r => {
          let match = await axios.get(
            `${server}/riot-api/na1/matches/${r.gameId}`
          )
          matchlist.push(match.data)
          let player = match.data.participantIdentities.findIndex(
            participant => {
              return participant.player.summonerId == summoner.data.id
            }
          )
          partlist.push(player)
        })
      )
      return {
        summoner: summoner.data,
        datarank: rank.data,
        datamasteries: masteries.data,
        datamatches: matches.data,
        datamatchlist: matchlist,
        partlist: partlist
      }
    } catch (error) {
      console.log(error)
      return redirect('/')
    }
  },
  head() {
    return {
      title: `${this.summoner.name} | ${this.rank.sum('wins')}W ${this.rank.sum(
        'losses'
      )}L | Rank Stats`,
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: `https://cdn.communitydragon.org/9.1.1/profile-icon/${
            this.summoner.profileIconId
          }`
        }
      ],
      meta: [
        {
          property: 'og:image',
          content: `https://cdn.communitydragon.org/9.1.1/profile-icon/${
            this.summoner.profileIconId
          }`
        }
      ]
    }
  }
}

Array.prototype.sum = function(prop) {
  var total = 0
  for (var i = 0, _len = this.length; i < _len; i++) {
    total += this[i][prop]
  }
  return total
}

let tier = {
  i: '1',
  ii: '2',
  iii: '3',
  iv: '4',
  v: '5'
}

let emblem = {
  utility: 'support',
  middle: 'mid',
  bottom: 'bot',
  jungle: 'jungle',
  top: 'top',
  apex: 'mid'
}

let summoners = {
  '1': 'SummonerBoost',
  '3': 'SummonerExhaust',
  '4': 'SummonerFlash',
  '6': 'SummonerHaste',
  '7': 'SummonerHeal',
  '11': 'SummonerSmite',
  '12': 'SummonerTeleport',
  '13': 'SummonerMana',
  '14': 'SummonerDot',
  '21': 'SummonerBarrier',
  '30': 'SummonerPoroRecall',
  '31': 'SummonerPoroThrow',
  '32': 'SummonerSnowball',
  '33': 'SummonerSiegeChampSelect1',
  '34': 'SummonerSiegeChampSelect2',
  '35': 'SummonerDarkStarChampSelect1',
  '36': 'SummonerDarkStarChampSelect2',
  '39': 'SummonerSnowURFSnowball_Mark',
  '50': 'SummonerOdysseyRevive',
  '51': 'SummonerOdysseyGhost',
  '52': 'SummonerOdysseyFlash'
}

let champName = {
  '1': 'Annie',
  '2': 'Olaf',
  '3': 'Galio',
  '4': 'Twisted Fate',
  '5': 'Xin Zhao',
  '6': 'Urgot',
  '7': 'LeBlanc',
  '8': 'Vladimir',
  '9': 'Fiddlesticks',
  '10': 'Kayle',
  '11': 'Master Yi',
  '12': 'Alistar',
  '13': 'Ryze',
  '14': 'Sion',
  '15': 'Sivir',
  '16': 'Soraka',
  '17': 'Teemo',
  '18': 'Tristana',
  '19': 'Warwick',
  '20': 'Nunu & Willump',
  '21': 'Miss Fortune',
  '22': 'Ashe',
  '23': 'Tryndamere',
  '24': 'Jax',
  '25': 'Morgana',
  '26': 'Zilean',
  '27': 'Singed',
  '28': 'Evelynn',
  '29': 'Twitch',
  '30': 'Karthus',
  '31': "Cho'Gath",
  '32': 'Amumu',
  '33': 'Rammus',
  '34': 'Anivia',
  '35': 'Shaco',
  '36': 'Dr. Mundo',
  '37': 'Sona',
  '38': 'Kassadin',
  '39': 'Irelia',
  '40': 'Janna',
  '41': 'Gangplank',
  '42': 'Corki',
  '43': 'Karma',
  '44': 'Taric',
  '45': 'Veigar',
  '48': 'Trundle',
  '50': 'Swain',
  '51': 'Caitlyn',
  '53': 'Blitzcrank',
  '54': 'Malphite',
  '55': 'Katarina',
  '56': 'Nocturne',
  '57': 'Maokai',
  '58': 'Renekton',
  '59': 'Jarvan IV',
  '60': 'Elise',
  '61': 'Orianna',
  '62': 'Wukong',
  '63': 'Brand',
  '64': 'Lee Sin',
  '67': 'Vayne',
  '68': 'Rumble',
  '69': 'Cassiopeia',
  '72': 'Skarner',
  '74': 'Heimerdinger',
  '75': 'Nasus',
  '76': 'Nidalee',
  '77': 'Udyr',
  '78': 'Poppy',
  '79': 'Gragas',
  '80': 'Pantheon',
  '81': 'Ezreal',
  '82': 'Mordekaiser',
  '83': 'Yorick',
  '84': 'Akali',
  '85': 'Kennen',
  '86': 'Garen',
  '89': 'Leona',
  '90': 'Malzahar',
  '91': 'Talon',
  '92': 'Riven',
  '96': "Kog'Maw",
  '98': 'Shen',
  '99': 'Lux',
  '101': 'Xerath',
  '102': 'Shyvana',
  '103': 'Ahri',
  '104': 'Graves',
  '105': 'Fizz',
  '106': 'Volibear',
  '107': 'Rengar',
  '110': 'Varus',
  '111': 'Nautilus',
  '112': 'Viktor',
  '113': 'Sejuani',
  '114': 'Fiora',
  '115': 'Ziggs',
  '117': 'Lulu',
  '119': 'Draven',
  '120': 'Hecarim',
  '121': "Kha'Zix",
  '122': 'Darius',
  '126': 'Jayce',
  '127': 'Lissandra',
  '131': 'Diana',
  '133': 'Quinn',
  '134': 'Syndra',
  '136': 'Aurelion Sol',
  '141': 'Kayn',
  '142': 'Zoe',
  '143': 'Zyra',
  '145': "Kai'Sa",
  '150': 'Gnar',
  '154': 'Zac',
  '157': 'Yasuo',
  '161': "Vel'Koz",
  '163': 'Taliyah',
  '164': 'Camille',
  '201': 'Braum',
  '202': 'Jhin',
  '203': 'Kindred',
  '222': 'Jinx',
  '223': 'Tahm Kench',
  '236': 'Lucian',
  '238': 'Zed',
  '240': 'Kled',
  '245': 'Ekko',
  '254': 'Vi',
  '266': 'Aatrox',
  '267': 'Nami',
  '268': 'Azir',
  '412': 'Thresh',
  '420': 'Illaoi',
  '421': "Rek'Sai",
  '427': 'Ivern',
  '429': 'Kalista',
  '432': 'Bard',
  '497': 'Rakan',
  '498': 'Xayah',
  '516': 'Ornn',
  '555': 'Pyke',
  '518': 'Neeko',
  '517': 'Sylas'
}

let rankName = {
  RANKED_SOLO_5x5: 'Ranked Solo/Duo',
  RANKED_FLEX_TT: 'Ranked Twisted Treeline',
  RANKED_FLEX_SR: 'Ranked Flex'
}

let queueName = {
  '0': 'Custom',
  '1': 'Normal (Blind Pick)',
  '2': 'Normal 5v5 Blind Pick',
  '4': 'Classic 5v5 Ranked Solo',
  '6': 'Ranked Premade 5v5',
  '7': 'Co-op vs AI 5v5',
  '8': 'Normal 3v3 Blind Pick',
  '9': '3v3 Ranked Flex',
  '14': 'Normal 5v5 Draft Pick',
  '16': 'Dominion Blind Pick 5v5',
  '17': 'Dominion Draft Pick 5v5',
  '25': 'Dominion Co-op vs AI',
  '31': 'Co-op vs AI Intro Bot',
  '32': 'Co-op vs AI Beginner Bot',
  '33': 'Co-op vs AI Intermediate Bot',
  '34': 'Intro',
  '35': 'Beginner',
  '36': 'Intermediate',
  '41': '3v3 Ranked Team',
  '42': '5v5 Ranked Team',
  '52': 'Beginner Co-op vs AI',
  '61': 'Team Builder 5v5',
  '62': 'ARAM',
  '63': 'ARAM',
  '64': 'ARAM',
  '65': 'ARAM',
  '70': 'One for All',
  '72': 'Snowdown Showdown 1v1',
  '73': 'Snowdown Showdown 2v2',
  '75': 'Hexakill 6v6',
  '76': 'Ultra Rapid Fire',
  '78': 'Mirrored One for All',
  '83': 'Co-op vs AI Ultra Rapid Fire',
  '90': 'The Teemoing',
  '91': 'Doom Bots Rank 1',
  '92': 'Doom Bots Rank 2',
  '93': 'Doom Bots Rank 5',
  '96': 'Ascension',
  '97': 'Ascension',
  '98': 'Hexakill 6v6',
  '100': "5v5 ARAM Butcher's Bridge",
  '300': 'Legend of the Poro King',
  '301': 'Legend of the Poro King',
  '310': 'Nemesis',
  '313': 'Black Market Brawlers',
  '314': 'Nexus Siege',
  '315': 'Nexus Siege',
  '316': 'Definitely Not Dominion',
  '317': 'Definitely Not Dominion',
  '318': 'AR Ultra Rapid Fire',
  '319': 'AR Ultra Rapid Fire',
  '320': 'Blood Hunt Assassin',
  '321': 'Blood Hunt Assassin',
  '324': 'ARSR',
  '325': 'ARSR',
  '400': 'Normal 5v5 Draft Pick',
  '401': 'Normal (Draft Pick)',
  '402': 'Normal (Draft Pick)',
  '403': 'Normal (Draft Pick)',
  '410': '5v5 Ranked Dynamic',
  '411': 'Ranked',
  '412': 'Ranked',
  '413': 'Ranked',
  '420': 'Ranked Solo/Duo',
  '421': 'Ranked Solo/Duo',
  '422': 'Ranked Solo/Duo',
  '430': 'Normal 5v5 Blind Pick',
  '431': 'Normal',
  '432': 'Normal',
  '433': 'Normal (Blind Pick)',
  '440': '5v5 Ranked Flex',
  '441': 'Ranked Flex',
  '442': 'Ranked Flex',
  '450': 'ARAM',
  '451': 'ARAM',
  '452': 'ARAM',
  '460': 'Normal 3v3 Blind Pick',
  '470': 'Ranked 3v3 Flex',
  '600': 'Blood Hunt Assassin',
  '601': 'Blood Hunt Assassin',
  '610': 'Dark Star: Singularity',
  '611': 'Dark Star: Singularity',
  '800': 'Co-op vs. AI Intermediate Bot',
  '801': 'Co-op vs. AI',
  '810': 'Co-op vs. AI Intro Bot',
  '820': 'Co-op vs. AI Beginner Bot',
  '830': 'Co-op vs. AI Intro Bot',
  '840': 'Co-op vs. AI Beginner Bot',
  '850': 'Co-op vs. AI Intermediate Bot',
  '900': 'AR Ultra Rapid Fire',
  '901': 'AR Ultra Rapid Fire',
  '910': 'Ascension',
  '911': 'Ascension',
  '920': 'Legend of the Poro King',
  '921': 'Legend of the Poro King',
  '930': 'ARAM',
  '931': 'ARAM',
  '940': 'Nexus Siege',
  '941': 'Nexus Siege',
  '950': 'Doom Bots Voting',
  '951': 'Level 100 Gauntlet',
  '960': 'Doom Bots Standard',
  '961': 'The Teemoing',
  '970': 'Hexakill',
  '980': 'Star Guardian Invasion: Normal',
  '981': 'Star Guardian Invasion: Normal',
  '982': 'Star Guardian Invasion: Normal',
  '990': 'Star Guardian Invasion: Onslaught',
  '1000': 'PROJECT: Hunters',
  '1001': 'PROJECT: Hunters',
  '1010': 'Snow Battle ARURF',
  '1011': 'Snow Battle ARURF',
  '1200': 'Nexus Blitz'
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  text-decoration: none;

  /*
	For those who enjoy CSS3 color & background transitions everywhere.
	This will save space and ease the stress on selecting what's needed
	for :hover and :active properties.
	*/

  -webkit-transition: background-color 250ms ease-in-out,
    color 250ms ease-in-out;
  -moz-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  -o-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  -ms-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

caption,
th,
td {
  font-weight: normal;
  text-align: left;
}

ol,
ul {
  list-style: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}
blockquote,
q {
  quotes: '' '';
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
h group,
menu,
nav,
section {
  display: block;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}

body {
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 12px;
  line-height: 24px;
  min-width: 0;
}

h1 {
  font-size: 48px;
  line-height: 56px;
}
h2 {
  font-size: 30px;
  line-height: 38px;
}
h3 {
  font-size: 22px;
  line-height: 30px;
}
h4 {
  font-size: 20px;
  line-height: 28px;
}
h5 {
  font-size: 18px;
  line-height: 26px;
}
h6 {
  font-size: 16px;
  line-height: 24px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  cursor: default;
}
.clear {
  clear: both;
}
a {
  color: #f05;
}

section {
  display: flex;
  flex-direction: column;
}

.app {
  background-color: rgb(29, 34, 39);
}

.footer {
  color: white;
  text-align: center;
  margin: 0 auto;
}

.fullscreen {
  max-width: 1200px;
  margin: 0 auto;
}

.bg-black {
  background-color: #22292f;
  width: auto;
}

.navbar {
  padding: 0.75em 0;
  display: flex;
}

.logo {
  width: 100%;
  font-weight: 100;
  text-align: center;
  font-size: 1.25rem;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blue {
  color: #72a0d9;
}

.search-bar {
  background-color: #3d4852;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  font-size: 12px;
  height: 20px;
  padding: 0.5rem 3.5rem 0.5rem 1.5rem;
  color: white;
}

.search-button {
  padding: 0.5rem 1.2rem;
  color: #fff;
}

.search-button {
  background-color: #2779bd;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  cursor: pointer;
  font-size: 12px;
  height: auto;
}

.form-container {
  margin: 0 1.25rem;
}

.form-flex {
  display: flex;
}

.champion {
  position: relative;
  background-size: cover;
  background-position-y: 510px;
  opacity: 0.9;
  width: 100%;
  background-color: black;
  margin-top: 2em;
}
.profile {
  display: flex;
  margin: 0 auto;
}
.summoner-icon {
  width: 12.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border: 4px solid white;
}
.summoner-profile {
  margin: 2.5em;
  display: flex;
}
.background {
  background-position: center 25%;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.35;
}
.summoner-name {
  text-shadow: 1px 1px 2px black;
  letter-spacing: 0.05em;
  font-size: 2.5rem;
  color: white;
  white-space: nowrap;
}
.summoner-info {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.summoner-stats {
  display: flex;
  color: white;
  text-shadow: 1px 1px 2px black;
  margin-top: 1.5rem;
}
.summoner-social {
  display: flex;
  margin: 0.5rem 0;
}
.summoner-region {
  margin-right: 1.5rem;
}
.streaming,
.online-status {
  padding: 0.25rem 0.5rem;
  border-radius: 0.125rem;
  background-color: #9561e2;
  color: white;
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
}
.online-status {
  background-color: #38c172;
  margin-right: 0.5rem;
}
.rank-container {
  background-color: #ddd;
  color: #ddd;
  display: flex;
  flex-direction: column;
}
.rank-group {
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 0.5em;
}

.summoner-verification {
  color: white;
  display: flex;
  flex-direction: column;
}

.rank-summary {
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
  background-color: #22292f;
}
.rank-stats {
  background-color: #3d4852;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  font-size: 18px;
  flex-direction: column;
}
.rank-emblem > img {
  width: 7em;
}
.rank-division {
  font-size: 24px;
  color: #6abbff;
  font-weight: bold;
  text-shadow: 1px 1px 3px black;
  text-transform: capitalize;
  font-variant: small-caps;
}
.rank-lp {
  font-weight: bold;
  font-size: 20px;
  line-height: 1.5em;
  text-shadow: 1px 1px 3px black;
}
.darken {
  color: rgba(255, 255, 255, 0.25);
}
.text-green {
  color: #38c172;
}

.flex-center {
  align-self: center;
}
.rank-icon > img {
  width: 5.5em;
  margin: 0 0.5em;
}
.rank-queue {
  text-align: center;
  width: 50px;
}
.rank-name {
  font-size: 12px;
}
.rank-master {
  color: rgb(199, 109, 215);
}
.rank-diamond {
  color: rgb(92, 111, 197);
}
.rank-gold {
  color: rgb(214, 195, 126);
}
.rank-grandmaster {
  color: rgb(235, 19, 71);
}
.rank-platinum {
  color: rgb(125, 213, 163);
}
.rank-silver {
  color: rgb(232, 232, 232);
}
.rank-bronze {
  color: rgb(196, 140, 77);
}
.rank-iron {
  color: rgb(206, 186, 165);
}
.rank-role {
  width: 5em;
}

.rank-data {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}

.rank-champ {
  display: flex;
  justify-content: space-around;
  margin: 1em 0;
}

.match-card {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.match-card-victory {
  border-left: 4px solid #4e77ff;
  background-color: #192845;
}
.match-card-victory-menu {
  background-color: #0e1727;
}
.match-card-defeat-menu {
  background-color: #250e17;
}
.teamlist:nth-child(odd) {
  background-color: rgba(165, 63, 102, 0.15);
}

.match-card-defeat {
  border-left: 4px solid #ff4e50;
  background-color: #45192b;
}
.match-summary {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5em;
}
.match-summary:nth-child(5) {
  flex: 4;
  align-items: center;
}

.match-summary {
  flex: 1;
}

.match-summoner-icon {
  margin: auto;
}

.rank-queue {
  margin: 0 auto;
}

.match-items {
  justify-content: center;
}

.match-summary:nth-child(2) {
  flex: 2;
}
.team-summary {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  line-height: 1.5em;
  flex-basis: 90px;
  min-width: 0;
}
.team-summary > p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.match-ending {
  font-weight: bold;
}
.match-defeat {
  color: #ff4e50;
}
.match-victory {
  color: #4e77ff;
}
.match-champ {
  width: 4rem;
  border-radius: 5px;
}
.match-champ-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.match-champ-stats > p {
  line-height: 1.5em;
}
.match-role {
  width: 1.5rem;
}
.match-score {
  display: flex;
  flex-direction: column;
}
.match-summoners {
  display: flex;
  flex-direction: column;
}
.team-summoner > img {
  width: 20px;
  margin: 1px 0;
}
.match-summoner-icon {
  width: 2.5rem;
  margin: 3px 0;
  cursor: pointer;
}
.match-team-icon {
  width: 1.5rem;
  margin: 1px 0;
  cursor: pointer;
}
.match-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.match-items > a {
  height: 4rem;
  align-items: center;
  align-content: center;
  margin: 0 5px;
  width: 4rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
}

.match-items > a > img {
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  cursor: pointer;
}

.match-slots {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.match-menu {
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 0 0 auto;
}

.match-menu > i {
  padding: 0.5em;
}
.flex-center {
  align-self: center;
}
.match-players {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.match-champs {
  width: 4em;
  margin: 2px;
}
.teamlist {
  display: flex;
  align-items: center;
  padding-left: 1em;
  width: 49%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.champ-level {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.level {
  position: relative;
  right: 14px;
  top: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 20px;
  text-align: center;
}
.team-items {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1em;
}
.team-items > img {
  width: 2.75rem;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 2px;
  height: 2.75rem;
  border-radius: 5px;
  cursor: pointer;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
  margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^='left'] {
  margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
@media only screen and (max-width: 1024px) {
  .teamlist {
    width: 48.7%;
  }
}

@media only screen and (max-width: 768px) {
  .teamlist {
    width: 48.6%;
  }
  .match-players {
    display: flex;
    justify-content: center;
  }
  .team-items > img {
    width: 2.2rem;
    height: 2.2rem;
  }
}

@media only screen and (max-width: 600px) {
  body {
    min-width: 0;
  }
  .logo {
    display: flex;
    justify-content: space-around;
    margin: 0 0 0 0.8em;
    align-items: center;
    width: 100%;
  }
  .search-bar {
    background-color: #3d4852;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    font-size: 12px;
    height: 20px;
  }

  .search-bar,
  .search-button {
    padding: 0.5rem 1.2rem;
    color: #fff;
  }

  .search-button {
    background-color: #2779bd;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    cursor: pointer;
    font-size: 12px;
    height: auto;
  }

  .form-container {
    margin: 0 10px;
  }

  .form-flex {
    display: flex;
  }
  .champion {
    position: relative;
    background-size: cover;
    background-position-y: 510px;
    opacity: 0.9;
    width: 100%;
    background-color: black;
  }
  .profile {
    display: flex;
    margin: 0 auto;
  }
  .summoner-icon {
    width: 12.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    border: 4px solid white;
  }
  .summoner-profile {
    margin: 2.5em auto;
    display: flex;
    flex-direction: column;
  }
  .background {
    background-position: center 25%;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.15;
  }
  .summoner-name {
    text-shadow: 1px 1px 2px black;
    letter-spacing: 0.05em;
    font-size: calc(30vw / 2.8);
    margin: 1rem 0;
    color: white;
    text-align: center;
    white-space: nowrap;
  }
  .summoner-info {
    display: flex;
    flex-direction: column;
  }
  .summoner-stats {
    display: flex;
    justify-content: space-around;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
  .summoner-social {
    justify-content: space-evenly;
    display: flex;
    margin: 0.5rem 0;
  }
  .streaming,
  .online-status {
    padding: 0.25rem 0.5rem;
    border-radius: 0.125rem;
    background-color: #9561e2;
    color: white;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
  }
  .online-status {
    background-color: #38c172;
  }
  .rank-container {
    background-color: #ddd;
    color: #ddd;
    display: flex;
    flex-direction: column;
  }
  .rank-group {
    display: flex;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 0.5em;
  }
  .rank-group:nth-child(odd) {
    margin-top: -1px;
    margin-bottom: -1px;
  }
  .rank-data {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }
  .rank-summary {
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    background-color: #22292f;
  }
  .rank-stats {
    background-color: #3d4852;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    text-align: center;
    font-size: 18px;
    flex-direction: column;
  }
  .rank-emblem > img {
    width: 7em;
  }
  .rank-division {
    font-size: 24px;
    color: #6abbff;
    font-weight: bold;
    text-shadow: 1px 1px 3px black;
    text-transform: capitalize;
    font-variant: small-caps;
  }
  .rank-lp {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.5em;
    text-shadow: 1px 1px 3px black;
  }
  .darken {
    color: rgba(255, 255, 255, 0.25);
  }
  .text-green {
    color: #38c172;
  }
  .rank-champ {
    display: flex;
    justify-content: space-around;
    margin: 1em 0;
  }
  .rank-ratio {
    font-size: 12px;
  }
  .summoner-verification {
    color: white;
    display: flex;
    justify-content: space-evenly;
  }
  .match-card {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .match-card-victory {
    border-left: 4px solid #4e77ff;
    background-color: #192845;
  }
  .match-card-victory-menu {
    background-color: #0e1727;
  }
  .match-card-defeat-menu {
    background-color: #250e17;
  }
  .teamlist:nth-child(odd) {
    background-color: rgba(165, 63, 102, 0.15);
  }
  .teamlist:nth-child(5) {
    border-bottom: 20px solid #111111;
  }
  .match-card-defeat {
    border-left: 4px solid #ff4e50;
    background-color: #45192b;
  }
  .match-summary {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    line-height: 1.5em;
  }
  .team-summary {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5em;
    flex-basis: 90px;
    min-width: 0;
  }
  .team-summary > p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .match-ending {
    font-weight: bold;
  }
  .match-defeat {
    color: #ff4e50;
  }
  .match-victory {
    color: #4e77ff;
  }
  .match-champ {
    width: 2rem;
    border-radius: 5px;
  }
  .match-champ-stats {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .match-champ-stats > p {
    line-height: 1.5em;
  }
  .match-role {
    width: 1.5rem;
  }
  .match-score {
    display: flex;
    flex-direction: column;
  }
  .match-summoners {
    display: flex;
    flex-direction: column;
  }
  .team-summoner > img {
    width: 20px;
    margin: 1px 0;
  }
  .match-summoner-icon {
    width: 1.5rem;
    margin: 1px 0;
  }
  .match-team-icon {
    width: 1rem;
    margin: 1px 0;
  }
  .match-items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 95px;
  }
  .match-items > a,
  .match-items > a > img {
    height: 1.8rem;
    align-items: center;
    align-content: center;
    margin: 1px;
    width: 1.8rem;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .match-slots {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .match-menu {
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 0 0 auto;
  }
  .match-card:nth-child(odd) {
    margin-top: -1px;
    margin-bottom: -1px;
  }
  .match-menu > i {
    padding: 0.5em;
  }
  .flex-center {
    align-self: center;
  }
  .rank-icon > img {
    width: 5.5em;
    margin: 0 0.5em;
  }
  .rank-queue {
    text-align: center;
    width: 50px;
  }
  .rank-name {
    font-size: 12px;
  }
  .rank-master {
    color: rgb(199, 109, 215);
  }
  .rank-diamond {
    color: rgb(92, 111, 197);
  }
  .rank-gold {
    color: rgb(214, 195, 126);
  }
  .rank-platinum {
    color: rgb(125, 213, 163);
  }
  .rank-silver {
    color: rgb(232, 232, 232);
  }
  .rank-bronze {
    color: rgb(196, 140, 77);
  }
  .rank-iron {
    color: rgb(206, 186, 165);
  }
  .rank-grandmaster {
    color: rgb(235, 19, 71);
  }
  .rank-role {
    width: 5em;
  }
  .match-players {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    height: 100%;
    justify-content: center;
    justify-items: center;
  }
  .match-champs {
    width: 2em;
    height: 100%;
    margin: 2px;
  }
  .teamlist {
    display: flex;
    align-items: center;
    padding-left: 1em;
    width: 97%;
  }
  .champ-level {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .level {
    position: relative;
    right: 30px;
    top: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 20px;
    text-align: center;
  }
  .team-items {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1em;
  }
  .team-items > img {
    width: 1.75rem;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 2px;
    height: 2.5em;
    border-radius: 5px;
  }
}
</style>