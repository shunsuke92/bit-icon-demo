<template>
  <div class="p-12">
    <div
      class="grid"
      :class="
        settingInfo.size === 'sm'
          ? 'gap-2 gap-y-6 grid-cols-fill-16'
          : settingInfo.size === 'md'
          ? 'gap-3 gap-y-7 grid-cols-fill-24'
          : 'gap-4 gap-y-10 grid-cols-fill-32'
      "
    >
      <template v-if="isLoading">
        <Skeleton v-for="n in identicons.length" :key="n" />
      </template>
      <Identicon
        v-for="(identicon, index) in identicons"
        :key="index"
        :src="identicon.svg"
        @click="() => handleClick(identicon)"
        :class="isLoading && 'hidden'"
      />
    </div>
  </div>
  <ContentMenu />
</template>

<script setup lang="ts">
  import { Idendicon } from '~/types';

  const { identicons } = useIdenticonsState();
  const { settingInfo } = useSettingInfoState();
  const { updateSelectedContent } = useSelectedContentState();

  const isLoading = ref(true);

  onMounted(() => {
    isLoading.value = false;
  });

  const handleClick = (data: Idendicon) => {
    updateSelectedContent(data);
  };
</script>
