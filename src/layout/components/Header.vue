<template>
   <div class="header">
      <div class="header-left">
         <i-ep-fold class="icon-fold"></i-ep-fold>
         <BreadCrumb></BreadCrumb>
      </div>
      <FunctionMenu class="header-right"></FunctionMenu>
   </div>
</template>

<script setup lang="ts">
import BreadCrumb from '@/layout/components/breadCrumb.vue';
import FunctionMenu from '@/layout/components/FunctionMenu.vue';
</script>

<style scoped lang="scss">
.header {
   display: flex;
   align-items: center;
   height: var(--header-height);
   box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

   .header-left {
      display: flex;
      align-items: center;
      width: max-content;

      .icon-fold {
         margin: 0 5px;
      }
   }

   .header-right {
      flex-grow: 1;
   }
}
</style>
