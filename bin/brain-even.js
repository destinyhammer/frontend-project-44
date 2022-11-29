#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, startGame } from '../src/index.js';

const brainEven = () => {
  const gameHeader = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => number % 2 === 0;

  const checkAnswer = (number, answer) => {
    if (isEven(number)) {
      return answer.toLowerCase() === 'yes' ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was 'yes'.`;
    }
    return answer.toLowerCase() === 'no' ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was 'no'.`;
  };

  const askQuestion = () => {
    const number = getRandomInt(1, 100);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').trim();

    return checkAnswer(number, answer);
  };

  const playerName = greetings();

  startGame(askQuestion, playerName, gameHeader, 3);
};

brainEven();

export default brainEven;
