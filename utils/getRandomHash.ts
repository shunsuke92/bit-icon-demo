import md5 from 'js-md5';

export const getRandomHash = () => {
  return md5(Math.random().toString(16).slice(-8));
};
