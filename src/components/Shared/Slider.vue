<template>
  <section class="slider">
    <div class="row">
      <div class="col-12">
         <b-carousel :id="sliderId"
                :style="sliderStyle"
                indicators
                :background="background"
                :interval="interval"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                img-width="1024"
                img-height="300">
            <!-- Add pictures attribute to change from slider of quotes or with pictures -->
            <b-carousel-slide v-if="pictures"
              v-for="(slide, index) in slides"
              :key="`slide-${index}`"
              :caption="slide.caption"
              :text="slide.description"
              :img-src="slide.src"
              :img-alt="slide.contentDescription"/>
            <b-carousel-slide v-if="!pictures"
              v-for="(slide, index) in slides"
              :key="`slide-${index}`"
              :caption="slide.caption"
              :text="slide.description"
              img-blank
              :img-alt="slide.contentDescription"/>
          </b-carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PictureSlider',
  props: {
    sliderId: String,
    sliderStyle: String,
    pictures: Boolean,
    indicators: Boolean,
    slides: Array,
    interval: Number,
    background: String
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .slider {
    text-shadow: 1px 1px 2px #333;

    .row {
      margin: 0;
    }
  }
</style>
