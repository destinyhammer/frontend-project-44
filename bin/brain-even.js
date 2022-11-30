#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings, getRandomInt, startGame, checkAnswer,
} from '../src/index.js';

const brainEven = () => {
  const gameHeader = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => number % 2 === 0;

  const askQuestion = () => {
    const number = getRandomInt(1, 100);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').trim();
    const rightAnswer = isEven(number) ? 'yes' : 'no';

    return checkAnswer(answer.toLowerCase(), rightAnswer);
  };

  const playerName = greetings();

  startGame(askQuestion, playerName, gameHeader);
};

brainEven();

export default brainEven;
