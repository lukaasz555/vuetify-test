<template>
  <the-navbar></the-navbar>

  <v-main class="d-flex flex-column align-center my-16">
    <slot></slot>
  </v-main>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/UI/TheNavbar.vue";
</script>
