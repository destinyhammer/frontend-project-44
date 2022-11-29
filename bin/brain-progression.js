#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt } from '../src/index.js';

const brainProgression = () => {
  const getProgression = () => {
    const progression = [];
    const elementsCount = getRandomInt(5, 10);
    const interval = getRandomInt(2, 5);
    const emptyElementIndex = getRandomInt(0, elementsCount - 1);
    let startElement = getRandomInt(1, 100);
    let deletedElement = 0;

    for (let i = 0; i < elementsCount; i += 1, startElement += interval) {
      if (i === emptyElementIndex) {
        progression.push('..');
        deletedElement = startElement;
      } else {
        progression.push(startElement);
      }
    }

    return [progression.join(' '), deletedElement];
  };

  const askQuestion = () => {
    const [question, rightAnswer] = getProgression();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();

    if (+answer === rightAnswer) {
      return 'Correct!';
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  };

  const playerName = greetings();
  console.log('What number is missing in the progression?');

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

brainProgression();

export default brainProgression;
