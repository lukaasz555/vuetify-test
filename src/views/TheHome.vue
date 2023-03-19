<template>
  <router-view>
    <the-layout>
      <article>
        <h1>h1 here</h1>
        <p>some text...</p>
      </article>
    </the-layout>
  </router-view>
</template>

<script lang="ts" setup>
import TheLayout from "@/layouts/TheLayout.vue";
</script>
