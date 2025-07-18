<script lang="ts" setup>
  import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { onMounted, watchEffect } from 'vue';
  import { useStorage } from '@vueuse/core';

  function applyTheme(newIsDarkMode: boolean) {
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const isDarkMode = useStorage<boolean>('isDarkMode', false);

  onMounted(() => {
    watchEffect(() => {
      applyTheme(isDarkMode.value);
    });
  });

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
  }
</script>

<template>
  <button
    class="subtle flex h-8 w-8 items-center justify-center"
    aria-label="Toggle theme"
    @click="toggleTheme()"
  >
    <FontAwesomeIcon
      v-show="!isDarkMode"
      :icon="faSun"
      class="h-full w-full"
    />
    <FontAwesomeIcon
      v-show="isDarkMode"
      :icon="faMoon"
      class="h-full w-full"
    />
  </button>
</template>

<style scoped>
  @reference '@styles/main.css';
  * {
    @apply motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out;
  }
</style>
