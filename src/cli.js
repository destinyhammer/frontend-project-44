import readlineSync from 'readline-sync';

export const getPlayerName = () => {
	const nameless = 'Player';
	return readlineSync.question(`What is your name?: `) || nameless;
};

export const getRandomInt = (min = 0, max = 100) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
