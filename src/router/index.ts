// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import GetStartedPage from '../components/GetStartedPage.vue';
import OccasionPage from '../components/OccasionPage.vue';
import FlavourPage from '../components/FlavourPage.vue';
import DrinkBasePage from '../components/DrinkBasePage.vue';
import MixersPage from '../components/MixersPage.vue';
import SyrupsPage from '../components/SyrupsPage.vue';
import FinalPage from '../components/FinalPage.vue';
import CollectionsPage from '../components/CollectionsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/get-started',
    name: 'GetStartedPage',
    component: GetStartedPage,
  },
  {
    path: '/occasion',
    name: 'OccasionPage',
    component: OccasionPage,
  },
  {
    path: '/flavour',
    name: 'FlavourPage',
    component: FlavourPage,
  },
  {
    path: '/drink-base',
    name: 'DrinkBasePage',
    component: DrinkBasePage,
  },
  {
    path: '/mixers',
    name: 'MixersPage',
    component: MixersPage,
  },
  {
    path: '/syrups',
    name: 'SyrupsPage',
    component: SyrupsPage,
  },
  {
    path: '/final',
    name: 'FinalPage',
    component: FinalPage,
  },
  {
    path: '/collections',
    name: 'CollectionsPage',
    component: CollectionsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
