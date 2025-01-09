<script lang="ts" setup>
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
  import { useStorage } from "@vueuse/core";
  import { onMounted, watchEffect } from "vue";

  function applyTheme(newIsDarkMode: boolean) {
    if (newIsDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const isDarkMode = useStorage<boolean>("isDarkMode", false);

  onMounted(() => {
    watchEffect(() => {
      applyTheme(isDarkMode.value);
    })
  })

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
  }
</script>

<template>
  <button @click="toggleTheme()" class="h-10 w-10 flex items-center justify-center subtle">
    <FontAwesomeIcon :icon="faSun" v-if="!isDarkMode" class="h-full w-full"/>
    <FontAwesomeIcon :icon="faMoon" v-else class="h-full w-full"/>
  </button>
</template>