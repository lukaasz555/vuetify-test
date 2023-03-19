<template>
  <v-card :width="300" class="pt-8 px-4" :rounded="4">
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
      <v-card-text v-if="state.success" class="text-success text-center mb-2">
        Added user
      </v-card-text>
      <v-card-text v-else class="text-red text-error mb-2">
        {{ state.errorMessage }}
      </v-card-text>
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
  errorMessage: "",
  success: false,
});

const handleReset = () => {
  state.newUser = {
    name: "",
    email: "",
  };
  state.errorMessage = "";
};

const handleAdd = () => {
  const { name, email } = state.newUser;
  if (name.trim() !== "" && email.trim() !== "") {
    state.isLoading = true;
    axios
      .post("http://localhost:3001/users", state.newUser)
      .then((res) => {
        if (res.status === 201) {
          state.success = true;
          handleReset();
          store.fetchUsers();
        }
      })
      .catch(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (err) => (state.errorMessage = `Sth went wrong. Please, try again.`)
      )
      .finally(() => {
        state.isLoading = false;
      });
  } else {
    state.errorMessage = "You must fill the inputs";
  }
};
</script>

<style scoped></style>
