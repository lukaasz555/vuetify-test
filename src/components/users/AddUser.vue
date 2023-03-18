<template>
  <v-card :width="300" class="py-8 px-4" :rounded="4">
    <v-form @submit.prevent>
      <v-text-field
        label="Name"
        v-model="state.newUser.name"
        variant="outlined"
        density="compact"
      >
      </v-text-field>
      <v-text-field
        label="E-mail"
        v-model="state.newUser.email"
        variant="outlined"
        density="compact"
      >
      </v-text-field>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn
          @click="handleAdd"
          :loading="state.isLoading"
          :disabled="state.isLoading"
          variant="outlined"
          >Add user</v-btn
        >
        <v-btn @click="handleReset" :disabled="state.isLoading"
          >clear form</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { usersStore } from "@/store/app";
import axios from "axios";

const store = usersStore();
const state = reactive({
  newUser: {
    name: "",
    email: "",
  },
  isLoading: false,
});

const handleReset = () => {
  state.newUser = {
    name: "",
    email: "",
  };
};

const handleAdd = () => {
  const { name, email } = state.newUser;
  if (name.trim() !== "" && email.trim() !== "") {
    state.isLoading = true;
    axios
      .post("http://localhost:3001/users", state.newUser)
      .then((res) => res.status === 201 && store.fetchUsers())
      .catch((err) => (state.isLoading = false))
      .finally(() => {
        state.isLoading = false;
        handleReset();
      });
  }
};
</script>

<style scoped></style>
