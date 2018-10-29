<template>
  <section>
    <footer class="navbar">
        <img class="navbar__logo" :src="footer.logoSrc" alt="logo">
        <Editable :editable="isAdmin" :content="footer.name" @update='update("name", $event)'/>
        <div class="footer_info">
            <i class="fas fa-phone"/><Editable :editable="isAdmin" :content="footer.phone" @update='update("phone", $event)'/><br>
            <i class="far fa-envelope"/><Editable :editable="isAdmin" :content="footer.email" @update='update("email", $event)'/><br>
            <i class="fas fa-home"></i> <Editable :editable="isAdmin" :content="footer.home" @update='update("home", $event)'/>
        </div>
        <div class="navbar__social">
          <a :href="footer.facebook"><i class="fab fa-facebook-f"></i></a>
          <a :href="footer.twitter"><i class="fab fa-instagram"></i></a>
          <a :href="footer.instagram"><i class="fab fa-twitter"></i></a>
        </div>
      <details v-show="isAdmin">
        <p>Logo</p>
        <Editable :editable="true" :content="footer.logoSrc" @update='update("logoSrc", $event)'/><br>
        <i class="fab fa-facebook-f"/><Editable :editable="true" :content="footer.facebook" @update='update("facebook", $event)'/><br>
        <i class="fab fa-twitter"/><Editable :editable="true" :content="footer.twitter" @update='update("twitter", $event)'/><br>
        <i class="fab fa-instagram"/><Editable :editable="true" :content="footer.instagram" @update='update("instagram", $event)'/>
      </details>
    </footer>
  </section>
</template>

<script>
import { db, store } from '@/main'
import Editable from '@/components/Shared/Editable.vue'

export default {
  name: 'Footer',
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
    min-height: 150px;
    background: #f2f2f2;
    display: flex;
    justify-content: space-around;
    padding: 0 50px;
    details {
      width: 100%;
      i {
      margin-right: 12px;
      width: 10px;
      }
      p {
        font-weight: bold;
        margin-bottom: 0;
      }
    }
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
    a{
      color: black;
    }
  }
  .footer_info {
    width: 50%;
    text-align: center;
  }
</style>
