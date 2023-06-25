<template>
  <div
    class="flex [&>*:first-child]:rounded-l [&>*:last-child]:rounded-r [&>*]:border [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:border-l-transparent"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>
