<template>
  <section class="my-video">
    <Modal v-if="openModal" @close="openModal = false">
      <iframe width="1280" height="720" :src="videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </Modal>
    <figure :style="`background-image: url('${background}');`">
      <div class="my-video__container" @click="toggleModal()">
        <i class="far fa-play-circle"></i> {{description}}
      </div>
    </figure>
  </section>
</template>

<script>
import Modal from '@/components/Shared/Modal.vue'

export default {
  name: 'MyVideo',
  props: {
    videoUrl: String,
    background: String,
    description: String
  },
  components: {
    Modal
  },
  data () {
    return {
      openModal: false
    }
  },
  methods: {
    toggleModal () {
      this.openModal = !this.openModal
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
    figure {
      padding: 50px;
      margin: 0;
      height: 500px;
      width: 70%;
      background-position: center;
      background-size: cover;
    }
    .my-video__container {
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
