import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '@/store/modules/user';
import { ElMessage } from 'element-plus';
import Remaining from '@/router/modules/remaining';

// 获取菜单路由
const modules: Record<string, any> = import.meta.glob(
   ['./modules/**/*.ts', '!./modules/**/remaining.ts'],
   {
      eager: true,
   }
);
const menuRoutes: Array<RouteRecordRaw> = [];

// 自动导入全部路由
Object.keys(modules).forEach((key) => {
   menuRoutes.push(modules[key].default);
});

const routes: Array<RouteRecordRaw> = [...menuRoutes, ...Remaining];

//导入生成的路由数据
const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

console.log(router.getRoutes());

const noStatusPage = ['/login'];
router.beforeEach(async (_to, _from, next) => {
   NProgress.start();
   const userStore = useUserStore();
   await userStore.refreshUserInfo();
   const userIsLogin = userStore.isLogin();
   if (userIsLogin || noStatusPage.includes(_to.path)) next();
   else {
      ElMessage('权限不足');
      next('/login');
   }
});

router.afterEach((_to) => {
   NProgress.done();
});

export { menuRoutes };
export default router;
