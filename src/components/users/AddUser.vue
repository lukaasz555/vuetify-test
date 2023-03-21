<template>
  <v-card :width="300" class="pt-8 px-4" :rounded="4">
    <v-form @submit.prevent>
      <the-input
        label="Name"
        :value="state.newUser.name"
        @handleInputChange="handleNameChange"
      ></the-input>
      <the-input
        label="E-mail"
        :value="state.newUser.email"
        @handleInputChange="handleEmailChange"
      ></the-input>
      <the-select
        :items="['PL', 'UK', 'ESP']"
        :value="state.newUser.country"
        @handleSelectChange="handleCountryChange"
      ></the-select>
      <date-input
        :value="state.newUser.startDate"
        label="Start date:"
        @handleInputChange="handleDateChange"
      ></date-input>
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
import TheInput from "../UI/TheInput.vue";
import TheSelect from "../UI/TheSelect.vue";
import DateInput from "../UI/DateInput.vue";

const store = usersStore();
const state = reactive({
  newUser: {
    name: "",
    email: "",
    country: "",
    startDate: new Date(),
  },
  isLoading: false,
  errorMessage: "",
  success: false,
});

const handleReset = () => {
  state.newUser = {
    name: "",
    email: "",
    country: "",
    startDate: new Date(),
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

//
const handleNameChange = (e: Event) => (state.newUser.name = e.toString());
const handleEmailChange = (e: Event) => (state.newUser.email = e.toString());
const handleCountryChange = (e: Event) =>
  (state.newUser.country = e.toString());
const handleDateChange = (e: Event) => {
  state.newUser.startDate = new Date(e.toString());
};
</script>

<style scoped></style>
