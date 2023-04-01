import { defineStore } from "pinia";
import UsersService from "../services/UsersService";
import { AxiosResponse } from "axios";

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
    async fetchUsers(): Promise<void> {
      const result = await UsersService.fetchAll();
      this.users = await result.data;
    },
    async addUser(user: User): Promise<AxiosResponse> {
      return UsersService.addUser(user);
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
