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
          <input type="color" v-model="color" class="input w-36 cursor-pointer" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">Background</div>
          <input type="color" v-model="background" class="input w-36 cursor-pointer" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">Size</div>
          <div class="flex items-center gap-2">
            <input
              type="number"
              v-model="size"
              class="input w-20"
              :class="isOversize && 'border-red-600 focus:border-red-600  focus:ring-red-600'"
            />
            <span v-if="isOversize" class="Class Properties text-sm text-red-600"
              >The size limit is {{ MAX_SIZE.toLocaleString() }}</span
            >
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-gray-800 dark:text-gray-200">Download</div>
          <div class="flex gap-4">
            <Button
              type="fill"
              :disabled="isOversize"
              @click="handleClickDownloadSvg"
              class="text-gray-800 disabled:text-gray-800/50 dark:text-gray-200 dark:disabled:text-gray-200/50"
            >
              <div class="flex gap-3 pl-4 pr-5">
                <DownloadIcon :class="isOversize ? 'disabled' : ''" />SVG
              </div>
            </Button>
            <Button
              type="fill"
              :disabled="isOversize"
              @click="handleClickDownloadPng"
              class="text-gray-800 disabled:text-gray-800/50 dark:text-gray-200 dark:disabled:text-gray-200/50"
            >
              <div class="flex gap-3 pl-4 pr-5">
                <DownloadIcon :class="isOversize ? 'disabled' : ''" />PNG
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
  const skipToNext = ref(false);

  const SIZE = 140;
  const MAX_SIZE = 10000;

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

  watch(
    [id, color, background],
    ([newId, newColor, newBackground], [oldId, oldColor, oldBackground]) => {
      if (skipToNext.value) {
        skipToNext.value = false;
        return;
      }
      if (newId === '' || newColor === '' || newBackground === '') return;
      if (newId !== oldId && newColor !== oldColor && newBackground !== oldBackground) {
        const hash = charToHash(id.value);
        const options: Options = {
          size: SIZE,
          color: color.value,
          background: background.value,
          type: 'normal',
        };
        const bitIcon = new BitIcon(hash, options);
        src.value = bitIcon.toSvg();
      } else if (newId !== oldId) {
        const hash = charToHash(id.value);
        const options: Options = {
          size: SIZE,
          type: 'normal',
        };
        const bitIcon = new BitIcon(hash, options);
        color.value = bitIcon.color;
        background.value = bitIcon.background;
        src.value = bitIcon.toSvg();

        // color,backgroundを変更することによる余計なwatchをスキップする
        skipToNext.value = true;
      } else if (newColor !== oldColor || newBackground !== oldBackground) {
        const hash = charToHash(id.value);
        const options: Options = {
          size: SIZE,
          color: color.value,
          background: background.value,
          type: 'normal',
        };
        const bitIcon = new BitIcon(hash, options);
        src.value = bitIcon.toSvg();
      }
    },
  );

  const isOversize = computed(() => {
    return size.value > MAX_SIZE;
  });

  const handleClose = () => {
    id.value = '';
    color.value = '';
    background.value = '';
    size.value = 0;
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
