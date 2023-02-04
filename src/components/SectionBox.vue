<script setup lang="ts">
import { Box } from "../types";

const props = defineProps<{
  box: Box;
}>();
</script>

<template>
  <a :href="props.box.url" class="box" target="_blank">
    <div class="box-content">
      <div class="box-label">
        {{ props.box.label }}
      </div>
      <div class="box-title">
        {{ props.box.title }}
      </div>
    </div>

    <div class="box-icon">
      <component :is="box.icon" />
    </div>
  </a>
</template>

<style lang="postcss" scoped>
.box {
  @apply relative block cursor-pointer rounded-md bg-white p-4 drop-shadow-md transition-transform duration-200 hover:scale-105 hover:drop-shadow-xl;
}

.box-content {
  @apply pt-4;
}

.box-icon {
  @apply absolute right-2 top-2 md:right-4 md:top-4;
}

.box-label {
  @apply font-oswald text-sm uppercase leading-snug text-[#94A3B8] md:text-base;
}

.box-title {
  @apply font-oswald text-sm font-semibold uppercase text-brand md:text-base;
}
</style>
