import { RouteRecordRaw } from 'vue-router';

export default {
   path: '/',
   name: 'Home',
   component: () => import('@/layout/index.vue'),
   meta: {
      title: '首页',
      role: ['common', 'admin'],
      rank: 1,
   },
   children: [
      {
         path: '',
         name: 'HomePage',
         component: () => import('@/views/home/index.vue'),
         meta: {
            title: '首页',
            role: ['common', 'admin'],
         },
      },
   ],
} as RouteRecordRaw;
