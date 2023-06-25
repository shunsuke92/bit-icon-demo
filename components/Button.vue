<template>
  <button
    class="flex items-center justify-center h-fit rounded p-1.5 border btn-border btn-bg"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>();
  const handleClick = (event: MouseEvent) => {
    emit('click', event);
  };
</script>
