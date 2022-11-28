import readlineSync from 'readline-sync';

export const greetings = () => {
	const nameless = 'Player';
	const getUserName = readlineSync.question(`What is your name?: `) || nameless;
	console.log(`Hello, ${getUserName}!`);
	return getUserName;
};

export const getRandomInt = (min = 0, max = 100) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
