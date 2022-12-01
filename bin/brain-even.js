#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings, startGame, askQuestion,
} from '../src/index.js';

const brainEven = () => {
  const gameHeader = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => number % 2 === 0;

  const question = askQuestion(1, 100, isEven);

  const playerName = greetings();

  startGame(question, playerName, gameHeader);
};

brainEven();

export default brainEven;
