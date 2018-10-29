<template>
  <header class="navbar">
      <span>
        <img class="navbar__logo" :src="footer.logoSrc">
        <Editable :editable="isAdmin" :content="footer.name" @update='update("name", $event)'/>
      </span>
      <router-link to="/">Home</router-link>
      <router-link to="/galleries">Galerias</router-link>
      <router-link to="/about">Acerca de</router-link>
      <router-link to="/contact">Contacto</router-link>
      <div class="navbar__social">
        <a :href="footer.facebook"><i class="fab fa-facebook-f"></i></a>
        <a :href="footer.instagram"><i class="fab fa-instagram"></i></a>
        <a :href="footer.twitter"><i class="fab fa-twitter"></i></a>
      </div>
  </header>
</template>

<script>
import Editable from '@/components/Shared/Editable.vue'
import { db, store } from '@/main'

export default {
  name: 'Navbar',
  components: {
    Editable
  },
  data () {
    return {
      footer: Object,
      isAdmin: store.state.isAdmin
    }
  },
  firestore () {
    return {
      footer: db.collection('Info').doc('footer')
    }
  },
  methods: {
    update (type, event) {
      if (!event) {
        event = type
      }
      db.collection('Info').doc('footer').update({
        [type]: event
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar {
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    display: flex;
    width: 100vw;
    text-shadow: 2px 2px black;
    color: white;

    a {
      color: white;
    }
  }
  .navbar__logo {
    height: 40px;
    background: white;
    border-radius: 50%;
  }
  .navbar__social {
    display: flex;
    justify-content: space-around;
    width: 10%;
    @media only screen and (max-width: 600px) {
      display: none;
    }

    a {
      color: white;
    }
  }
</style>
