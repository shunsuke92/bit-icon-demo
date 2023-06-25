export const getRandomType = () => {
  return getRandomInt(2) === 0 ? 'normal' : 'reverse';
};
