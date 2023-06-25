export type Idendicon = {
  id: string;
  character: string;
  size: number;
  color: string;
  background: string;
  type: 'normal' | 'reverse';
  displaySize: 50 | 80 | 120;
  svg: string;
};

export type SettingInfo = {
  roundness: 'rounded' | 'rounded-full';
  size: 'sm' | 'md' | 'lg';
  type: 'normal' | 'reverse' | 'random';
  darkMode: 'light' | 'dark' | 'system' | undefined;
};
