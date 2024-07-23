import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import AboutMe from '@/pages/AboutMe.vue';
import Projects from '@/pages/Projects.vue';
import Contacts from '@/pages/Contact.vue';
import Cv from '@/pages/Cv.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutMe,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/cv',
      name: 'cv',
      component: Cv,
    },
  ],
});

export default router;
