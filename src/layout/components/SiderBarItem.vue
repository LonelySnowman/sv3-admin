<template>
   <el-menu-item
      v-if="
         hasOneShowingChild(props.route.children, props.route) &&
         (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
      :index="resolvePath(route.path)"
   >
      <span>{{ route.meta.title }}</span>
   </el-menu-item>
   <el-sub-menu v-else :index="resolvePath(route.path)">
      <template #title>
         <span>{{ route.meta.title }}</span>
      </template>
      <SiderBarItem
         v-for="(child, index) in route.children ? route.children : []"
         :key="index"
         :route="child"
         :base-path="route.path"
      ></SiderBarItem>
   </el-sub-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { isExternal } from '@/utils/regex';
import { ref } from 'vue';
import path from 'path-browserify';

const props = defineProps({
   route: {
      type: Object as PropType<RouteRecordRaw>,
   },
   basePath: {
      type: String,
   },
});

const onlyOneChild = ref(null);

function resolvePath(routePath) {
   if (isExternal(routePath)) {
      return routePath;
   }
   if (isExternal(props.basePath)) {
      return props.basePath;
   }
   return path.resolve(props.basePath, routePath);
}

function hasOneShowingChild(children = [], parent) {
   // 剔除需要隐藏的路由
   const showingChildren = children.filter((item: any) => {
      if (item.item) {
         return false;
      } else {
         onlyOneChild.value = item;
         return true;
      }
   });
   if (showingChildren.length === 1) {
      return true;
   }
   if (showingChildren.length === 0) {
      onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
      return true;
   }
   return false;
}
</script>

<style scoped></style>
