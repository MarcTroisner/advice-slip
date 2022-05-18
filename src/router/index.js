import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';
import RandomSlip from '@/views/RandomSlip.vue';
import SearchTermSlip from '@/views/SearchTermSlip.vue';
import FetchError from '@/views/FetchError.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'RandomSlip',
    component: RandomSlip,
  },
  {
    path: '/search',
    name: 'SearchTermSlip',
    component: SearchTermSlip,
  },
  {
    path: '/error',
    name: 'FetchError',
    component: FetchError,
    beforeEnter: () => store.getters.fetchFailed,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
