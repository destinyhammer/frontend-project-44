import readlineSync from 'readline-sync';

const greetings = () => {
	const nameless = 'Nameless';
	const getUserName = readlineSync.question(`What is your name?: `) || nameless;
	console.log(`Hello, ${getUserName}!`);
};

export default greetings;