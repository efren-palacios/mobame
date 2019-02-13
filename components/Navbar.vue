<template>
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
      event.preventDefault()
      this.$router.push(`/summoner/${this.search}`)
    }
  }
}
</script>
