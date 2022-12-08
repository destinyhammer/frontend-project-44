import {
  getRandomInt, startGame,
} from '../index.js';

const getBcd = (x, y) => {
  if (y > x) {
    return getBcd(y, x);
  }
  if (!y) {
    return x;
  }
  return getBcd(y, x % y);
};

const prepareGcdQuestion = () => {
  const MIN_RANDOM_INT = 1;
  const MAX_RANDOM_INT = 100;
  const x = getRandomInt(MIN_RANDOM_INT, MAX_RANDOM_INT);
  const y = getRandomInt(MIN_RANDOM_INT, MAX_RANDOM_INT);
  const question = `Question: ${x} ${y}`;

  const rightAnswer = getBcd(x, y);

  return [question, rightAnswer];
};

const startBrainGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(prepareGcdQuestion, gameDescription);
};

export default startBrainGcd;
