<template>
    <a :href="props.url" class="p-2">
        <div class="box">
            <font-awesome-icon :icon="props.icon" class="md:h-12 md:w-12 h-8 w-8 mx-auto items-center">
            </font-awesome-icon>
        </div>
    </a>
</template>

<script setup lang="ts">
const props = defineProps({
    url: { type: String, required: true },
    icon: { type: String, required: true },
})
</script>

<style scoped>
.box {
    @apply bg-draculaCurrentline hover:bg-draculaComment transition-opacity duration-300 text-draculaForeground md:h-16 md:w-16 h-12 w-12 rounded-xl flex items-center;
}
</style>