import {
  sayHello, getRandomInt, startGame, checkAnswer, getAnswer,
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

const askGcdQuestion = () => {
  const MIN_RANDOM_INT = 1;
  const MAX_RANDOM_INT = 100;
  const x = getRandomInt(MIN_RANDOM_INT, MAX_RANDOM_INT);
  const y = getRandomInt(MIN_RANDOM_INT, MAX_RANDOM_INT);
  const question = `${x} ${y}`;

  console.log(`Question: ${question}`);
  const answer = getAnswer();
  const rightAnswer = getBcd(x, y);

  return checkAnswer(answer, rightAnswer);
};

const startBrainGcd = () => {
  const gameHeader = 'Find the greatest common divisor of given numbers.';

  const playerName = sayHello();

  startGame(askGcdQuestion, playerName, gameHeader);
};

export default startBrainGcd;
