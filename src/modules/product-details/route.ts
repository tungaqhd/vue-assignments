import { RouteRecordRaw } from 'vue-router';
import Product from './pages/Product.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default [
    {
        path: '/product',
        component: MainLayout,
        meta: {
            public: true,
        },
        children: [
            {
                path: ':productId',
                name: 'week3',
                component: Product,
                meta: {
                    public: true,
                },
                props: true,
            },
        ],
    },
] as RouteRecordRaw[];
