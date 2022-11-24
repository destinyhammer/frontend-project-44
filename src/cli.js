import readlineSync from 'readline-sync';

const greetings = () => {
	const getUserName = readlineSync.question(`What is your name?: `);
	console.log(`Hello, ${getUserName}!`);
};

export default greetings;