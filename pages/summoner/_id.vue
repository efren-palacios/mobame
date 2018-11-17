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
  },
  middleware: 'search'
}
</script>