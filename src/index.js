import readlineSync from 'readline-sync';

export const getPlayerName = () => {
  const nameless = 'Player';
  return readlineSync.question('What is your name?: ') || nameless;
};

export const getRandomInt = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
  return result;
};

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
