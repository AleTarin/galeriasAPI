<template>
  <footer class="navbar">
      <img class="navbar__logo" src="https://wildlifesafariadventures.com/wp-content/uploads/2017/01/cropped-wildlife-safari-adventures-lion-logo.png" alt="logo">
      Victor Romero
      <div class="footer_info">
          <i class="fas fa-phone"></i> 01325 382 555 <br>
          <i class="far fa-envelope"></i>INFO@STANSEATON.COM  <br>
          <i class="fas fa-home"></i> 37 DUKE STREET • DARLINGTON • COUNTY DURHAM • DL3 7RX
      </div>
      <div class="navbar__social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fab fa-pinterest-p"></i></a>
      </div>
  </footer>
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
  .navbar {
    min-height: 150px;
    background: #f2f2f2;
    display: flex;
    justify-content: space-around;
    padding: 0 50px;
  }
  .navbar__logo {
    height: 60%;
    max-height: 100px;
    display: inline-block;
  }
  .navbar__social {
    display: flex;
    justify-content: space-around;
    width: 10%;
    min-width: 150px;
  }
  .footer_info {
    text-align: center;
  }
</style>
