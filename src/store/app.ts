// Utilities
import { defineStore } from "pinia";
import UsersService from "../services/UsersService";

type User = {
  [key: string]: string;
};

interface UsersState {
  users: User[];
}

const baseState = (): UsersState => ({
  users: [],
});

export const usersStore = defineStore("users", {
  state: baseState,
  actions: {
    async fetchUsers() {
      const result = await UsersService.fetchAll();
      this.users = await result.data;
    },
    addUser(newUser: User) {
      //this.users.unshift(newUser);
    },
  },
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
