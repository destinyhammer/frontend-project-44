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
      progression.push(currentElement);
    }
    const deletedElement = progression.splice(emptyElementIndex, 1, '..');
    return [progression.join(' '), deletedElement[0]];
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
