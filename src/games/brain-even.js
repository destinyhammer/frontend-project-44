import {
  sayHello, startGame, askYesNoQuestion,
} from '../index.js';

const isEven = (number) => number % 2 === 0;

const startBrainEven = () => {
  const MIN_RANDOM_INT = 1;
  const MAX_RANDOM_INT = 100;
  const gameHeader = 'Answer "yes" if the number is even, otherwise answer "no".';

  const question = askYesNoQuestion(MIN_RANDOM_INT, MAX_RANDOM_INT, isEven);

  const playerName = sayHello();

  startGame(question, playerName, gameHeader);
};

export default startBrainEven;
