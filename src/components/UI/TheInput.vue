<template>
  <v-text-field
    @update:model-value="$emit('handleInputChange', $event)"
    :label="label"
    variant="outlined"
    density="compact"
  >
  </v-text-field>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  label: String,
});

const { label } = toRefs(props);
</script>
