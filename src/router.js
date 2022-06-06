import HomeItem from './components/HomeItem.vue'
import LoginItem from './components/Login.vue'
import ViewTicket from './components/viewTickets.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    name: "Home",
    component: HomeItem
  },
  { 
    path: '/login', 
    name: "Login", 
    component: LoginItem 
  },
  { 
    path: '/tickets', 
    name: "Tickets", 
    component: ViewTicket
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 