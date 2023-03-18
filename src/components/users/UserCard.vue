<template>
  <v-card
    :title="name"
    :subtitle="email"
    :width="260"
    text="Short description is here..."
  >
    <v-card-actions>
      <v-btn
        size="small"
        variant="tonal"
        :style="{ color: $vuetify.theme.themes.light.colors.blue }"
        >Do sth</v-btn
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

<style scoped>
.v-card {
  margin: 1em;
  padding: 1em 2em;
}
</style>
