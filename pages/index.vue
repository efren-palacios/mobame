<template>
  <div>
    <Nav/>
  </div>
</template>

<script>
import Nav from '~/components/Navbar.vue'
import Main from '~/components/Main.vue'
export default {
  components: {
    Nav,
    Main
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
