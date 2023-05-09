import { RouteRecordRaw } from 'vue-router';

export function hasOneChild(route: RouteRecordRaw | undefined): boolean {
   if (!route?.children || route.children.length == 1) return true;
   return false;
}
