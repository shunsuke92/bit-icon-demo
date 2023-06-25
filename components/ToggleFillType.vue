<template>
  <ToggleButtonGroup>
    <ToggleButton :selected="settingInfo.type === 'normal'" value="normal" @click="handleClick"
      ><NormalFillIcon :class="settingInfo.type === 'normal' ? 'selected' : ''"
    /></ToggleButton>
    <ToggleButton :selected="settingInfo.type === 'reverse'" value="reverse" @click="handleClick"
      ><ReverseFillIcon :class="settingInfo.type === 'reverse' ? 'selected' : ''"
    /></ToggleButton>
    <ToggleButton :selected="settingInfo.type === 'random'" value="random" @click="handleClick"
      ><RandomIcon :class="settingInfo.type === 'random' ? 'selected' : ''"
    /></ToggleButton>
  </ToggleButtonGroup>
</template>

<script setup lang="ts">
  const { identicons, updateIdenticons } = useIdenticonsState();
  const { settingInfo, updateSettingInfo } = useSettingInfoState();

  const handleClick = (value: string) => {
    if (value === 'normal' || value === 'reverse' || value === 'random') {
      updateSettingInfo({ ...settingInfo.value, type: value });

      updateIdenticons(
        identicons.value.map((identicon) => ({
          ...identicon,
          type: value === 'random' ? getRandomType() : value,
        })),
      );
    }
  };
</script>
