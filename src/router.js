import { createRouter, createWebHistory } from 'vue-router';
import Information from './components/Information.vue';
import MainApp from './components/MainApp.vue';
import About from './components/About.vue'

const routes = [
  { path: '/', component: MainApp },
  { path: '/about', component: Information },
  { path: '/information', component: About}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;