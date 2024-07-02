import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheDetails from '../views/TheDetails.vue'
import TheCreate from '../views/TheCreate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: TheDetails ,
    props : true
  },
  {
    path: '/create',
    name: 'create',
    component: TheCreate ,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
