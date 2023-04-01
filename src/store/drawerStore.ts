import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawerState", {
  state: () => ({
    drawer: false,
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
