import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export const getRandomInt = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
  return result;
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const checkAnswer = (answer, rightAnswer) => {
  if (answer.toString() === rightAnswer.toString()) {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};

export const prepareYesNoQuestion = (minValue, maxValue, checkFunctionName) => () => {
  const number = getRandomInt(minValue, maxValue);

  const question = `Question: ${number}`;
  const rightAnswer = checkFunctionName(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export const startGame = (prepareQuestionFunction, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ') || 'Player';
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription || 'Description is not defined');
  for (let i = 1; i <= ROUNDS_COUNT; i += 1) {
    const [currentQuestion, currentRightAnswer] = prepareQuestionFunction();
    console.log(currentQuestion);
    const answer = getAnswer().trim();
    if (String(answer).toLowerCase() !== String(currentRightAnswer).toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentRightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
  return true;
};
