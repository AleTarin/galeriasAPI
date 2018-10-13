<template>
  <section class="gallery-thumbnail col-12 col-sm-6 col-xl-4">
    <router-link tag="li" class="card" :to="`/galleries/${title}`">
      <img class="card-img-top" :src="src" :alt="title">
      <div class="card-body">
        <h2 class="card-text">{{title}}</h2>
        <h3 class="card-text">{{subtitle}}</h3>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'Thumbnail',
  props: {
    title: String,
    subtitle: String,
    src: String
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gallery-thumbnail {
    .card {
      margin: 8%;
    }
    .card:hover {
      -webkit-box-shadow: 0px 10px 32px 0px rgba(0,0,0,0.8);
      -moz-box-shadow: 0px 10px 32px 0px rgba(0,0,0,0.8);
      box-shadow: 0px 10px 32px 0px rgba(0,0,0,0.8);
      cursor: pointer;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
