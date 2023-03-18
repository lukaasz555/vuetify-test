// Utilities
import { defineStore } from "pinia";
import axios from "axios";

type User = {
  [key: string]: string;
};

interface UsersState {
  users: User[];
}

export const usersStore = defineStore("app", {
  state: (): UsersState => ({
    users: [],
  }),
  actions: {
    fetchUsers() {
      axios
        .get("http://localhost:3001/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => console.log(err));
    },
    addUser(newUser: User) {
      this.users.unshift(newUser);
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
