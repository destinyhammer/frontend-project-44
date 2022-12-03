import {
  sayHello, startGame, askYesNoQuestion,
} from '../index.js';

const isPrime = (number) => {
  for (let currentDivider = 2; currentDivider < number; currentDivider += 1) {
    if (number % currentDivider === 0) return false;
  }
  return true;
};

const startBrainPrime = () => {
  const gameHeader = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const MIN_RANDOM_INT = 2;
  const MAX_RANDOM_INT = 100;

  const question = askYesNoQuestion(MIN_RANDOM_INT, MAX_RANDOM_INT, isPrime);

  const playerName = sayHello();

  startGame(question, playerName, gameHeader);
};

export default startBrainPrime;
