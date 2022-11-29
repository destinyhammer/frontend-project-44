#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getRandomInt } from '../src/index.js';

const brainEven = () => {
	const isEven = (number) => number % 2 === 0;

	const checkAnswer = (number, answer) => {
		if (isEven(number)) {
			return answer.toLowerCase() === 'yes' ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was 'yes'.`;
		} else {
			return answer.toLowerCase() === 'no' ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was 'no'.`;
		}
	};

	const playerName = greetings();
	
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	
	for (let i = 1; i <= 3; i += 1) {
		const rand = getRandomInt();
		console.log('Question:', rand);
		const answer = readlineSync.question(`Your answer: `);
		const out = checkAnswer(rand, answer);		
		console.log(out);
		if (out.indexOf('wrong') !== -1) {
			console.log(`Let's try again, ${playerName}!`);
			return;
		}
	}
	console.log(`Congratulations, ${playerName}!`);
};

brainEven();

export default brainEven;