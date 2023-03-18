<template>
  <the-layout>
    <v-btn @click="toggleView"> {{ buttonMessage }} </v-btn>
    <component :is="handleCurrentView"></component>
  </the-layout>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import TheLayout from "@/layouts/TheLayout.vue";
import AddUser from "@/components/users/AddUser.vue";
import UsersList from "@/components/users/UsersList.vue";

const state = reactive({
  currentView: "list",
});

const toggleView = () => {
  state.currentView === "list"
    ? (state.currentView = "adduser")
    : (state.currentView = "list");
  console.log(state.currentView);
};

const handleCurrentView = computed(() => {
  if (state.currentView === "list") return UsersList;
  else return AddUser;
});

const buttonMessage = computed(() =>
  state.currentView !== "list" ? "show list" : "add user"
);
</script>
