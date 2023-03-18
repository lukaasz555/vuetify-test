// Utilities
import { defineStore } from "pinia";

type User = {
  [key: string]: string;
};

interface State {
  users: User[] | [];
}

export const useAppStore = defineStore("app", {
  state: (): State => ({
    users: [],
  }),
});
