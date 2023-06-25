<template>
  <div class="flex justify-center">
    <div
      class="bg-gray-300 dark:bg-gray-500"
      :class="settingInfo.roundness"
      :style="`width: ${getSize()}px; height: ${getSize()}px;`"
    ></div>
  </div>
</template>

<script setup lang="ts">
  const { settingInfo } = useSettingInfoState();
  const { identicons } = useIdenticonsState();

  const getSize = () => {
    return identicons.value[0].displaySize;
  };
</script>
