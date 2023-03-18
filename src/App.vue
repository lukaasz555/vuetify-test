<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.gray }">
    <mobile-menu></mobile-menu>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import MobileMenu from "./components/UI/MobileMenu.vue";
</script>
