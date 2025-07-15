import { createRouter, createWebHistory } from 'vue-router';
import Laptops from '../views/Laptops.vue';
import Celulares from '../views/Celulares.vue';
import Accesorios from '../views/Accesorios.vue';

const routes = [
  { path: '/laptops', component: Laptops },
  { path: '/celulares', component: Celulares },
  { path: '/accesorios', component: Accesorios }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
