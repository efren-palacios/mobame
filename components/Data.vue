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
				<div class="flex items-center border-b border-solid border-grey-light mx-4">
					<img class="mx-2 w-24" src="http://opgg-static.akamaized.net/images/medals/diamond_3.png" alt="" />
					<div>
						<p class="font-bold">Ranked Solo/Duo</p>
						<p class="text-blue">Diamond 2 
							<span class="text-grey-dark">in Shyvana's Tricksters</span>
						</p>
						<p class="text-grey-dark">
							<span class="font-bold text-grey-darker ">0 LP</span> with 
							<span class="font-bold text-grey-darker ">514W / 522L </span>
						</p>
					</div>
				</div>
				<div class="flex items-center mx-4">
					<img class="mx-2 w-24" src="http://opgg-static.akamaized.net/images/medals/gold_1.png" alt="" />
					<div>
						<p class="font-bold">Ranked Solo/Duo</p>
						<p class="text-blue">Gold 1 
							<span class="text-grey-dark">in Swain's Giants</span>
						</p>
						<p class="text-grey-dark">
							<span class="font-bold text-grey-darker ">18 LP</span> with 
							<span class="font-bold text-grey-darker ">8W / 8L </span>
						</p>
					</div>
				</div>
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
					<img class="mx-2 w-10 rounded-full" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/70/Mid_icon.png" alt=""/>
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
    <div class="container text-black bg-white">
      <div class="my-4  mx-5 shadow text-black win">
          <div class="flex items-center mx-4">
            <div class="flex flex-col items-center">
              <img class="mx-2 w-16 rounded-full" src="https://cdn.communitydragon.org/8.21.1/champion/Thresh/square" alt="">
              <p class="font-bold">Thresh</p>
            </div>
            <div class="flex flex-col">
              <div><img class="w-10" src="https://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_flash.png" alt=""></div>
              <div><img class="w-10" src="https://raw.communitydragon.org/latest/game/data/spells/icons2d/summonerignite.png" alt=""></div>
            </div>
            <div>
              <div class="stats mx-2">
                <p class="my-1 text-base font-extrabold text-center">3/7/39</p>
                <p><span class="p-1 bg-grey-light">4:57:0</span> KDA</p>
              </div>
            </div>
            <div>
              <div class="stats mr-2">
                <p class="my-1 text-base font-extrabold text-center">37 CS</p>
                <p>15K GOLD</p>
              </div>
            </div>
            <div>
              <div class="items items-center flex flex-wrap">
                <img src="http://raw.communitydragon.org/latest/game/data/items/icons2d/3401_martyrsshroud.png" alt="" class="w-10"> <img src="http://raw.communitydragon.org/latest/game/data/items/icons2d/2049_sightstone.png" alt="" class="w-10">
                <img src="http://raw.communitydragon.org/latest/game/data/items/icons2d/3143_randuins_omen.png" alt="" class="w-10"><img src="http://raw.communitydragon.org/latest/game/data/items/icons2d/3190_crest_of_the_iron_solari.png" alt="" class="w-10">
                <img
                  src="http://raw.communitydragon.org/latest/game/data/items/icons2d/3222_mikaels_crucible.png" alt="" class="w-10"><img src="http://raw.communitydragon.org/latest/game/data/items/icons2d/3008_boots_of_swiftness.png" alt="" class="w-10">
              </div>
            </div>
            <img class="ml-1 w-8" src="http://raw.communitydragon.org/latest/game/data/items/icons2d/3351_greaterredtrinket.png" alt="">
            <!-- My Team -->
            <div class="matchup flex flex-grow justify-end">
              <div class="flex flex-col m-2">
                <div class="flex players items-center">
                  <img src="https://cdn.communitydragon.org/latest/champion/Zed/square" alt="" class="w-5 h-full"> <span class="mx-2">Ban Azir</span>
                </div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Tristana/square" alt="" class="w-5 h-full"> <span class="mx-2">Post Malone</span></div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Swain/square" alt="" class="w-5 h-full"> <span class="mx-2">C9 Jensen</span></div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Hecarim/square" alt="" class="w-5 h-full"> <span class="mx-2">C9 Licorice</span></div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Thresh/square" alt="" class="w-5 h-full"> <span class="mx-2"><span class="text-bold">Darvec</span></span>
                </div>
              </div>
              <!-- Opponents -->
              <div class="flex flex-col m-2">
                <div class="flex players items-center">
                  <img src="https://cdn.communitydragon.org/latest/champion/Zed/square" alt="" class="w-5 h-full"> <span class="mx-2">Ban Azir</span>
                </div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Tristana/square" alt="" class="w-5 h-full"> <span class="mx-2">Post Malone</span></div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Swain/square" alt="" class="w-5 h-full"> <span class="mx-2">C9 Jensen</span></div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Hecarim/square" alt="" class="w-5 h-full"> <span class="mx-2">C9 Licorice</span></div>
                <div class="flex players items-center"><img src="https://cdn.communitydragon.org/latest/champion/Thresh/square" alt="" class="w-5 h-full"> <span class="mx-2"><span class="text-bold">Darvec</span></span>
                </div>
              </div>
            </div>

          </div>
          <div class="stat-footer p-2 bg-grey-lighter flex items-center justify-between">
            <div class="scorefooter">
              <p><span class="text-green-dark font-bold">Victory</span> at <span class="font-bold">51m 21s</span> in <span class="font-bold">Normal</span></p>
            </div>
            <div class="scorefooter">
              <p><span class="font-bold">2 Days Ago</span> in <span class="font-bold">Summoner's Rift</span></p>
            </div>
          </div>
          </div>
          </div>
          </div>
</section>
</template>

<script>
import DoughnutChart from '~/components/doughnut-chart'
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
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
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
  }
}
</script>