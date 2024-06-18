<template>
  <a :href="props.url" class="box">
    <font-awesome-icon :icon="props.icon" class="aspect-auto h-3/5">
    </font-awesome-icon>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  url: { type: String, required: true },
  icon: { type: String, required: true },
});
</script>

<style scoped>
.box {
  all: unset;
  @apply m-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-draculaCurrentline text-draculaForeground shadow-sm transition-all duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 md:h-16 md:w-16;
}
</style>
