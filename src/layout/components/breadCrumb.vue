<template>
   <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
         <a @click.prevent="handleLink(item)">
            {{ item.meta.title }}
         </a>
      </el-breadcrumb-item>
   </el-breadcrumb>
</template>

<script setup lang="ts">
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
let route = useRoute();
const levelList = ref<RouteLocationMatched[]>([]);
function getBreadcrumb() {
   levelList.value = router.currentRoute.value.matched;
}

watch(
   () => route.path,
   () => {
      getBreadcrumb();
   }
);
const handleLink = (item: RouteLocationMatched): void => {
   const { redirect, path } = item;
   if (redirect) {
      router.push(redirect as any);
   } else {
      router.push(path);
   }
};
</script>

<style scoped></style>
