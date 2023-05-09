import { defineStore } from 'pinia';
import pinia from '@/store';
import { MenuMode, SettingState } from './types';

export const useSettingStoreHook = defineStore('Setting', {
   state: (): SettingState => ({
      theme: true,
      menuMode: 'left',
   }),
   getters: {},
   actions: {
      updateInfo(partial: Partial<SettingState>) {
         this.$patch(partial);
      },
      // 改变主题
      changeTheme(themeData, val) {
         themeData.value = val;
         this.theme = val;
         document.documentElement.setAttribute(
            'data-theme',
            val ? 'light' : 'dark'
         );
      },
      // 改变菜单栏位置
      changeMenuMode(mode: MenuMode) {
         this.menuMode = mode;
      },
   },
   persist: {
      key: 'setting',
      storage: localStorage,
      paths: ['theme'],
   },
});

export function useSettingStore() {
   return useSettingStoreHook(pinia);
}
