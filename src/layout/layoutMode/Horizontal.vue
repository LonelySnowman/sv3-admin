<template>
   <el-aside>
      <div>
         <Logo></Logo>
         <el-scrollbar height="calc(100vh - 56px)">
            <LeftMenu></LeftMenu>
         </el-scrollbar>
      </div>
   </el-aside>
   <el-container>
      <el-header>
         <Header></Header>
      </el-header>
      <el-main>
         <router-view></router-view>
      </el-main>
   </el-container>
</template>

<script setup lang="ts">
import Logo from '@/layout/components/Logo.vue';
import LeftMenu from '@/layout/components/menuMode/LeftMenu.vue';
import Header from '@/layout/components/Header.vue';
</script>

<style scoped></style>
