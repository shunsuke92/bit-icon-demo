<template>
  <div
    v-if="open"
    class="fixed left-0 top-0 flex items-center justify-center w-full h-screen bg-gray-800/50"
    @click="handleClick"
  >
    <div
      class="p-6 bg-gray-100 dark:bg-gray-800 shadow dark:shadow-none shadow-gray-700 rounded-lg border-0 dark:border border-gray-600"
      :class="optionClass"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { backgroundFixed } from '~/utils/backgroundFixed';

  interface Props {
    open: boolean;
    optionClass?: string;
  }

  const props = defineProps<Props>();

  watch(
    () => props.open,
    (value) => {
      if (value) {
        backgroundFixed(true);
      } else {
        backgroundFixed(false);
      }
    },
  );

  const emit = defineEmits<{ (e: 'close', value: void): void }>();
  const handleClick = () => {
    emit('close');
  };
</script>
