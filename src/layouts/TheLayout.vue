<template>
  <v-main>
    <the-navbar></the-navbar>

    <slot></slot>
  </v-main>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/UI/TheNavbar.vue";
</script>
