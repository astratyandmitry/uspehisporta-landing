<script setup lang="ts">
const props = defineProps<{
  shopUrl: string;
}>();
</script>

<template>
  <header class="header">
    <div class="logotype">
      <img src="/logotype.svg" class="logo" alt="УСПЕХИ СПОРТА" />
    </div>

    <div class="actions">
      <a :href="props.shopUrl" target="_blank" class="button-shop group">
        <span class="hidden md:block">Перейти в магазин</span>
        <span class="block md:hidden">В магазин</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="button-animated-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </a>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply flex items-center justify-between px-4 py-8 md:py-8;
}

.button-shop {
  @apply flex items-center rounded-full border border-brand px-5 py-2 text-brand duration-200 hover:bg-brand hover:text-white;
}
</style>
