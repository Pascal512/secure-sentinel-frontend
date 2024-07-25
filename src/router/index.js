import { createRouter, createWebHistory } from 'vue-router';
import OnboardingBegin from '../views/Onboarding0.vue';
import OnboardingFirst from '../views/Onboarding1.vue';
import OnboardingSecond from '../views/Onboarding2.vue';
import OnboardingThird from '../views/Onboarding3.vue';
import OnboardingFourth from '../views/Onboarding4.vue';
import OnboardingFin from '@/views/OnboardingFin.vue';
import ConnexionPage from '@/views/ConnexionPage.vue';
import InscriptionPage1 from '@/views/InscriptionPage1.vue';
import InscriptionPage2 from '@/views/InscriptionPage2.vue';

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
  },
  {
    path: '/Onboarding3',
    name: 'Onboarding3',
    component: OnboardingThird
  },
  {
    path: '/Onboarding4',
    name: 'Onboarding4',
    component: OnboardingFourth
  },
  {
    path: '/OnboardingFin',
    name: 'OnboardingFin',
    component: OnboardingFin
  },
  {
    path: '/ConnexionPage',
    name: 'ConnexionPage',
    component: ConnexionPage
  },
  {
    path: '/InscriptionPage1',
    name: 'Inscription étape 1',
    component: InscriptionPage1
  },
  {
    path: '/InscriptionPage2',
    name: 'Inscription étape 2',
    component: InscriptionPage2
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
