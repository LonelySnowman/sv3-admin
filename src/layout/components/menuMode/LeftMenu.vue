<template>
   <el-menu router>
      <SiderBarItem
         v-for="route in routes"
         :key="route.path"
         :route="route"
         :base-path="route.path"
      >
      </SiderBarItem>
   </el-menu>
</template>

<script setup lang="ts">
import SiderBarItem from '@/layout/components/SiderBarItem.vue';
import { menuRoutes } from '@/router';
const routes = [...menuRoutes].sort((a, b) => {
   return a.meta.rank - b.meta.rank;
});
</script>

<style scoped></style>
