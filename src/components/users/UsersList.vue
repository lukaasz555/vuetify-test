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
</template>

<script setup lang="ts">
import { usersStore } from "@/store/app";
import UserCard from "./UserCard.vue";

const store = usersStore();
</script>

<style scoped></style>
