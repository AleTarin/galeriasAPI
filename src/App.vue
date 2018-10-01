<template>
  <main id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </main>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=K2D');
  html body{
    font-family: 'K2D', sans-serif;
  }
  a, a:hover, a:active, a:visited {
    text-decoration: none;
    color: inherit;
  }

  .slider {
    .carousel-caption {
      bottom: 40% ;
    }

    .carousel-indicators {
      li {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
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
