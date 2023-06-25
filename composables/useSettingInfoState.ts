import { SettingInfo } from '~/types';

const defaultValue: SettingInfo = {
  roundness: 'rounded',
  darkMode: undefined,
  size: 'md',
  type: 'normal',
};

export const useSettingInfoState = () => {
  const settingInfo: Ref<SettingInfo> = useState('settingInfo', () => defaultValue);

  const updateSettingInfo = (value: SettingInfo) => {
    settingInfo.value = value;
  };

  return {
    settingInfo: readonly(settingInfo),
    updateSettingInfo,
  };
};
