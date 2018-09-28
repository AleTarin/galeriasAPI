<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Navbar from '@/components/Shared/Navbar.vue'
import Footer from '@/components/Shared/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>
