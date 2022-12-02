import {
  sayHello, startGame, askQuestion, isEven,
} from '../index.js';

const startBrainEven = () => {
  const gameHeader = 'Answer "yes" if the number is even, otherwise answer "no".';
  const MIN_RANDOM_INT = 1;
  const MAX_RANDOM_INT = 100;

  const question = askQuestion(MIN_RANDOM_INT, MAX_RANDOM_INT, isEven);

  const playerName = sayHello();

  startGame(question, playerName, gameHeader);
};

export default startBrainEven;
