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
import MotDePasseOublie from '@/views/MotDePasseOublie.vue';
import VerificationEmail from '@/views/VerificationEmail.vue';
import NouveauMotDePasse from '@/views/NouveauMotDePasse.vue';
import PageAccueil from '@/views/Accueil.vue';
import PageCamerasVides from '@/views/Camera.vue';
import PageCameras from '@/views/Cameras.vue';
import CameraDetails from '@/views/CameraDetails.vue';
import PageAlarmes from '@/views/Notifications.vue';
import PageUpload from '@/views/PageUpload.vue';
import PageSettings from '@/views/PageSettings.vue';

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
  },
  {
    path: '/MotDePasseOublie',
    name: 'Mot de passe oublié',
    component: MotDePasseOublie
  },
  {
    path: '/VerificationEmail',
    name: 'Vérification Email',
    component: VerificationEmail
  },
  {
    path: '/NouveauMotDePasse',
    name: 'Créer un nouveau mot de passe',
    component: NouveauMotDePasse
  },
  {
    path: '/PageAccueil',
    name: 'Page d\'accueil',
    component: PageAccueil
  },
  {
    path: '/PageCamerasVides',
    name: 'Caméras absentes',
    component: PageCamerasVides
  },
  {
    path: '/PageCameras',
    name: 'Caméras',
    component: PageCameras
  },
  {
    path: '/CameraDetails',
    name: 'Détails de Caméra',
    component: CameraDetails
  },
  {
    path: '/PageAlarmes',
    name: 'Alarmes',
    component: PageAlarmes
  },
  {
    path: '/PageUpload',
    name: 'Photos connues',
    component: PageUpload
  },
  {
    path: '/PageSettings',
    name: 'Paramètres',
    component: PageSettings
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
