<template>
  <ToggleButtonGroup>
    <ToggleButton :selected="settingInfo.darkMode === 'light'" value="light" @click="handleClick"
      ><LightIcon :class="settingInfo.darkMode === 'light' ? 'selected' : ''"
    /></ToggleButton>
    <ToggleButton :selected="settingInfo.darkMode === 'dark'" value="dark" @click="handleClick"
      ><DarkIcon :class="settingInfo.darkMode === 'dark' ? 'selected' : ''"
    /></ToggleButton>
    <ToggleButton :selected="settingInfo.darkMode === 'system'" value="system" @click="handleClick"
      ><SystemIcon :class="settingInfo.darkMode === 'system' ? 'selected' : ''"
    /></ToggleButton>
  </ToggleButtonGroup>
</template>

<script setup lang="ts">
  const { settingInfo, updateSettingInfo } = useSettingInfoState();

  const handleClick = (value: string) => {
    if (value === 'light' || value === 'dark' || value === 'system') {
      updateSettingInfo({ ...settingInfo.value, darkMode: value });
    }
  };
</script>
