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
      <!-- <date-input
        :value="state.newUser.startDate"
        label="Start date:"
        @handleInputChange="handleDateChange"
      ></date-input> -->
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
import { usersStore } from "@/store/app";
import TheInput from "../UI/TheInput.vue";
import TheSelect from "../UI/TheSelect.vue";
// import DateInput from "../UI/DateInput.vue";
import UsersService from "@/services/UsersService";

const store = usersStore();

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
    UsersService.addUser(newUser.value)
      .then((res) => {
        if (res.status === 201) {
          state.success = true;
          handleReset();
          store.fetchUsers();
        }
      })
      .catch((e) => console.log(e));
    // axios
    //   .post("http://localhost:3001/users", state.newUser)
    //   .then((res) => {
    //     if (res.status === 201) {
    //       state.success = true;
    //       handleReset();
    //       store.fetchUsers();
    //     }
    //   })
    //   .catch(
    //     (err) => (state.errorMessage = `Sth went wrong. Please, try again.`)
    //   )
    //   .finally(() => {
    //     state.isLoading = false;
    //   });
  } else {
    state.errorMessage = "You must fill the inputs";
  }
};

//
const handleNameChange = (e: Event) => (newUser.value.name = e.toString());
const handleEmailChange = (e: Event) => (newUser.value.email = e.toString());
const handleCountryChange = (e: Event) =>
  (newUser.value.country = e.toString());
// const handleDateChange = (e: Event) => {
//   state.newUser.startDate = new Date(e.toString());
// };
</script>

<style scoped></style>
