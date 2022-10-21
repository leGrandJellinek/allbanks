import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import BanksView from "@/views/BanksView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/banks",
    name: "banks",
    component: BanksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
