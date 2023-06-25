import { Idendicon } from '~/types';

export const useSelectedContentState = () => {
  const selectedContent: Ref<Idendicon | undefined> = useState('selectedContent', () => undefined);

  const updateSelectedContent = (value: Idendicon | undefined) => {
    selectedContent.value = value;
  };

  return {
    selectedContent: readonly(selectedContent),
    updateSelectedContent,
  };
};
