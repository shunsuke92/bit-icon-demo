<template>
  <div
    class="sticky flex justify-center border-b border-gray-300 dark:border-gray-600 left-0 top-0 w-full h-20 px-6 bg-gray-100/95 dark:bg-gray-700/95"
  >
    <div class="hidden lg:flex gap-6 items-center justify-center">
      <ToggleRound />
      <ToggleSize />
      <ToggleFillType />
      <ShuffleButton />
      <ToggleDarkMode class="absolute right-6" />
    </div>
    <div class="flex lg:hidden gap-6 items-center justify-end w-full">
      <ThreePointButton />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
