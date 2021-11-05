import { RouteRecordRaw } from 'vue-router';
import Cart from './pages/Cart.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default [
    {
        path: '/cart',
        component: MainLayout,
        meta: {
            public: true,
        },
        children: [
            {
                path: '',
                name: 'week4',
                component: Cart,
                meta: {
                    public: true,
                },
                props: true,
            },
        ],
    },
] as RouteRecordRaw[];
