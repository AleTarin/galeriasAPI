<template>
  <section class="about">
    <AboutMe/>
  </section>
</template>

<script>
import AboutMe from '@/components/Home/AboutMe.vue'

export default {
  name: 'about',
  components: {
    AboutMe
  }
}
</script>

<style>
  .about {
    margin: 80px 20px;
  }
</style>
