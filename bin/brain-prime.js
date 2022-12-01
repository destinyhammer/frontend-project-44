#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings, startGame, askQuestion,
} from '../src/index.js';

const brainPrime = () => {
  const gameHeader = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (number) => {
    for (let currentDivider = 2; currentDivider < number; currentDivider += 1) {
      if (number % currentDivider === 0) return false;
    }
    return true;
  };

  const question = askQuestion(2, 100, isPrime);

  const playerName = greetings();

  startGame(question, playerName, gameHeader);
};

brainPrime();

export default brainPrime;
