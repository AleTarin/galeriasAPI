<template>
  <section class="home">
    <Slider pictures :slides="photos_main" background="skyblue"/>
    <AboutMe/>
    <MyVideo background="https://picsum.photos/1024/480/?image=55" videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" description="Video"/>
    <Slider :slides="slides" background="skyblue"/>
    <ContactMe/>
    <a class="back-button" href="#"><i class="fas fa-arrow-circle-up"></i></a>
  </section>
</template>

<script>
import { db } from '../main'

// @ is an alias to /src
// Import whatever component you are gone to use
import Slider from '@/components/Shared/Slider.vue'
import AboutMe from '@/components/Home/AboutMe.vue'
import MyVideo from '@/components/Home/MyVideo.vue'
import ContactMe from '@/components/Home/ContactMe.vue'

export default {
  name: 'home',
  components: {
    Slider,
    MyVideo,
    AboutMe,
    ContactMe
  },
  data () {
    return {
      slides:
      [
        {
          caption: 'Caption 1',
          description: 'Description 1',
          src: 'https://picsum.photos/1024/480/?image=55'
        },
        {
          caption: 'Caption 2',
          description: 'Description 2',
          src: 'https://picsum.photos/1024/480/?image=54'
        },
        {
          caption: 'Caption 3',
          description: 'Description 3',
          src: 'https://picsum.photos/1024/480/?image=56'
        },
        {
          caption: 'Caption 4',
          description: 'Description 4',
          src: 'https://picsum.photos/1024/480/?image=52'
        }
      ],
      photos_main: []
    }
  },
  firestore () {
    return {
      photos_main: db.collection('topSlider')
    }
  }
}
</script>

<style>
  .back-button {
    position: fixed;
    right: 10px;
    bottom: 10px;
    font-size: 50px;
  }
</style>
