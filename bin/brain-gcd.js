#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings, getRandomInt, startGame, checkAnswer,
} from '../src/index.js';

const brainGcd = () => {
  const gameHeader = 'Find the greatest common divisor of given numbers.';
  const getBcd = (x, y) => {
    if (y > x) {
      return getBcd(y, x);
    }
    if (!y) {
      return x;
    }
    return getBcd(y, x % y);
  };

  const askQuestion = () => {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const question = `${x} ${y}`;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();
    const rightAnswer = getBcd(x, y);

    return checkAnswer(answer, rightAnswer);
  };

  const playerName = greetings();

  startGame(askQuestion, playerName, gameHeader, 3);
};

brainGcd();

export default brainGcd;
