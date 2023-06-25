<template>
  <Menu :open="selectedContent !== undefined" @close="handleClose">
    <div class="flex flex-col sm:flex-row gap-6">
      <div>
        <img
          class="rounded"
          :class="selectedContent?.type === 'normal' && 'border dark:border-0 border-gray-300'"
          :src="src"
        />
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">ID</div>
          <input type="text" v-model="id" class="input w-72" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">Color</div>
          <input type="color" v-model="color" class="input w-36" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">Background</div>
          <input type="color" v-model="background" class="input w-36" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">Size</div>
          <input type="number" v-model="size" class="input w-24" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">Download</div>
          <div class="flex gap-4">
            <Button type="fill" @click="handleClickDownloadSvg">
              <div class="flex gap-3 text-gray-800 dark:text-gray-200 pl-4 pr-5">
                <DownloadIcon />SVG
              </div>
            </Button>
            <Button type="fill" @click="handleClickDownloadPng">
              <div class="flex gap-3 text-gray-800 dark:text-gray-200 pl-4 pr-5">
                <DownloadIcon />PNG
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Menu>
</template>

<script setup lang="ts">
  import { BitIcon, Options } from 'bit-icon';

  const src = ref('');
  const id = ref('');
  const color = ref('');
  const background = ref('');
  const size = ref(0);

  const SIZE = 140;

  const { selectedContent, updateSelectedContent } = useSelectedContentState();

  watch(
    () => selectedContent.value,
    (value) => {
      if (value === undefined) return;
      id.value = value.character;
      color.value = value.type === 'normal' ? value.color : value.background;
      background.value = value.type === 'normal' ? value.background : value.color;
      size.value = value.size;
    },
  );

  const changeImage = () => {
    const hash = charToHash(id.value);
    const options: Options = {
      size: SIZE,
      color: color.value,
      background: background.value,
      type: 'normal',
    };
    const bitIcon = new BitIcon(hash, options);
    const svg = bitIcon.toSvg();
    src.value = svg;
  };

  watch([id, color, background, size], () => {
    changeImage();
  });

  const handleClose = () => {
    updateSelectedContent(undefined);
  };

  const handleClickDownloadSvg = () => {
    const hash = charToHash(id.value);
    const options: Options = {
      size: size.value,
      color: color.value,
      background: background.value,
    };
    const bitIcon = new BitIcon(hash, options);

    const link = document.createElement('a');
    link.download = 'bit-icon.svg';
    link.href = bitIcon.toSvg();
    link.click();
  };
  const handleClickDownloadPng = async () => {
    const hash = charToHash(id.value);
    const options: Options = {
      size: size.value,
      color: color.value,
      background: background.value,
    };
    const bitIcon = new BitIcon(hash, options);

    const link = document.createElement('a');
    link.download = 'bit-icon.png';
    link.href = await bitIcon.toPng();
    link.click();
  };
</script>
