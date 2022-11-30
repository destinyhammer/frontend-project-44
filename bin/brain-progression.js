#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings, getRandomInt, startGame, checkAnswer,
} from '../src/index.js';

const brainProgression = () => {
  const gameHeader = 'What number is missing in the progression?';
  const getProgression = () => {
    const progression = [];
    const elementsCount = getRandomInt(5, 10);
    const interval = getRandomInt(2, 7);
    const emptyElementIndex = getRandomInt(0, elementsCount - 1);
    let currentElement = getRandomInt(1, 100);
    for (let i = 0; i < elementsCount; i += 1, currentElement += interval) {
      if (i === emptyElementIndex) {
        progression.push('..');
      } else {
        progression.push(currentElement);
      }
    }
    return [progression.join(' '), progression[emptyElementIndex - 1] + interval];
  };

  const askQuestion = () => {
    const [question, rightAnswer] = getProgression();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();
    return checkAnswer(answer, rightAnswer);
  };

  const playerName = greetings();
  startGame(askQuestion, playerName, gameHeader);
};

brainProgression();
export default brainProgression;
