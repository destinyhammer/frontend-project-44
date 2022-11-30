#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt, startGame, checkAnswer } from '../src/index.js';

const brainPrime = () => {
  const gameHeader = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (number) => {
    if (number < 1) {
      return false;
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const askQuestion = () => {
    const number = getRandomInt(2, 100);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').trim();
    const rightAnswer = isPrime(number) ? 'yes' : 'no';

    return checkAnswer(answer.toLowerCase(), rightAnswer);
  };

  const playerName = greetings();

  startGame(askQuestion, playerName, gameHeader, 3);
};

brainPrime();

export default brainPrime;
