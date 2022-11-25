#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const brainEven = (playername = 'Player') => {
	const getRandomNumber = () => Math.round(Math.random() * 100);

	const isEven = (number, answer) => {
		const lowerAnswer = answer.trim().toLowerCase();
		let result = '';
		if (number % 2 === 0) {
			result = lowerAnswer === 'yes' ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was 'yes'.`;
		} else {
			result = lowerAnswer === 'no' ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was 'no'.`;
		}
		return result;
	};
	
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	
	for (let i = 1; i <= 3; i += 1) {
		const rand = getRandomNumber();
		console.log('Question:', rand);
		const answer= readlineSync.question(`Your answer: `);
		const out = isEven(rand, answer);
		console.log(out);
		if (out.indexOf('wrong') !== -1) {
			console.log(`Let's try again, ${playername}!`);
			return;
		}
	}
	console.log(`Congratulations, ${playername}!`);
};

brainEven(greetings());

export default brainEven;