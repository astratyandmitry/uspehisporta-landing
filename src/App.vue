<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import { useAppStore } from "./store";
import SectionGrid from "./components/SectionGrid.vue";
import { onMounted, ref } from "vue";

const { sections } = useAppStore();
const settings = ref<Record<string, string>>({});

onMounted(() => {
  fetch("https://shop.uspehisporta.moscow/api/settings")
    .then((response) => response.json())
    .then((data) => {
      settings.value = data.settings;
    });
});
</script>

<template>
  <main class="app">
    <AppHeader :shop-url="settings['url.shop']" />

    <section class="body">
      <SectionGrid
        v-for="section in sections"
        :key="section.title"
        :settings="settings"
        :section="section"
      />
    </section>
  </main>
</template>

<style scoped>
.app {
  @apply mx-auto max-w-[560px] px-4 pb-4 md:pb-8;
}

.body {
  @apply space-y-8 rounded-xl bg-brand p-8 drop-shadow-xl md:space-y-16 md:p-12 md:drop-shadow-2xl;
}
</style>
