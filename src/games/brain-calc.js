import {
  getRandomInt, startGame,
} from '../index.js';

const getCalculation = (first, second, action) => {
  switch (action) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      throw new Error(`Action "${action}" is not supported`);
  }
};

const prepareCalcQuestion = () => {
  const MIN_RANDOM_INT = 0;
  const MAX_FIRST_NUMBER = 100;
  const MAX_SECOND_NUMBER = 10;

  const actions = ['+', '-', '*'];
  const actionIndex = getRandomInt(MIN_RANDOM_INT, actions.length - 1);
  const action = actions[actionIndex];

  const firstNumber = getRandomInt(MIN_RANDOM_INT, MAX_FIRST_NUMBER);
  const secondNumber = getRandomInt(MIN_RANDOM_INT, MAX_SECOND_NUMBER);

  const question = `${firstNumber} ${action} ${secondNumber}`;
  const rightAnswer = getCalculation(firstNumber, secondNumber, action).toString();

  return [question, rightAnswer];
};

const startBrainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  startGame(prepareCalcQuestion, gameDescription);
};

export default startBrainCalc;
