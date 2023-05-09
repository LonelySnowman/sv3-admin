<template>
   <div class="function-menu--box">
      <div class="flex-center bg-hover-color">
         <i-ep-setting></i-ep-setting>
      </div>
   </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.function-menu--box {
   display: flex;
   justify-content: right;
   align-items: center;
   height: 100%;

   > * {
      padding: 0 10px;
      width: min-content;
      height: 100%;
      flex-wrap: wrap;
   }
}
</style>
