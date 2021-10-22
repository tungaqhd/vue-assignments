import { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/b1.2',
        component: () => import('./pages/B12.vue'),
        meta: {
            public: true
        },
    },
] as RouteRecordRaw[];
