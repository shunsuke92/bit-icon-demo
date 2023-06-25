<template>
  <button
    :class="selected ? ' btn-bg-selected' : ' btn-bg'"
    class="w-full flex items-center justify-center p-1.5 btn-border"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  interface Props {
    value: string;
    selected: boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{ (e: 'click', value: string): void }>();
  const handleClick = () => {
    emit('click', props.value);
  };
</script>
