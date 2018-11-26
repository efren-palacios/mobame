<template>
<section class="container mx-auto flex container bg-white p-4"> 
<div class="bg-white rank">
	<div class="shadow flex-col text-black border border-solid border-grey-lightest">
		<div class="flex items-center text-black py-3 border-b border-solid border-grey-lighter">
			<div class="mx-4 text-rank">
				<i class="fas fa-trophy fa-fw"></i>
				<span class="text-grey-darker"> Ranked Summary</span>
			</div>
		</div>
		<div class="flex items-center ">
			<div class="flex flex-col w-full">
				<div class="flex flex-col">
					<div :key="index" v-bind="rank" v-for="(data, index) of rank.slice().reverse()" class="flex items-center mx-4">
					<img class="mx-2 w-24" :src="'http://opgg-static.akamaized.net/images/medals/' + data.tier.toLowerCase() + '_' + ranktier[data.rank.toLowerCase()] + '.png'" alt="" />
					<div>
						<p class="font-bold">{{rankname[data.queueType]}}</p>
						<p class="text-blue capitalize">{{data.tier.toLowerCase()}} {{data.rank}}
							<span class="text-grey-dark">in {{data.leagueName}}</span>
						</p>
						<p class="text-grey-dark">
							<span class="font-bold text-grey-darker ">{{data.leaguePoints}} LP</span> with 
							<span class="font-bold text-grey-darker ">{{data.wins}}W / {{data.losses}}L </span>
						</p>
					</div>
				</div>
        <div>
        </div>
				</div>
			</div>
		</div>
	</div>
  <div class="flex justify-around m-5 items-center">
  <div :key="index" v-bind="masteries" v-for="(champs, index) of masteries">
        <div class="flex flex-col items-center">
          <img width="70px" :src="'https://cdn.communitydragon.org/8.21.1/champion/'+champs.championId+'/square' " alt="" srcset="">
          <img width="50px" :src="'https://raw.communitydragon.org/latest/game/assets/loadouts/summoneremotes/rewards/mastery/em_champ_mastery_0'+champs.championLevel+'_selector.summoneremotes_v2.png'" alt="">
        </div>
  </div>
  </div>
</div>
  <div class="container text-black bg-white">
    
