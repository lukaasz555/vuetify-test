<template>
  <the-layout>
    <v-btn @click="toggleView" class="mb-8"> {{ buttonMessage }} </v-btn>
    <Transition name="slide-up">
      <component :is="handleCurrentView"></component>
    </Transition>
  </the-layout>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted } from "vue";
import TheLayout from "@/layouts/TheLayout.vue";
import { useSearchStore } from "@/store/searchStore";
import { useUsersStore } from "@/store/usersStore";
import AddUser from "@/components/users/AddUser.vue";
import UsersList from "@/components/users/UsersList.vue";

const usersStore = useUsersStore();
const searchStore = useSearchStore();

onMounted(() => {
  usersStore.fetchUsers(searchStore.$state);
});

const state = reactive({
  currentView: "list",
});

const toggleView = () => {
  state.currentView === "list"
    ? (state.currentView = "adduser")
    : (state.currentView = "list");
};

const handleCurrentView = computed(() => {
  if (state.currentView === "list") return UsersList;
  else return AddUser;
});

const buttonMessage = computed(() =>
  state.currentView !== "list" ? "show list" : "add user"
);
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.05s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
