import { RouteRecordRaw } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default [
    {
        path: '/shop',
        component: MainLayout,
        meta: {
            public: true,
        },
        children: [
            {
                path: '',
                name: 'week2',
                component: HomePage,
                meta: {
                    // onlyWhenLoggedOut: true,
                    public: true,
                },
            },
        ],
    },
] as RouteRecordRaw[];
