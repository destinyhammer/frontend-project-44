import readlineSync from 'readline-sync';

const greetings = () => {
	const nameless = 'Player';
	const getUserName = readlineSync.question(`What is your name?: `) || nameless;
	console.log(`Hello, ${getUserName}!`);
	return getUserName;
};

export default greetings;