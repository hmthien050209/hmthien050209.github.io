<template>
  <a :href="props.url" class="group p-2">
    <div class="box">
      <font-awesome-icon
        :icon="props.icon"
        class="mx-auto h-8 w-8 items-center p-2 md:h-12 md:w-12"
      >
      </font-awesome-icon>
      <div class="site-name">
        {{ props.site }}
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  site: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String, required: true },
});
</script>

<style scoped>
.box {
  @apply flex h-12 w-12 items-center 
        rounded-xl bg-draculaCurrentline text-draculaForeground shadow-sm transition-all duration-1000 group-hover:w-auto group-hover:opacity-90
        md:h-16 md:w-16;
}
.site-name {
  @apply mx-2 hidden transition-all duration-1000 group-hover:block;
}
</style>
