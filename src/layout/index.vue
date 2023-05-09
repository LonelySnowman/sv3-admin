<template>
   <el-container>
      <Horizontal v-if="menuMode == 'left'"></Horizontal>
   </el-container>
</template>

<script lang="ts" setup>
import { useSettingStoreHook } from '@/store/modules/setting';
import { MenuMode } from '@/store/modules/setting/types';
import Horizontal from '@/layout/layoutMode/Horizontal.vue';
import { menuRoutes } from '@/router';

// 获取设置
const settingStore = useSettingStoreHook();
// 菜单栏模式
const menuMode: MenuMode = settingStore.menuMode;
// 路由列表
console.log(menuRoutes);
</script>
