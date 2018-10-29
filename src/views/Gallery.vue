<template>
  <section class="gallery__info">
    <Modal v-if="openModal" @close="openModal = false">
         <b-carousel
                indicators
                controls
                :interval="1000000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                img-width="1024"
                img-height="300">
            <!-- Add pictures attribute to change from slider of quotes or with pictures -->
            <b-carousel-slide
              v-for="(picture, index) in gallery.pictures"
              :key="`slide-${index}`"
              :img-src="picture"/>
          </b-carousel>
      </Modal>
    <div class="row gallery__info__title">
      <h1>{{gallery.title}}</h1>
      <h2>{{gallery.subtitle}}</h2>
    </div>
    <div class="gallery__info__pictures">
        <img v-for="(pic, index) in gallery.pictures" :key="pic" :src="pic" @click="toggleModal(index)">
    </div>
  </section>
</template>

<script>
import { db } from '@/main'
import Modal from '@/components/Shared/Modal.vue'
import Slider from '@/components/Shared/Slider.vue'

export default {
  name: 'Gallery',
  components: {
    Modal,
    Slider,
    slide: 0,
    sliding: null
  },
  data () {
    return {
      galleries: [],
      openModal: false
    }
  },
  computed: {
    gallery () {
      return this.galleries.filter(data => data.title === this.$route.params.title)[0]
    }
  },
  firestore () {
    return {
      galleries: db.collection('galerias')
    }
  },
  methods: {
    toggleModal (index) {
      this.openModal = !this.openModal
      this.slide = index
    }
  }
}
</script>

<style lang="scss" scoped>
  .gallery__info {
    margin: 80px 20px;
    &__title {
      margin: 100px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    &__pictures {
      img {
        cursor: pointer;
        @media only screen and (max-width: 600px) {
          width: 100%;
        }
        @media only screen
          and (min-width: 600px)
          and (max-width: 1024px) {
          width: 50%;
        }
        width: 25%;
        padding: 2px;
        heigth: auto;
      }
    }
    .carousel-item {
      img {
        max-height: 80vh;
      }
    }
  }
</style>
