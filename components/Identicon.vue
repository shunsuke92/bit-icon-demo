<template>
  <div class="flex justify-center">
    <img class="cursor-pointer" :class="settingInfo.roundness" :src="src" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    src: string;
  }

  defineProps<Props>();

  const { settingInfo } = useSettingInfoState();

  const emit = defineEmits<{ (e: 'click', value: void): void }>();
  const handleClick = () => {
    emit('click');
  };
</script>