<div class="w-100 p-2  mx-5 shadow text-black border border-solid border-grey-lightest">
	<div class="m-2 w-100 flex-grow">
		<div class="flex">
			<div class="w-1/6">
				<p class="text-grey-dark text-center">20G 9W 11L 
					<b>(45%)</b>
				</p>
				<doughnut-chart :data="chartData" :options="options" />
			</div>
			<div class="m-5 self-center">
				<p class="font-bold">6.1 / 
					<span class="text-red">5.3</span> / 6.4
				</p>
				<p class="text-lg">2.34:1 
					<span class="text-red">(53%)</span>
				</p>
			</div>
			<div class="flex items-center">
				<div class="flex w-full">
					<!-- Champion Stats -->
					<div class="champ-stats flex flex-col">
						<div class="flex items-center mx-4">
							<img class="mx-2 w-10 rounded-full" src="https://cdn.communitydragon.org/8.21.1/champion/Nocturne/square" alt=""/>
							<div>
								<p class="font-bold">Nocturne</p>
								<p>
									<span class="font-bold text-red">60%</span>
									<span class="text-grey-darker"> (6W 4L)</span>
									<span class="font-bold"> 2.51 KDA</span>
								</p>
							</div>
						</div>
						<div class="flex items-center mx-4">
							<img class="mx-2 w-10 rounded-full" src="https://cdn.communitydragon.org/8.21.1/champion/XinZhao/square" alt=""/>
							<div>
								<p class="font-bold">Xin Zhao</p>
								<p>
									<span class="">0%</span>
									<span class="text-grey-darker"> (0W 3L)</span>
									<span class="font-bold"> 1.86 KDA</span>
								</p>
							</div>
						</div>
						<div class="flex items-center mx-4">
							<img class="mx-2 w-10 rounded-full" src="https://cdn.communitydragon.org/8.21.1/champion/Rammus/square" alt=""/>
							<div>
								<p class="font-bold">Rammus</p>
								<p>
									<span class="font-bold">50%</span>
									<span class="text-grey-darker"> (1W 1L)</span>
									<span class="font-bold text-green"> 2.51 KDA</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="flex-grow">
				<div>
					<p class="text-center text-grey-dark">Preferred Position (Rank)</p>
				</div>
				<div class="flex items-center mx-4">
					<img class="mx-2 w-10 rounded-full" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png" alt=""/>
					<div>
						<p class="font-bold">Jungle</p>
						<p>
							<span class="font-bold text-blue">92%</span>
							<span class="text-grey-darker"> | Win Ratio</span>
							<span class="font-bold">55%</span>
						</p>
					</div>
				</div>
				<div class="flex items-center mx-4">
					<img class="mx-2 w-10 rounded-full" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png" alt=""/>
					<div>
						<p class="font-bold">Middle</p>
						<p>
							<span class="font-bold text-blue">8%</span>
							<span class="text-grey-darker"> | Win Ratio</span>
							<span class="font-bold">0%</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    <div :key="index" v-for="(player, index) of participant" class="container text-black bg-white">
      <div class="my-4  mx-5 shadow text-black" :class="{'win':(matchlist[index].participants[player].stats.win == true), 'loss':(matchlist[index].participants[player].stats.win == false)}">
          <div class="flex items-center mx-4">
            <div class="flex flex-col items-center">
            <img class="mx-2 w-16 rounded-full" :src="'https://cdn.communitydragon.org/8.21.1/champion/'+matchlist[index].participants[player].championId+'/square'" alt="">
              <p class="font-bold">{{champname[matchlist[index].participants[player].championId]}}</p>
              <!-- <p class="font-bold text-blue-dark text-xs">{{match.lane}}</p> -->
            </div>
            <div class="flex flex-col">
              <div><img class="w-10" :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/spell/'+summonername[matchlist[index].participants[player].spell1Id]+'.png'" alt=""></div>
              <div><img class="w-10" :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/spell/'+summonername[matchlist[index].participants[player].spell2Id]+'.png'" alt=""></div>
            </div>
            <div>
              <div class="stats mx-2">
                <p class="my-1 text-base font-extrabold text-center">{{matchlist[index].participants[player].stats.kills}}/<span class="text-red">{{matchlist[index].participants[player].stats.deaths}}</span>/{{matchlist[index].participants[player].stats.assists}}</p>
                <p><span class="p-1 bg-grey-light">{{((matchlist[index].participants[player].stats.kills + matchlist[index].participants[player].stats.assists) / matchlist[index].participants[player].stats.deaths).toFixed(2)}}:1</span> KDA</p>
              </div>
            </div>
            <div>
              <div class="stats mr-2">
                <p class="my-1 text-base font-extrabold text-center">{{matchlist[index].participants[player].stats.totalMinionsKilled + matchlist[index].participants[player].stats.neutralMinionsKilled }} CS</p>
                <p>{{(matchlist[index].participants[player].stats.goldEarned / 1000).toFixed(1)}}K GOLD</p>
              </div>
            </div>
            <div>
              <div class="items items-center flex flex-wrap">
                <img :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/item/'+matchlist[index].participants[player].stats.item0+'.png'" alt="" class="w-10"> <img :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/item/'+matchlist[index].participants[player].stats.item1+'.png'" alt="" class="w-10">
                <img :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/item/'+matchlist[index].participants[player].stats.item2+'.png'" alt="" class="w-10"><img :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/item/'+matchlist[index].participants[player].stats.item3+'.png'" alt="" class="w-10">
                <img :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/item/'+matchlist[index].participants[player].stats.item4+'.png'" alt="" class="w-10"><img :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/item/'+matchlist[index].participants[player].stats.item5+'.png'" alt="" class="w-10">
              </div>
            </div>
            <img class="ml-1 w-8" :src="'http://ddragon.leagueoflegends.com/cdn/8.23.1/img/item/'+matchlist[index].participants[player].stats.item6+'.png'" alt="">
            <div class="matchup flex flex-grow justify-end flex-wrap">
              <div class="m-2 teamlist">
                <div :key="id" v-for="(team, id) of matchlist[index].participantIdentities" class="flex players items-center">
                  <img :src="'https://cdn.communitydragon.org/8.21.1/champion/'+matchlist[index].participants[id].championId+'/square'" alt="" class="w-5 h-full"> <span class="mx-2">{{matchlist[index].participantIdentities[id].player.summonerName}}</span>
                </div>
              </div>
            </div>

          </div>
          <div class="stat-footer p-2 bg-grey-lighter flex items-center justify-between">
            <div class="scorefooter">
              <span v-if="matchlist[index].participants[player].stats.win == true">
                <span class="text-green-dark font-bold">Victory</span>
              </span>
              <span v-else>
                <span class="text-red-dark font-bold">Defeat</span>
              </span>
              at <span class="font-bold">{{duration(matchlist[index].gameDuration)}}</span> in <span class="font-bold">{{modes[matchlist[index].queueId]}}</span>
            </div>
            <div class="scorefooter">
             <p><span class="font-bold">{{time(matchlist[index].gameCreation)}}</span> in <span class="font-bold">Summoner's Rift</span></p>
            </div>
          </div>
          </div>
          </div>
          </div>
</section>
</template>

<script>
import DoughnutChart from '~/components/doughnut-chart'
import moment from 'moment'
let tier = {
  i: '1',
  ii: '2',
  iii: '3',
  iv: '4',
  v: '5'
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
  '555': 'Pyke'
}

let modes = {
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
  '1011': 'Snow Battle ARURF'
}

let rankName = {
  RANKED_SOLO_5x5: 'Ranked Solo/Duo',
  RANKED_FLEX_TT: 'Ranked Twisted Treeline',
  RANKED_FLEX_SR: 'Ranked Flex'
}
export default {
  components: { DoughnutChart },
  data() {
    return {
      chartData: {
        labels: ['losses', 'wins'],
        datasets: [
          {
            data: [11, 9],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(56, 193, 114, 0.2)'
            ],
            borderColor: ['rgba(255,99,132,1)', 'rgba(56, 193, 114, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    }
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
    ranktier() {
      return tier
    },
    rankname() {
      return rankName
    },
    champname() {
      return champName
    },
    summonername() {
      return summoners
    },
    modes() {
      return modes
    },
    summonerid() {
      return this.$store.state.summoner.id
    },
    matchlist() {
      return this.$store.state.match
    },
    participant() {
      return this.$store.state.participant
    }
  }
}
</script>