import Vue from 'vue'
import VueRouter from 'vue-router'
import QRGeneratorView from '../views/QRGeneratorView.vue'
import HistoryView from '../views/HistoryView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'generator',
    component: QRGeneratorView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
