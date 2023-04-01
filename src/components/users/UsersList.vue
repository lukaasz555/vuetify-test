<template>
  <section class="d-flex flex-column flex-sm-row flex-wrap justify-sm-center">
    <user-card
      v-for="user in store.users"
      :key="user.id"
      :name="user.name"
      :id="user.id"
      :email="user.email"
    ></user-card>
  </section>
  <v-pagination
    v-model="currentPage"
    :length="totalPages"
    color="blue"
    @next="handlePageChange"
  ></v-pagination>
</template>

<script setup lang="ts">
import { usersStore } from "@/store/app";
import { ref } from "vue";
import UserCard from "./UserCard.vue";
import { onMounted } from "vue";

const store = usersStore();
let itemsPerPage = ref<number>(2);
let currentPage = ref<number>(1);
let totalPages = ref<number>(2);

onMounted(() => {
  store.fetchUsers();
});

const handlePageChange = (val: number) => {
  console.log(val);
  currentPage.value = val;
};
</script>

<style scoped></style>
