// Utilities
import { defineStore } from "pinia";

type User = {
  [key: string]: string;
};

interface State {
  users: User[] | [];
}

export const usersStore = defineStore("app", {
  state: (): State => ({
    users: [],
  }),
});

export const drawerStore = defineStore("drawerState", {
  state: () => ({
    drawer: false,
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
