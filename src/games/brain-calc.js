import {
  sayHello, getRandomInt, startGame, checkAnswer, getAnswer,
} from '../index.js';

const getCalculation = (first, second, action) => {
  const firstNumber = Number(first);
  const secondNumber = Number(second);

  switch (action) {
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return firstNumber + secondNumber;
  }
};

const askCalcQuestion = () => {
  const MIN_RANDOM_INT = 0;
  const MAX_FIRST_NUMBER = 100;
  const MAX_SECOND_NUMBER = 10;

  const actions = ['+', '-', '*'];
  const actionIndex = getRandomInt(MIN_RANDOM_INT, actions.length - 1);
  const action = actions[actionIndex];

  const firstNumber = getRandomInt(MIN_RANDOM_INT, MAX_FIRST_NUMBER);
  const secondNumber = getRandomInt(MIN_RANDOM_INT, MAX_SECOND_NUMBER);

  console.log(`Question: ${firstNumber} ${action} ${secondNumber}`);
  const answer = getAnswer();
  const rightAnswer = getCalculation(firstNumber, secondNumber, action);

  return checkAnswer(answer, rightAnswer);
};

const startBrainCalc = () => {
  const gameHeader = 'What is the result of the expression?';

  const playerName = sayHello();

  startGame(askCalcQuestion, playerName, gameHeader);
};

export default startBrainCalc;
