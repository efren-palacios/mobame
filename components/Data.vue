<!-- <template>
  <section class="container mx-auto flex container bg-white p-4">
    <div class="bg-white rank">
      <div class="shadow flex-col text-black border border-solid border-grey-lightest">
        <div class="flex items-center text-black py-3 border-b border-solid border-grey-lighter">
          <div class="mx-4 text-rank">
            <i class="fas fa-trophy fa-fw"></i>
            <span class="text-grey-darker">Ranked Summary</span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex flex-col w-full">
            <div class="flex flex-col">
              <div
                :key="index"
                v-bind="rank"
                v-for="(data, index) of rank.slice().reverse()"
                class="flex items-center mx-4"
              >
                <img
                  class="mx-2 w-24"
                  :src="'http://opgg-static.akamaized.net/images/medals/' + data.tier.toLowerCase() + '_' + ranktier[data.rank.toLowerCase()] + '.png'"
                  alt
                >
                <div>
                  <p class="font-bold">{{rankname[data.queueType]}}</p>
                  <p class="text-blue capitalize">
                    {{data.tier.toLowerCase()}} {{data.rank}}
                    <span
                      class="text-grey-dark"
                    >in {{data.leagueName}}</span>
                  </p>
                  <p class="text-grey-dark">
                    <span class="font-bold text-grey-darker">{{data.leaguePoints}} LP</span> with
                    <span class="font-bold text-grey-darker">{{data.wins}}W / {{data.losses}}L</span>
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-around m-5 items-center">
        <div :key="index" v-bind="masteries" v-for="(champs, index) of masteries">
          <div class="flex flex-col items-center">
            <img
              width="70px"
              :src="'https://cdn.communitydragon.org/9.1.1/champion/'+champs.championId+'/square' "
              alt
              srcset
            >
            <img
              width="50px"
              :src="'https://raw.communitydragon.org/latest/game/assets/loadouts/summoneremotes/rewards/mastery/em_champ_mastery_0'+champs.championLevel+'_selector.summoneremotes_v2.png'"
              alt
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container text-black bg-white">
      <div class="w-100 p-2 mx-5 shadow text-black border border-solid border-grey-lightest">
        <div class="m-2 w-100 flex-grow">
          <div class="flex">
            <div class="w-1/6">
              <p class="text-grey-dark text-center">
                20G 9W 11L
                <b>(45%)</b>
              </p>
              <doughnut-chart :data="chartData" :options="options"/>
            </div>
            <div class="m-5 self-center">
              <p class="font-bold">
                6.1 /
                <span class="text-red">5.3</span> / 6.4
              </p>
              <p class="text-lg">
                2.34:1
                <span class="text-red">(53%)</span>
              </p>
            </div>
            <div class="flex items-center">
              <div class="flex w-full">

                <div class="champ-stats flex flex-col">
                  <div class="flex items-center mx-4">
                    <img
                      class="mx-2 w-10 rounded-full"
                      src="https://cdn.communitydragon.org/9.1.1/champion/Nocturne/square"
                      alt
                    >
                    <div>
                      <p class="font-bold">Nocturne</p>
                      <p>
                        <span class="font-bold text-red">60%</span>
                        <span class="text-grey-darker">(6W 4L)</span>
                        <span class="font-bold">2.51 KDA</span>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center mx-4">
                    <img
                      class="mx-2 w-10 rounded-full"
                      src="https://cdn.communitydragon.org/9.1.1/champion/XinZhao/square"
                      alt
                    >
                    <div>
                      <p class="font-bold">Xin Zhao</p>
                      <p>
                        <span class>0%</span>
                        <span class="text-grey-darker">(0W 3L)</span>
                        <span class="font-bold">1.86 KDA</span>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center mx-4">
                    <img
                      class="mx-2 w-10 rounded-full"
                      src="https://cdn.communitydragon.org/9.1.1/champion/Rammus/square"
                      alt
                    >
                    <div>
                      <p class="font-bold">Rammus</p>
                      <p>
                        <span class="font-bold">50%</span>
                        <span class="text-grey-darker">(1W 1L)</span>
                        <span class="font-bold text-green">2.51 KDA</span>
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
                <img
                  class="mx-2 w-10 rounded-full"
                  src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png"
                  alt
                >
                <div>
                  <p class="font-bold">Jungle</p>
                  <p>
                    <span class="font-bold text-blue">92%</span>
                    <span class="text-grey-darker">| Win Ratio</span>
                    <span class="font-bold">55%</span>
                  </p>
                </div>
              </div>
              <div class="flex items-center mx-4">
                <img
                  class="mx-2 w-10 rounded-full"
                  src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png"
                  alt
                >
                <div>
                  <p class="font-bold">Middle</p>
                  <p>
                    <span class="font-bold text-blue">8%</span>
                    <span class="text-grey-darker">| Win Ratio</span>
                    <span class="font-bold">0%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :key="index"
        v-for="(player, index) of participant"
        class="container text-black bg-white"
      >
        <div
          class="my-4 mx-5 shadow text-black"
          :class="{'win':(matchlist[index].participants[player].stats.win == true), 'loss':(matchlist[index].participants[player].stats.win == false)}"
        >
          <div class="flex items-center mx-4">
            <div class="flex flex-col items-center">
              <img
                class="mx-2 w-16 rounded-full"
                :src="'https://cdn.communitydragon.org/9.1.1/champion/'+matchlist[index].participants[player].championId+'/square'"
                alt
              >
              <p class="font-bold">{{champname[matchlist[index].participants[player].championId]}}</p>

            </div>
            <div class="flex flex-col">
              <div>
                <img
                  class="w-10"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[player].spell1Id]+'.png'"
                  alt
                >
              </div>
              <div>
                <img
                  class="w-10"
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/spell/'+summonername[matchlist[index].participants[player].spell2Id]+'.png'"
                  alt
                >
              </div>
            </div>
            <div>
              <div class="stats mx-2">
                <p class="my-1 text-base font-extrabold text-center">
                  {{matchlist[index].participants[player].stats.kills}}/
                  <span class="text-red">{{matchlist[index].participants[player].stats.deaths}}</span>
                  /{{matchlist[index].participants[player].stats.assists}}
                </p>
                <p>
                  <span
                    class="p-1 bg-grey-light"
                  >{{((matchlist[index].participants[player].stats.kills + matchlist[index].participants[player].stats.assists) / matchlist[index].participants[player].stats.deaths).toFixed(2)}}:1</span> KDA
                </p>
              </div>
            </div>
            <div>
              <div class="stats mr-2">
                <p
                  class="my-1 text-base font-extrabold text-center"
                >{{matchlist[index].participants[player].stats.totalMinionsKilled + matchlist[index].participants[player].stats.neutralMinionsKilled }} CS</p>
                <p>{{(matchlist[index].participants[player].stats.goldEarned / 1000).toFixed(1)}}K GOLD</p>
              </div>
            </div>
            <div>
              <div class="items items-center flex flex-wrap">
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item0+'.png'"
                  alt
                  class="w-10"
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item1+'.png'"
                  alt
                  class="w-10"
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item2+'.png'"
                  alt
                  class="w-10"
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item3+'.png'"
                  alt
                  class="w-10"
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item4+'.png'"
                  alt
                  class="w-10"
                >
                <img
                  :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item5+'.png'"
                  alt
                  class="w-10"
                >
              </div>
            </div>
            <img
              class="ml-1 w-8"
              :src="'http://ddragon.leagueoflegends.com/cdn/9.1.1/img/item/'+matchlist[index].participants[player].stats.item6+'.png'"
              alt
            >
            <div class="matchup flex flex-grow justify-end flex-wrap">
              <div class="m-2 teamlist">
                <div
                  :key="id"
                  v-for="(team, id) of matchlist[index].participantIdentities"
                  class="flex players items-center"
                >
                  <img
                    :src="'https://cdn.communitydragon.org/8.21.1/champion/'+matchlist[index].participants[id].championId+'/square'"
                    alt
                    class="w-5 h-full"
                  >
                  <span
                    class="mx-2"
                  >{{matchlist[index].participantIdentities[id].player.summonerName}}</span>
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
              at
              <span class="font-bold">{{duration(matchlist[index].gameDuration)}}</span> in
              <span class="font-bold">Normal</span>
            </div>
            <div class="scorefooter">
              <p>
                <span class="font-bold">{{time(matchlist[index].gameCreation)}}</span> in
                <span class="font-bold">Summoner's Rift</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> -->

<template>
  <div></div>
</template>
