/* eslint-disable consistent-return */
import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';
import AdviceSlips from '@/views/AdviceSlips.vue';
import FetchError from '@/views/FetchError.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'AdviceSlips',
    component: AdviceSlips,
  },
  {
    path: '/error',
    name: 'FetchError',
    component: FetchError,
    beforeEnter: () => {
      if (store.getters.getFetchFailed === false) return { name: 'AdviceSlips' };
    },
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
