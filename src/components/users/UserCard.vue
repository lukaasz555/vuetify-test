<template>
  <v-card
    :title="name"
    :subtitle="email"
    :width="260"
    text="Short description is here..."
    class="mx-4 my-2 px-2 py-3"
  >
    <v-card-actions class="d-flex justify-end">
      <v-btn
        size="small"
        variant="tonal"
        :style="{ color: $vuetify.theme.themes.light.colors.blue }"
        :href="'http://localhost:3000/users/' + id"
        >page</v-btn
      >
      <v-btn
        size="small"
        variant="outlined"
        :style="{ color: $vuetify.theme.themes.light.colors.blue }"
        >edit</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps(["name", "id", "email"]);
const { name, email } = toRefs(props);
</script>
