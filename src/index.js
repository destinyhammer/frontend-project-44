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

export const startGame = (functionName, playerName, gameHeader, rounds = 3) => {
  console.log(gameHeader || 'Header is not defined');
  for (let i = 1; i <= rounds; i += 1) {
    const currentQuestion = functionName();
    if (currentQuestion.indexOf('wrong') !== -1) {
      console.log(currentQuestion);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
    console.log(currentQuestion);
  }
  console.log(`Congratulations, ${playerName}!`);
  return true;
};

export const checkAnswer = (answer, rightAnswer) => {
  if (answer === rightAnswer) {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};
