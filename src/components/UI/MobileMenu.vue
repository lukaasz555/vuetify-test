<template>
  <v-navigation-drawer v-model="store.drawer" class="d-block d-md-none">
    <v-list class="d-flex flex-column">
      <v-list-item v-for="route in routes" :key="route.path">
        <a
          class="mx-2 text-decoration-none hover:text-decoration-underline"
          :href="route.path"
          :style="{ color: $vuetify.theme.themes.light.colors.blue }"
          >{{ route.name }}</a
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { routes } from "@/router";
import { drawerStore } from "@/store/app";

const store = drawerStore();

const onResize = () => {
  if (window.innerWidth > 900) {
    store.drawer = false;
  }
};

window.addEventListener("resize", onResize);
</script>
