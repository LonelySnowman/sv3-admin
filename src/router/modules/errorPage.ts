import { RouteRecordRaw } from 'vue-router';

export default {
   path: '/error',
   redirect: '/404',
   name: 'Error',
   component: () => import('@/layout/index.vue'),
   meta: {
      icon: 'user',
      role: ['common', 'admin'],
      rank: 2,
      title: '错误页面',
   },
   children: [
      {
         path: '404',
         name: '404',
         component: () => import('@/views/errorPage/404.vue'),
         meta: {
            title: '404',
            role: ['common', 'admin'],
         },
      },
      {
         path: '403',
         name: '403',
         component: () => import('@/views/errorPage/403.vue'),
         meta: {
            title: '403',
            role: ['common', 'admin'],
         },
      },
   ],
} as RouteRecordRaw;
