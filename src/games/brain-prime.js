import {
  sayHello, startGame, askQuestion, isPrime,
} from '../index.js';

const startBrainPrime = () => {
  const gameHeader = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const MIN_RANDOM_INT = 2;
  const MAX_RANDOM_INT = 100;

  const question = askQuestion(MIN_RANDOM_INT, MAX_RANDOM_INT, isPrime);

  const playerName = sayHello();

  startGame(question, playerName, gameHeader);
};

export default startBrainPrime;
