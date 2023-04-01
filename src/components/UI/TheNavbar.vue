<template>
  <v-app-bar
    :elevation="2"
    :style="{ background: $vuetify.theme.themes.light.colors.blue }"
  >
    <v-app-bar-title :style="{ color: $vuetify.theme.themes.light.colors.gray }"
      >Title</v-app-bar-title
    >
    <div>
      <v-icon
        icon="mdi-menu"
        class="d-block d-md-none"
        :style="{
          color: $vuetify.theme.themes.light.colors.gray,
          cursor: 'pointer',
        }"
        @click="state.drawer = !state.drawer"
      ></v-icon>
      <nav class="d-none d-md-flex">
        <a
          v-for="route in routes"
          :key="route.path"
          class="mx-2 text-decoration-none hover:text-decoration-underline"
          :href="route.path"
          :style="{ color: $vuetify.theme.themes.light.colors.gray }"
          >{{ route.name }}</a
        >
      </nav>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { routes } from "../../router/index";
import { useDrawerStore } from "@/store/drawerStore";

const state = useDrawerStore();
</script>
