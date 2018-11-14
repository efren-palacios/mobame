<template>
<section class="bg-black font-sans">
  <div class="container mx-auto flex items-center py-3">
    <div class="sm:w-1/3 md:auto lg:auto font-hairline">
      <p class="text-center text-lg logo"><a href="#">MOBA<span class="blue">ME</span></a></p>
    </div>
    <div class="sm:w-4/5 md:w-2/6 lg:w-3/6 flex">
    <form @submit.prevent="submit" class="flex" action="">
      <input v-model="search" autofocus placeholder="Search for a summoner..." type="text" class="rounded-l bg-grey-darkest text-white px-6 py-3 ">
      <button v-on:click="search" class="rounded-r bg-blue-dark text-white px-6 py-3 hover:bg-blue"><i class="fas fa-search"></i></button>
    </form>
    </div>
    <div class="flex items-center justify-around lg:w-2/6 sm:w-2/5">
      <a href="#">
        <div>
          <p><i class="fas fa-cloud"></i> NA </p>
        </div>
      </a>
      <a href="#">
        <div>
          <i class="fas fa-globe-americas"></i> English
        </div>
      </a>
      <a href="#">
        <div class="flex items-center">
          <img class="h-8 w-8 rounded" src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon3376.jpg" alt="">
          <div class="px-2">Effy</div>
        </div>
      </a>
    </div>
    </div>
</section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`/summoner/${this.search}`)
    }
  }
}
</script>
