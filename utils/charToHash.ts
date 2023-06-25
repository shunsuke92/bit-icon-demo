import md5 from 'js-md5';

export const charToHash = (char: string) => {
  return md5(char);
};
