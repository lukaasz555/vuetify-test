<template>
  <div>
    <v-label :text="label" class="text-body-2 px-8"> </v-label>
    <v-text-field
      type="date"
      variant="outlined"
      density="compact"
      @update:model-value="$emit('handleInputChange', $event)"
    ></v-text-field>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({ label: String });
const { label } = toRefs(props);
</script>

<style scoped>
:deep(.v-input__control) {
  border: 1px solid blue;
  border-radius: 25px;
  padding: 0 1em;
}

:deep(.v-field__outline) {
  display: none;
}

:deep(.v-text-field input) {
  text-align: center;
}
</style>
