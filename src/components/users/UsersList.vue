<template>
  <main class="d-flex">
    <user-card
      v-for="user in store.users"
      :key="user.id"
      :name="user.name"
      :id="user.id"
      :email="user.email"
    ></user-card>
  </main>
</template>

<script setup lang="ts">
import { usersStore } from "@/store/app";
import UserCard from "./UserCard.vue";

const store = usersStore();
</script>
