<!--<template>
  <main class="container mx-auto sm:w-full">
  <div class="flex bg-black mt-4">
    <a class="sm:w-32 text-center" href="#">
      <div class="bg-blue lg:py-5 sm:py-8 hover:bg-blue-dark">
        <p><i class="fas fa-server"></i> Overview</p>
      </div>
    </a>
    <a href="#">
      <div class="p-5 hover:bg-grey-darkest">

        <p><i class="far fa-keyboard"></i> Matches

        </p>
      </div>
    </a>
    <a href="#">
      <div class="p-5 hover:bg-grey-darkest">

        <p><i class="fas fa-chart-bar"></i> League
        </p>
      </div>
    </a>
    <a href="#">
      <div class="p-5 hover:bg-grey-darkest">

        <p><i class="fas fa-book"></i> Runes

        </p>
      </div>
    </a>
    <div class="flex items-center justify-end text-white  w-3/5">
      <p>Do you like this summoner?</p>
      <a href="#">
        <div class="px-3 py-1 ml-4 bg-facebook rounded"><i class="fab fa-facebook"></i> <span class="font-bold">Like</span></div>
      </a>
    </div>
  </div>
  <div class="darken">
    <div class="flex text-white mx-auto champion p-2 border-b border-solid border-grey-light">
      <div v-if="masteries.length > 1">
        <div :key="index" v-for="(bg, index) of masteries.slice(0,1)">
        <div :style="{backgroundImage: 'url(https://cdn.communitydragon.org/8.21.1/champion/'+bg.championId+'/splash-art/centered/skin/0)' || 'https://cdn.communitydragon.org/8.21.1/champion/53/splash-art/centered/skin/5'}" class="background"></div>
      </div>
      </div>
      <div v-else>
        <div style="background-image: url('https://cdn.communitydragon.org/8.21.1/champion/53/splash-art/centered/skin/5')" class="background"></div>
        </div>
       <div ref="bg" :style="{backgroundImage: 'url(https://cdn.communitydragon.org/8.21.1/champion/'+masteries.shift()+'/splash-art/centered/skin/0)'}" class="background"></div>
      <div class="m-3"><img class="w-32 border-4 border-solid shadow-md " :src="'https://opgg-static.akamaized.net/images/profile_icons/profileIcon' + icon + '.jpg' " alt=""></div>
      <div class="flex flex-col w-2/5 my-4">

        <div class="flex items-center">

          <p class="text-4xl font-hairline tracking-wide text-shadow">{{name}}</p>
          <div class="px-2 ml-2 bg-green rounded-sm"><i class="fas fa-rss"></i> <span class="font-bold">Online</span></div>
          <a href="#">
            <div class="uppercase tracking-wide px-2 ml-2 bg-purple rounded-sm"><i class="fab fa-twitch"></i> <span class="font-bold">Streaming</span></div>
          </a>
        </div>
        <div class="flex my-2 text-shadow">
          <div><i class="fas ml-1 fa-globe-americas"></i> <span class="mr-3">North America</span></div>
          <div><i class="fas ml-1 fa-certificate"></i> Level {{level}}</div>
        </div>
        <div class="mt-4"><i class="fas fa-check-circle text-green"></i>

          <span class="font-bold text-black">Verified User</span> </div>
        <div><i class="far fa-clock text-black"></i>

          <span class="text-black">Updated {{time}}</span> </div>
      </div>
      <div class="flex justify-end my-5 flex-grow">
        <div class="flex flex-col">
          <div class="flex items-center">
            <a class="flex" href="#">
            <div class="tracking-wide px-3 py-2 ml-3 bg-purple-darkest "><i class="fas fa-gamepad"></i></div>
            <div class="tracking-wide px-4 py-2 mr-2 bg-purple-darker "><span class="font-bold">Game Info</span></div></a>
            <a class="flex" href="#">
            <div class="tracking-wide px-3 py-2 ml-4 bg-green-darkest "><i class="fas fa-sync"></i></div>
            <div class="tracking-wide px-5 py-2 mr-4 bg-green-darker "><span class="font-bold">Update</span>
            </div></a>
          </div>
          <div class="flex justify-end flex-grow text-grey-darkest">
            <div class="uppercase flex items-center text-center mt-12">
              <div class="mx-2">
                <p class="font-hairline text-xl">0</p>
                <p class="text-grey-darker font-bold">Posts</p>
              </div>
              <div class="mx-2">
                <p class="font-hairline text-xl">0</p>
                <p class="text-grey-darker font-bold">Following</p>
              </div>
              <div class="mx-2">
                <p class="font-hairline text-xl">0</p>
                <p class="text-grey-darker font-bold">Followers</p>
              </div>
              <div class="mx-2">
              <a class="text-black hover:text-grey-darkest" href="#">
                <div class="mx-2"><i class="fas fa-cog text-xl"></i></div>
              </a>
              </div>
              <a href="#">
                <div class="border border-solid border-grey-light uppercase tracking-wide px-2 py-2 ml-2 bg-grey-lighter rounded-sm text-blue mx-2 hover:text-white hover:bg-blue"><i class="fas fa-user-plus "></i> Follow</div>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</main>
