<template>
  <section class="gallery">
    <div class="row d-flex justify-content-center">
      <h1> Gallery </h1>
    </div>
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" v-for="cat in categories" :key="cat">
        <a  @click="filterData(cat)"
            :class="['nav-link', {'active': cat === filter}]"
            role="tab"
            :aria-controls="cat"
            :aria-selected="cat === filter">
            {{cat}}
        </a>
      </li>
    </ul>
    <div class="row">
      <Thumbnail
        v-for="Thumbnail in filterGalleries"
        :key="Thumbnail.title"
        :src="Thumbnail.thumbnailSrc"
        :title="Thumbnail.title"
        :subtitle="Thumbnail.subtitle"/>
    </div>
  </section>
</template>

<script>
import Thumbnail from '../components/Gallery/Thumbnail.vue'
import { db } from '../main'

export default {
  name: 'gallery',
  components: {
    Thumbnail
  },
  data () {
    return {
      galleries: [],
      categories: ['Todos', 'Photoshoots', 'Eventos Sociales', 'Eventos Corporativos'],
      filter: 'Todos'
    }
  },
  computed: {
    filterGalleries () {
      return this.filter === 'Todos' ? this.galleries : this.galleries.filter(data => data.category === this.filter)
    }
  },
  firestore () {
    return {
      galleries: db.collection('galerias')
    }
  },
  methods: {
    filterData (category) {
      this.filter = category
    }
  }
}
</script>

<style>
  .gallery {
    margin: 80px 20px;
  }
</style>
