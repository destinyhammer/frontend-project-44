#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt } from '../src/index.js';

const brainCalc = () => {
  const actions = ['+', '-', '*'];

  const getRandomAction = () => {
    const max = actions.length - 1;
    const actionIndex = getRandomInt(0, max);
    return actions[actionIndex];
  };

  const getCalculation = (firstNumber, secondNumber, action) => {
    switch (action) {
      case '+':
        return +firstNumber + +secondNumber;
      case '-':
        return +firstNumber - +secondNumber;
      case '*':
        return +firstNumber * +secondNumber;
      default:
        return +firstNumber + +secondNumber;
    }
  };

  const askQuestion = () => {
    const firstNumber = getRandomInt(0, 100);
    const secondNumber = getRandomInt(0, 10);
    const action = getRandomAction();
    const question = `${firstNumber} ${action} ${secondNumber}`;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();
    const rightAnswer = getCalculation(firstNumber, secondNumber, action);

    if (+answer === rightAnswer) {
      return 'Correct!';
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  };

  const playerName = greetings();

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const currentQuestion = askQuestion();
    if (currentQuestion.indexOf('wrong') !== -1) {
      console.log(currentQuestion);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log(currentQuestion);
  }

  console.log(`Congratulations, ${playerName}!`);
};

brainCalc();

export default brainCalc;
