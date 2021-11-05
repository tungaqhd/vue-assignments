import { RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue';

export default [
    {
        path: '/',
        component: Home,
        meta: {
            public: true
        }
    },
] as RouteRecordRaw[];
