<template>
  <section class="my-video">
    <Modal v-if="openModal" @close="openModal = false">
      <iframe width="1280" height="720" :src="info.videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </Modal>
    <figure :style="`background-image: url('${info.imgSrc}');`">
      <div class="my-video__container" @click="toggleModal()">
        <i class="far fa-play-circle"></i> {{info.text}}
      </div>
    </figure>
    <details v-if="isAdmin" class="my-video__details">
      <p>Texto descriptivo</p>
      <Editable :editable="isAdmin" :content="info.text" @update='update("text", $event)'/>
      <p>Link del Video</p>
      <Editable :editable="isAdmin" :content="info.videoSrc" @update='update("videoSrc", $event)'/>
      <p>Link de la imagen</p>
      <Editable :editable="isAdmin" :content="info.imgSrc" @update='update("imgSrc", $event)'/>
    </details>
  </section>
</template>

<script>
import Modal from '@/components/Shared/Modal.vue'
import Editable from '@/components/Shared/Editable.vue'
import { db, store } from '@/main'

export default {
  name: 'MyVideo',
  components: {
    Modal,
    Editable
  },
  data () {
    return {
      openModal: false,
      info: Object,
      isAdmin: store.state.isAdmin
    }
  },
  firestore () {
    return {
      info: db.collection('Info').doc('video')
    }
  },
  methods: {
    toggleModal () {
      this.openModal = !this.openModal
    },
    update (type, event) {
      if (!event) {
        event = type
      }
      db.collection('Info').doc('video').update({
        [type]: event
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .my-video {
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    figure {
      padding: 50px;
      margin: 0;
      height: 500px;
      width: 70%;
      background-position: center;
      background-size: cover;
    }
    &__details {
      p {
        font-weight: bold;
        margin-bottom: 0;
      }
    }
    &__container {
      cursor: pointer;
      color: white;
      font-size: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #ffffff;
      background: rgba(black, 0.5);
      height: 100%;
      i {
        margin: 0 20px;
      }
    }
  }
</style>
