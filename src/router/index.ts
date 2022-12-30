import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/Products.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ProductsView,
        }
    ],
});

export default router;
