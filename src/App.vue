<template>
  <router-view />
  <ul v-if="state.users">
    <li v-for="user in state.users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

type User = {
  [key: string]: string;
};

interface State {
  users: User[] | [];
}

const state: State = reactive({
  users: [],
});

onMounted(() => {
  axios
    .get("http://localhost:3001/users")
    .then((res) => {
      state.users = res.data;
      console.log(res.data);
    })
    .catch((err) => console.log(err));
});
</script>
