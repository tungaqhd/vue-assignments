import { RouteRecordRaw } from 'vue-router';
import B11 from './pages/B11.vue';

export default [
    {
        path: '/b1.1',
        component: () => import('./pages/B11.vue'),
        meta: {
            public: true
        },
    },
] as RouteRecordRaw[];
