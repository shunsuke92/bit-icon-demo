<template>
  <Button @click="handleClick"><ThreePointIcon /></Button>
  <ThreePointMenu />
</template>

<script setup lang="ts">
  const { updateOpenThreePointMenuState } = useOpenThreePointMenuState();

  const handleClick = () => {
    updateOpenThreePointMenuState(true);
  };
</script>
