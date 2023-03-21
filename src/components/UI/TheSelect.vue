<template>
  <v-select
    :items="items"
    @update:model-value="$emit('handleSelectChange', $event)"
  >
  </v-select>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  items: Array,
});

const { items } = toRefs(props);
</script>
