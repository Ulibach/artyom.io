import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router';
import ContactViewVue from '../views/ContactView.vue';
const routes = [
    {
        path: '/', 
        component: HomeView,
        meta: { transition: 'fade' }
    },
    {
        path: '/contact',
        component: ContactViewVue,
        meta: { transition: 'fade' }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;