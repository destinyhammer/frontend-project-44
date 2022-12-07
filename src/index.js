import readlineSync from 'readline-sync';

const roundsCount = 3;

export const getPlayerName = () => {
  const nameless = 'Player';
  return readlineSync.question('May I have your name? ') || nameless;
};

export const getRandomInt = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
  return result;
};

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const startGame = (AskQuestionFunction, playerName, gameHeader) => {
  console.log(gameHeader || 'Header is not defined');
  for (let i = 1; i <= roundsCount; i += 1) {
    const currentQuestion = AskQuestionFunction();
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
  if (answer.toString() === rightAnswer.toString()) {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};

export const askYesNoQuestion = (minValue, maxValue, checkFunctionName) => () => {
  const number = getRandomInt(minValue, maxValue);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').trim();
  const rightAnswer = checkFunctionName(number) ? 'yes' : 'no';

  return checkAnswer(answer.toLowerCase(), rightAnswer);
};

export const getAnswer = () => readlineSync.question('Your answer: ').trim();
