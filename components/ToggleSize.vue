<template>
  <ToggleButtonGroup>
    <ToggleButton :selected="settingInfo.size === 'sm'" value="sm" @click="handleClick"
      ><CircleSIcon :class="settingInfo.size === 'sm' ? 'selected' : ''"
    /></ToggleButton>
    <ToggleButton :selected="settingInfo.size === 'md'" value="md" @click="handleClick"
      ><CircleMIcon :class="settingInfo.size === 'md' ? 'selected' : ''"
    /></ToggleButton>
    <ToggleButton :selected="settingInfo.size === 'lg'" value="lg" @click="handleClick"
      ><CircleLIcon :class="settingInfo.size === 'lg' ? 'selected' : ''"
    /></ToggleButton>
  </ToggleButtonGroup>
</template>

<script setup lang="ts">
  const { identicons, updateIdenticons } = useIdenticonsState();
  const { settingInfo, updateSettingInfo } = useSettingInfoState();

  const handleClick = (value: string) => {
    if (value === 'sm' || value === 'md' || value === 'lg') {
      updateSettingInfo({ ...settingInfo.value, size: value });

      updateIdenticons(
        identicons.value.map((identicon) => ({
          ...identicon,
          displaySize: value === 'sm' ? 50 : value === 'md' ? 80 : 120,
        })),
      );
    }
  };
</script>
