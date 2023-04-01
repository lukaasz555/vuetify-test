<template>
  <section class="d-flex flex-column flex-sm-row flex-wrap justify-sm-center">
    <user-card
      v-for="user in usersStore.users"
      :key="user.id"
      :name="user.name"
      :id="user.id"
      :email="user.email"
    ></user-card>
  </section>
  <div>
    <v-select
      v-model="searchStore.$state.itemsPerPage"
      :items="pageSizes"
      @update:model-value="handleItemsPerPageChange"
    >
    </v-select>
    <v-pagination
      v-model="searchStore.$state.currentPage"
      :length="totalPages"
      color="blue"
      @update:model-value="handlePageChange"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/store/searchStore";
import { useUsersStore } from "@/store/usersStore";
import UserCard from "./UserCard.vue";
import { onMounted, computed } from "vue";

const usersStore = useUsersStore();
const searchStore = useSearchStore();

const pageSizes = [4, 8, 12];

onMounted(() => {
  // console.log(searchStore.$state);
  usersStore.fetchUsers(searchStore.$state);
});

const totalPages = computed(() => {
  const res = Math.ceil(searchStore.totalRecords / searchStore.itemsPerPage);
  console.log(res);
  return res;
});

function handlePageChange(v: number): void {
  searchStore.$state.currentPage = v;
}

function handleItemsPerPageChange(v: number): void {
  searchStore.setItemsPerPage(v);
  usersStore.fetchUsers(searchStore.$state);
}
</script>

<style scoped></style>
