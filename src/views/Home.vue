<template>
  <section class="home">
    <Slider pictures :slides="slides" background="red"/>
    <AboutMe/>
    <MyVideo background="https://picsum.photos/1024/480/?image=55" videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" description="Video"/>
    <Slider :slides="slides" background="skyblue"/>
    <ContactMe/>
  </section>
</template>

<script>

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
          cap: 'Caption 1',
          txt: 'Description 1',
          src: 'https://picsum.photos/1024/480/?image=55'
        },
        {
          cap: 'Caption 2',
          txt: 'Description 2',
          src: 'https://picsum.photos/1024/480/?image=54'
        },
        {
          cap: 'Caption 3',
          txt: 'Description 3',
          src: 'https://picsum.photos/1024/480/?image=56'
        },
        {
          cap: 'Caption 4',
          txt: 'Description 4',
          src: 'https://picsum.photos/1024/480/?image=52'
        }
      ]
    }
  }
}
</script>
