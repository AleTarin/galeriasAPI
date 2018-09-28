<template>
  <div class="home">
    <PictureSlider/>
    <AboutMe/>
    <MyVideo/>
    <QuoteSlider/>
    <ContactMe/>
  </div>
</template>

<script>

// @ is an alias to /src
// Import whatever component you are gone to use
import PictureSlider from '@/components/Home/PictureSlider.vue'
import QuoteSlider from '@/components/Home/QuoteSlider.vue'
import AboutMe from '@/components/Home/AboutMe.vue'
import MyVideo from '@/components/Home/MyVideo.vue'
import ContactMe from '@/components/Home/ContactMe.vue'

export default {
  name: 'home',
  components: {
    PictureSlider,
    QuoteSlider,
    MyVideo,
    AboutMe,
    ContactMe
  }
}
</script>
