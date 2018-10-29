<template>
<section class="aboutMe">
<b-row no-gutters>
<b-col sm="0" md="6">
<b-img class="img" :src="info.imgSrc" fluid-grow alt="Image of me" />
</b-col>
<b-col sm="12" md="6">
<b-container fluid class="info-container">
<div class="inner-container">
<h1 class="mb-5"><Editable :editable="isAdmin" :content="info.title" @update='update("title", $event)'/></h1>
<p class="mb-4"><Editable :editable="isAdmin" :content="info.body" @update='update("body", $event)'/></p>
<h3><router-link to="/about"><Editable :editable="isAdmin" :content="info.link" @update='update("link", $event)'/></router-link></h3>
</div>
</b-container>
</b-col>
</b-row>
<details  class="aboutMe__details" v-if="isAdmin">
<p>Link de la imagen</p>
<Editable :editable="isAdmin" :content="info.imgSrc" @update='update("imgSrc", $event)'/>
</details>
</section>
</template>
<script>
import Editable from '@/components/Shared/Editable.vue'
import { db, store } from '@/main'

export default {
  name: 'AboutMe',
  components: {
    Editable
  },
  data () {
    return {
      info: Object,
      isAdmin: store.state.isAdmin
    }
  },
  firestore () {
    return {
      info: db.collection('Info').doc('aboutme')
    }
  },
  methods: {
    update (type, event) {
      if (!event) {
        event = type
      }
      db.collection('Info').doc('aboutme').update({
        [type]: event
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutMe {
padding: 0 15px;
  &__details {
    p {
      margin-bottom: 0;
      font-weight: bold;
    }
  }
  .col {
    padding-left: 0;
    padding-right: 0;
  }
}

.info-container {
background-color: #f2f2f2;
width: 100%;
height: 100%;
}

.inner-container {
padding: 18% 15%;
width: 100%;

}

.img {
width: 100%;
height: 100%;

@media only screen and (max-width: 600px) {
display: none;
}
}
</style>
