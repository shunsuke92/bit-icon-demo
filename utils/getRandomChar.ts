export const getRandomChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const length = 12;
  let randomChars = '';
  for (let i = 0; i < length; i++) {
    randomChars += chars.charAt(getRandomInt(chars.length));
  }
  return randomChars;
};
