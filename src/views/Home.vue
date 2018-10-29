<template>
  <section class="home">
    <Slider pictures :slides="photos_main" :background="slider.color"/>
    <details v-if="isAdmin">
      <div class="slider-top__edit" v-for="(slide, index) in photos_main" :key="index">
        <p class="edit__title">Slide {{index}}</p>
        <div class="edit__container">
          <p class="edit__label">Link de la imagen</p>
          <Editable :editable="true" :content="slide.src" @update='update("topSlider", slide.id, "src" ,$event)'/>
        </div>
        <div class="edit__container">
          <p class="edit__label">Contenido Alternativo</p>
          <Editable :editable="true" :content="slide.contentDescription" @update='update("topSlider", slide.id, "contentDescription" ,$event)'/>
        </div>
      </div>
    </details>
    <AboutMe/>
    <MyVideo/>
    <Slider :slides="quote_slider" :background="slider.color"/>
    <details v-if="isAdmin">
      <p class="edit__label">Color de Fondo</p>
      <div class="edit__container">
        <Editable :editable="true" :content="slider.color" @update='update("Info", "slider" , "color" ,$event)'/>
      </div>
      <div class="slider-top__edit" v-for="(slide, index) in quote_slider" :key="index">
        <p class="edit__title">Slide {{index}}</p>
        <div class="edit__container">
          <p class="edit__label">Titulo</p>
          <Editable :editable="true" :content="slide.caption" @update='update("bottomSlider", slide.id, "caption" ,$event)'/>
        </div>
        <div class="edit__container">
          <p class="edit__label">Descripción</p>
          <Editable :editable="true" :content="slide.description" @update='update("bottomSlider", slide.id, "description" ,$event)'/>
        </div>
      </div>
    </details>
    <ContactMe/>
    <a class="back-button" href="#"><i class="fas fa-arrow-circle-up"></i></a>
  </section>
</template>

<script>
import { db, store } from '@/main'

// @ is an alias to /src
// Import whatever component you are gone to use
import Slider from '@/components/Shared/Slider.vue'
import AboutMe from '@/components/Home/AboutMe.vue'
import MyVideo from '@/components/Home/MyVideo.vue'
import ContactMe from '@/components/Home/ContactMe.vue'
import Editable from '@/components/Shared/Editable.vue'

export default {
  name: 'home',
  components: {
    Slider,
    MyVideo,
    AboutMe,
    ContactMe,
    Editable
  },
  data () {
    return {
      photos_main: [],
      quote_slider: [],
      slider: Object,
      isAdmin: store.state.isAdmin
    }
  },
  firestore () {
    return {
      photos_main: db.collection('topSlider'),
      quote_slider: db.collection('bottomSlider'),
      slider: db.collection('Info').doc('slider')
    }
  },
  methods: {
    update (collection, id, type, event) {
      db.collection(collection).doc(id).update({
        [type]: event
      })
    }
  }
}
</script>

<style lang="scss">
  details {
    padding: 20px;
  }
  .back-button {
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 2;
    font-size: 30px;
  }
  .edit__label, .edit__title {
    margin-bottom: 0;
    font-weight: 600;
  }
  .slider-top__edit {
    margin-bottom: 10px;
  }

  .edit__container {
    padding-left: 20px;
  }
</style>
