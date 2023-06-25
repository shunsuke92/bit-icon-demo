<template>
  <Menu :open="openThreePointMenu" option-class="absolute top-16 right-6" @close="handleClose">
    <div class="flex flex-col gap-6 w-56">
      <ShuffleButton />
      <ToggleRound />
      <ToggleSize />
      <ToggleFillType />
      <ToggleDarkMode />
    </div>
  </Menu>
</template>

<script setup lang="ts">
  const { openThreePointMenu, updateOpenThreePointMenuState } = useOpenThreePointMenuState();

  const handleClose = () => {
    updateOpenThreePointMenuState(false);
  };
</script>
