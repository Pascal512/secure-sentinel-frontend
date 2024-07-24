import { createRouter, createWebHistory } from 'vue-router';
import OnboardingBegin from '../views/Onboarding0.vue';
import OnboardingFirst from '../views/Onboarding1.vue';
import OnboardingSecond from '../views/Onboarding2.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: OnboardingBegin
  },
  {
    path: '/Onboarding1',
    name: 'Onboarding1',
    component: OnboardingFirst
  },
  {
    path: '/Onboarding2',
    name: 'Onboarding2',
    component: OnboardingSecond
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
