<template>
  <div>
  <NavBar />
  <Main />
  <Data />
  </div>
</template>

<script>
import NavBar from '~/components/Navbar.vue'
import Main from '~/components/Main.vue'
import Data from '~/components/Data.vue'
export default {
  components: {
    NavBar,
    Main,
    Data
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
