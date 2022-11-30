#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, startGame, checkAnswer } from '../src/index.js';

const brainProgression = () => {
  const gameHeader = 'What number is missing in the progression?';
  const getProgression = () => {
    const progression = [];
    const elementsCount = getRandomInt(5, 10);
    const interval = getRandomInt(2, 7);
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

    return checkAnswer(+answer, rightAnswer);
  };

  const playerName = greetings();
  startGame(askQuestion, playerName, gameHeader, 3);
};

brainProgression();

export default brainProgression;
