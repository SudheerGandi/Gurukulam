import { createRouter, createWebHistory } from '@ionic/vue-router';
import ProfilePage from '../pages/profile-page.vue'
const routes = [
  {
    path: '/',
    redirect: '/profilepage'
  },
  {
    path: '/profilepage',
    component: ProfilePage
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
