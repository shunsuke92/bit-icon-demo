<template>
  <Button @click="handleClick"><ShuffleIcon /></Button>
</template>

<script setup lang="ts">
  const { identicons, recreateIdenticons } = useIdenticonsState();

  const handleClick = () => {
    recreateIdenticons();
  };
</script>
