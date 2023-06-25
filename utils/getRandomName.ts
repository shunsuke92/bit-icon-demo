import { firstName } from './firstName';
import { lastName } from './lastName';

export const getRandomName = () => {
  const randomFirstName = firstName[getRandomInt(firstName.length)];
  const randomLastName = lastName[getRandomInt(lastName.length)];

  return randomFirstName + ' ' + randomLastName;
};
