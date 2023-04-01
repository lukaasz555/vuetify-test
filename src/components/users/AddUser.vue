<template>
  <v-card :width="300" class="pt-8 px-4" :rounded="4">
    <v-form @submit.prevent>
      <the-input
        label="Name"
        :value="newUser.name"
        @handleInputChange="handleNameChange"
      ></the-input>
      <the-input
        label="E-mail"
        :value="newUser.email"
        @handleInputChange="handleEmailChange"
      ></the-input>
      <the-select
        :items="['PL', 'UK', 'ESP']"
        :value="newUser.country"
        @handleSelectChange="handleCountryChange"
      ></the-select>
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
import { reactive, ref } from "vue";
import { useSearchStore } from "@/store/searchStore";
import { useUsersStore } from "@/store/usersStore";
import TheInput from "../UI/TheInput.vue";
import TheSelect from "../UI/TheSelect.vue";

const usersStore = useUsersStore();
const searchStore = useSearchStore();

const state = reactive({
  isLoading: false,
  errorMessage: "",
  success: false,
});

const newUser = ref({
  name: "",
  email: "",
  country: "",
});

const handleReset = () => {
  newUser.value = {
    name: "",
    email: "",
    country: "",
  };
  state.errorMessage = "";
};

const handleAdd = () => {
  const { name, email } = newUser.value;
  if (name.trim() !== "" && email.trim() !== "") {
    state.isLoading = true;
    usersStore
      .addUser(newUser.value)
      .then((res) => {
        if (res.status === 201) {
          setTimeout(() => {
            state.success = true;
            handleReset();
            usersStore.fetchUsers(searchStore.$state);
          }, 2000);
        }
      })
      .catch((e: Error) => {
        setTimeout(() => {
          state.errorMessage = "Something went wrong";
          state.isLoading = false;
        }, 3000);
      });
  } else {
    state.errorMessage = "You must fill the inputs";
  }
};

const handleNameChange = (e: Event) => (newUser.value.name = e.toString());
const handleEmailChange = (e: Event) => (newUser.value.email = e.toString());
const handleCountryChange = (e: Event) =>
  (newUser.value.country = e.toString());
</script>

<style scoped></style>
