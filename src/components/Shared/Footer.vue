<template>
  <nav class="footer">
    <router-link to="/">Home</router-link>
    <router-link to="/gallery">Galerias</router-link>
    <router-link to="/about">Acerca de</router-link>
    <router-link to="/contact">Contacto</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
