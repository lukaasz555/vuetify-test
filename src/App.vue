<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.gray }">
    <mobile-menu app></mobile-menu>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { usersStore } from "./store/app";
import axios from "axios";
import MobileMenu from "./components/UI/MobileMenu.vue";

const store = usersStore();

onMounted(() => {
  axios
    .get("http://localhost:3001/users")
    .then((res) => {
      store.users = res.data;
      console.log(res.data);
    })
    .catch((err) => console.log(err));
});
</script>
