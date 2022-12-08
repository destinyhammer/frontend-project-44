import {
  startGame, prepareYesNoQuestion,
} from '../index.js';

const isEven = (number) => number % 2 === 0;

const startBrainEven = () => {
  const MIN_RANDOM_INT = 1;
  const MAX_RANDOM_INT = 100;
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = prepareYesNoQuestion(MIN_RANDOM_INT, MAX_RANDOM_INT, isEven);

  startGame(question, gameDescription);
};

export default startBrainEven;
