<template>
  <div>
    <div class="search flex-col bg-black">
      <p class="text-5xl text-center text-lg logo text-white my-5">MOBA<span class="blue">ME</span></p>
      <form @submit.prevent="submit" class="flex" action="">
      <input v-model="search" autofocus placeholder="Search for a summoner..." type="text" class="form rounded-l bg-white text-black px-10 py-7 ">
      <button v-on:click="search" class="rounded-r bg-blue-dark text-white px-6 py-3 hover:bg-blue"><i class="fas fa-search"></i></button>
    </form>
    </div>
  </div>
</template>

<style>
.search {
  min-height: 500px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.form {
  width: 500px;
}
</style>

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

