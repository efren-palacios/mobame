<template>
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
        <div :key="bg" v-for="bg of masteries.slice(0,1)">
        <div :style="{backgroundImage: 'url(https://cdn.communitydragon.org/8.21.1/champion/'+bg.championId+'/splash-art/centered/skin/0)' || 'https://cdn.communitydragon.org/8.21.1/champion/53/splash-art/centered/skin/5'}" class="background"></div>
      </div>
      </div>
      <div v-else>
        <div style="background-image: url('https://cdn.communitydragon.org/8.21.1/champion/53/splash-art/centered/skin/5')" class="background"></div>
        </div>
      <!-- <div ref="bg" :style="{backgroundImage: 'url(https://cdn.communitydragon.org/8.21.1/champion/'+masteries.shift()+'/splash-art/centered/skin/0)'}" class="background"></div> -->
      <div class="m-3"><img class="w-32 border-4 border-solid shadow-md " :src="'https://opgg-static.akamaized.net/images/profile_icons/profileIcon' + icon + '.jpg' " alt=""></div>
      <div class="flex flex-col w-2/5 my-4">

        <div class="flex items-center">

          <p class="text-4xl font-hairline tracking-wide text-shadow">{{name}}</p>
          <div class="px-2 ml-2 bg-green rounded-sm"><i class="fas fa-rss"></i> <span class="font-bold">Online</span></div>
          <a href="#">
            <div class="uppercase tracking-wide px-2 ml-2 bg-purple rounded-sm"><i class="fab fa-twitch"></i> <span class="font-bold">Streaming</span></div>
          </a>
        </div>
        <!-- end of darvec -->
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
</template>

<script>
import moment from 'moment'

export default {
  component: {},
  computed: {
    masteries() {
      return this.$store.state.masteries
    },
    time() {
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
    },
    rank() {
      return this.$store.state.rank
    }
  }
}
</script>
