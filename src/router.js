import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from './views/Home.vue'
import Galleries from './views/Galleries.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import Gallery from './views/Gallery.vue'
import LogIn from './views/LogIn.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'login',
      component: LogIn
    },
    {
      path: '/galleries',
      name: 'galleries',
      component: Galleries
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/galleries/:title',
      name: 'gallery',
      component: Gallery
    }
  ]
})
