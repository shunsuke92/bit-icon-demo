<template>
  <ToggleButtonGroup>
    <ToggleButton
      :selected="settingInfo.roundness === 'rounded-full'"
      value="rounded-full"
      @click="handleClick"
      ><RoundIcon :class="settingInfo.roundness === 'rounded-full' ? 'selected' : ''"
    /></ToggleButton>
    <ToggleButton
      :selected="settingInfo.roundness === 'rounded'"
      value="rounded"
      @click="handleClick"
      ><AngularIcon :class="settingInfo.roundness === 'rounded' ? 'selected' : ''"
    /></ToggleButton>
  </ToggleButtonGroup>
</template>

<script setup lang="ts">
  const { settingInfo, updateSettingInfo } = useSettingInfoState();

  const handleClick = (value: string) => {
    if (value === 'rounded' || value === 'rounded-full') {
      updateSettingInfo({ ...settingInfo.value, roundness: value });
    }
  };
</script>
