import { defineStore } from "pinia";
import { Params } from "@/services/UsersService";

const baseState: () => Params = () => ({
  itemsPerPage: 4,
  currentPage: 1,
  totalRecords: 0,
});

export const useSearchStore = defineStore("searchStore", {
  state: baseState,
  actions: {
    setItemsPerPage(v: number) {
      this.itemsPerPage = v;
    },
    setCurrentPage(v: number) {
      this.currentPage = v;
    },
  },
});
