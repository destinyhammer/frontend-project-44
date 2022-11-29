#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt } from '../src/index.js';

const brainEven = () => {
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

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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

brainEven();

export default brainEven;
