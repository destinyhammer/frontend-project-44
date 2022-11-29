#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt } from '../src/index.js';

const brainGcd = () => {
  const getBcd = (x, y) => {
    if (y > x) {
      return getBcd(y, x);
    }
    if (!y) {
      return x;
    }
    return getBcd(y, x % y);
  };

  const setQuestion = () => {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const question = `${x} ${y}`;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();
    const rightAnswer = getBcd(x, y);

    if (+answer === rightAnswer) {
      return 'Correct!';
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  };

  const playerName = greetings();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const currentQuestion = setQuestion();
    if (currentQuestion.indexOf('wrong') !== -1) {
      console.log(currentQuestion);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log(currentQuestion);
  }

  console.log(`Congratulations, ${playerName}!`);
};

brainGcd();

export default brainGcd;
