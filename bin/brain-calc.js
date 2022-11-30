#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings, getRandomInt, startGame, checkAnswer,
} from '../src/index.js';

const brainCalc = () => {
  const gameHeader = 'What is the result of the expression?';
  const actions = ['+', '-', '*'];
  const getCalculation = (firstNumber, secondNumber, action) => {
    switch (action) {
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
    const actionIndex = getRandomInt(0, actions.length - 1);
    const action = actions[actionIndex];

    console.log(`Question: ${firstNumber} ${action} ${secondNumber}`);
    const answer = readlineSync.question('Your answer: ').trim();
    const rightAnswer = getCalculation(firstNumber, secondNumber, action);

    return checkAnswer(answer, rightAnswer);
  };

  const playerName = greetings();
  startGame(askQuestion, playerName, gameHeader);
};

brainCalc();

export default brainCalc;
