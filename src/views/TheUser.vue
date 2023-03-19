<template>
  <the-layout>
    <p>{{ state.currentUser.name }}</p>
  </the-layout>
</template>

<script setup lang="ts">
import TheLayout from "@/layouts/TheLayout.vue";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import axios from "axios";

const route = useRoute();
const id = route.params.id;

const state = reactive({
  currentUser: {
    name: "",
    email: "",
    id: null,
  },
});

onMounted(() => {
  axios
    .get(`http://localhost:3001/users/${id}`)
    .then((res) => {
      const { id, name, email } = res.data;
      state.currentUser = {
        name,
        email,
        id,
      };
    })
    .catch((err) => console.log(err));
});
</script>
