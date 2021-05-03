import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
import Contact from "../components/contact/container";
import Actualites from "../components/actualités/container"
=======
import Home from '../components/home/container'
import Contact from "../components/contact/container";
import Actualites from "../components/actualités/container"
import Login from "../components/login/container"
import Apropos from "../components/apropos/container"
>>>>>>> cc7a62467f39aa602b0a97c12b642c481b0b6ac9

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/actu',
    name: 'Actualites',
    component: Actualites
  },
<<<<<<< HEAD
=======
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos
  },
>>>>>>> cc7a62467f39aa602b0a97c12b642c481b0b6ac9
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
