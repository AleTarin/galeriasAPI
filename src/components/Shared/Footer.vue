<template>
  <footer class="navbar">
      <img class="navbar__logo" src="https://wildlifesafariadventures.com/wp-content/uploads/2017/01/cropped-wildlife-safari-adventures-lion-logo.png" alt="logo">
      <div class="footer_info">
          01325 382 555 <i class="fas fa-phone"></i> <br>
          INFO@STANSEATON.COM  <i class="far fa-envelope"></i><br>
          37 DUKE STREET • DARLINGTON • COUNTY DURHAM • DL3 7RX<i class="fas fa-home"></i>
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
  }
  .navbar__logo {
    height: 60%;
    max-height: 100px;
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
