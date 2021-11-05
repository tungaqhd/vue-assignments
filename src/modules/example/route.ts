import { RouteRecordRaw } from 'vue-router';
import ExamplePage from './pages/ExamplePage.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default [
    {
        path: '/test',
        component: MainLayout,
        meta: {
            public: true,
        },
        children: [
            {
                path: '1',
                name: '1',
                component: ExamplePage,
                meta: {
                    // onlyWhenLoggedOut: true,
                    public: true,
                },
            },
        ],
    },
] as RouteRecordRaw[];
