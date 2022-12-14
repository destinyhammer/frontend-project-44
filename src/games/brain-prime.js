import {
  startGame, prepareYesNoQuestion,
} from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const startBrainPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const MIN_RANDOM_INT = 2;
  const MAX_RANDOM_INT = 100;
  const question = prepareYesNoQuestion(MIN_RANDOM_INT, MAX_RANDOM_INT, isPrime);

  startGame(question, gameDescription);
};

export default startBrainPrime;