</template> -->

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

    <section>
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
                :src="'https://opgg-static.akamaized.net/images/profile_icons/profileIcon' + icon + '.jpg' "
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
        <div
          :key="index"
          v-for="(player, index) of participant"
          class="container text-black bg-white"
        >
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
              <div>{{duration(matchlist[index].gameDuration)}}</div>
              <div class="rank-queue">{{dataqueuename[matchlist[index].queueId]}}</div>
            </div>

            <div class="match-summary">
              <div class="match-champ-stats">
                <img
                  class="match-champ"
                  :src="'https://cdn.communitydragon.org/9.1.1/champion/'+matchlist[index].participants[player].championId+'/square'"
                  alt
                >
                <p>{{championName(matchlist[index].participants[player].championId)}}</p>
                <p>Level {{matchlist[index].participants[player].stats.champLevel}}</p>
                <p>{{matchlist[index].participants[player].stats.kills}}/{{matchlist[index].participants[player].stats.deaths}}/{{matchlist[index].participants[player].stats.assists}}</p>
              </div>
            </div>
            <div class="match-summary">
              <div class="match-summoners">
                <img
                  class="match-summoner-icon"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[player].spell1Id]+'.png'"
                  alt
                >
                <img
                  class="match-summoner-icon"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[player].spell2Id]+'.png'"
                  alt
                >
                <img
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
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item0+'.png'"
                  alt
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item1+'.png'"
                  alt
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item2+'.png'"
                  alt
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item3+'.png'"
                  alt
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item4+'.png'"
                  alt
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item5+'.png'"
                  alt
                >
              </div>
            </div>
            <div class="match-summary match-menu">
              <i class="fas fa-bars"></i>
            </div>
          </div>
          <!-- end of match -->
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import moment from 'moment'

export default {
  data() {
    return {
      search: ''
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
      return moment(time).fromNow()
    },
    duration: function(time) {
      let duration = moment.duration(time, 'seconds')
      return moment(duration.asMilliseconds()).format('mm:ss')
    },
    submit(event) {
      event.preventDefault()
      this.$router.push(`/summoner/${this.search}`)
    }
  },
  computed: {
    masteries() {
      if (this.$store.state.masteries) {
        return this.$store.state.masteries.slice(0, 3)
      } else {
        return []
      }
    },
    rank() {
      return this.$store.state.rank
    },
    matches() {
      if (this.$store.state.matches.matches) {
        return this.$store.state.matches.matches.slice(0, 5)
      } else {
        return []
      }
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
    champname() {
      return champName
    },
    summonername() {
      return summoners
    },
    summonerid() {
      return this.$store.state.summoner.id
    },
    matchlist() {
      if (this.$store.state.match) {
        return this.$store.state.match
      } else {
        return []
      }
    },
    participant() {
      return this.$store.state.participant
    },
    summonertime() {
      return moment(this.$store.state.summoner.revisionDate).fromNow()
    },
    level() {
      return this.$store.state.summoner.summonerLevel
    },
    name() {
      return this.$store.state.summoner.name
    },
    icon() {
      return this.$store.state.summoner.profileIconId
    }
  }
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
[v-cloak] > * {
  display: none;
}
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
  min-width: 960px;
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

body {
  background: #ddd;
}

section {
  display: flex;
  flex-direction: column;
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
  width: 33.3%;
  font-weight: 100;
  text-align: center;
  font-size: 1.25rem;
  color: white;
  white-space: nowrap;
}

.blue {
  color: #72a0d9;
}

@media only screen and (max-width: 600px) {
  body {
    min-width: 0;
  }
  .logo {
    display: flex;
    justify-content: space-between;
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
    margin: 0 1.25rem 0 0;
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
    font-size: 3rem;
    margin: 1rem 0;
    color: white;
    text-align: center;
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
    border: 1px solid rgba(255, 255, 255, 0.05);
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
    width: 15px;
  }
  .match-summoner-icon {
    width: 1.5rem;
    margin: 1px 0;
  }
  .match-items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 95px;
  }
  .match-items > img {
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
  .rank-role {
    width: 5em;
  }
}
</style>

