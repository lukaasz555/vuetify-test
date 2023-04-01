import { defineStore } from "pinia";
import UsersService from "@/services/UsersService";
import { Params } from "@/services/UsersService";
import { AxiosResponse } from "axios";
import { useSearchStore } from "./searchStore";

type User = {
  [key: string]: string;
};

interface UsersState {
  users: User[];
}

const baseUsersState = (): UsersState => ({
  users: [],
});

const searchStore = useSearchStore();

export const useUsersStore = defineStore("usersStore", {
  state: baseUsersState,
  actions: {
    async fetchUsers(params: Params): Promise<void> {
      UsersService.fetchAll(params)
        .then((res) => {
          this.users = res.data;
          searchStore.$state.totalRecords = parseInt(
            res.headers["x-total-count"]
          );
        })
        .catch((e: Error) => console.log(e));
    },
    async addUser(user: User): Promise<AxiosResponse> {
      return UsersService.addUser(user);
    },
  },
});
