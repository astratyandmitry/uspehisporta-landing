<script setup lang="ts">
import SectionBox from "./SectionBox.vue";
import { Section } from "../types";

const props = defineProps<{
  section: Section;
  settings: Record<string, string>;
}>();
</script>

<template>
  <div class="section">
    <div class="section-heading">
      <h2 class="section-title">
        {{ props.section.title }}
        <span>{{ props.section.subtitle }} </span>
      </h2>
    </div>

    <div class="section-grid">
      <SectionBox
        v-for="box in props.section.boxes"
        :key="box.title"
        :box="box"
        :settings="props.settings"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.section-title {
  @apply mb-4 font-oswald text-2xl font-bold uppercase text-white md:mb-8 md:text-3xl;
}

.section-title span {
  @apply block font-light text-[#93C5FD];
}

.section-grid {
  @apply grid grid-cols-2 gap-4;
}
</style>
