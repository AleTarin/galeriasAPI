<template>
  <section class="contact">
    <ContactMe/>
  </section>
</template>

<script>
import ContactMe from '@/components/Home/ContactMe.vue'

export default {
  name: 'contact',
  components: {
    ContactMe
  }
}
</script>

<style>
  .contact {
    margin: 80px 20px;
  }
</style>
