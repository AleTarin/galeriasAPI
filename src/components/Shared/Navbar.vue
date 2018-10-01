<template>
  <header class="navbar">
      <img class="navbar__logo" src="https://wildlifesafariadventures.com/wp-content/uploads/2017/01/cropped-wildlife-safari-adventures-lion-logo.png" alt="logo">
      <router-link to="/">Home</router-link>
      <router-link to="/gallery">Galerias</router-link>
      <router-link to="/about">Acerca de</router-link>
      <router-link to="/contact">Contacto</router-link>
      <div class="navbar__social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fab fa-pinterest-p"></i></a>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar {
    height: 80px;
    background: #f2f2f2;
  }
  .navbar__logo {
    height: 60%;
  }
  .navbar__social {
    display: flex;
    justify-content: space-around;
    width: 10%;
  }
</style>
