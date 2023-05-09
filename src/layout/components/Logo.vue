<template>
   <div class="logo">
      <img src="@/assets/imgs/root/logo.png" class="image" />
      <span class="title">Sv3Template</span>
   </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
   display: flex;
   align-items: center;
   width: var(--el-aside-width);
   height: var(--header-height);
   background-color: #002140;

   .image {
      object-fit: contain;
      width: 50px;
   }

   .title {
      color: white;
      font-weight: 900;
   }
}
</style>
