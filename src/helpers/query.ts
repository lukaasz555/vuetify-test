import router from "@/router";
import { useSearchStore } from "@/store/searchStore";

const searchStore = useSearchStore();

export const setURLFromQuery = () => {
  router.push({
    path: "/users",
    query: {
      _page: searchStore.$state.currentPage,
      _limit: searchStore.$state.itemsPerPage,
    },
  });
};
