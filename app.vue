<template>
  <Header />
  <Content />
</template>

<script setup lang="ts">
  import { isLocalStorageAvailable } from './utils/isLocalStorageAvailable';
  import { darkmode } from './utils/darkmode';

  const { settingInfo, updateSettingInfo } = useSettingInfoState();

  useHead({
    script: [{ innerHTML: `${darkmode()}` }],
    bodyAttrs: { class: 'bg-gray-100 dark:bg-gray-700' },
  });

  onMounted(() => {
    setInitialDarkMode();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkMode);
  });

  // At darkmode change
  watch(
    () => settingInfo.value.darkMode,
    () => {
      setDarkMode();
    },
  );

  const setDarkMode = () => {
    if (settingInfo.value.darkMode === undefined) return;
    // set darkmode class
    if (
      settingInfo.value.darkMode === 'dark' ||
      (settingInfo.value.darkMode === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      useHead({ htmlAttrs: { class: 'dark', style: 'color-scheme: dark' } });
    } else {
      useHead({ htmlAttrs: { class: '', style: '' } });
    }

    // set localStorage
    if (isLocalStorageAvailable()) {
      localStorage.setItem('dark-mode', settingInfo.value.darkMode);
    }
  };

  const setInitialDarkMode = () => {
    if (isLocalStorageAvailable()) {
      const darkMode = localStorage.getItem('dark-mode');
      if (darkMode === 'light' || darkMode === 'dark' || darkMode === 'system') {
        updateSettingInfo({ ...settingInfo.value, darkMode: darkMode });
      } else {
        updateSettingInfo({ ...settingInfo.value, darkMode: 'system' });
      }
    } else {
      updateSettingInfo({ ...settingInfo.value, darkMode: 'system' });
    }
  };
</script>
