export const useOpenThreePointMenuState = () => {
  const openThreePointMenu: Ref<boolean> = useState('openThreePointMenu', () => false);

  const updateOpenThreePointMenuState = (value: boolean) => {
    openThreePointMenu.value = value;
  };

  return {
    openThreePointMenu: readonly(openThreePointMenu),
    updateOpenThreePointMenuState,
  };
};
