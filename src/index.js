import readlineSync from 'readline-sync';

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
  if (answer.toString() === rightAnswer.toString()) {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};

export const askQuestion = (minValue, maxValue, checkFunctionName) => () => {
  const number = getRandomInt(minValue, maxValue);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').trim();
  const rightAnswer = checkFunctionName(number) ? 'yes' : 'no';

  return checkAnswer(answer.toLowerCase(), rightAnswer);
};

export const getCalculation = (first, second, action) => {
  const firstNumber = Number(first);
  const secondNumber = Number(second);

  switch (action) {
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return firstNumber + secondNumber;
  }
};

export const isEven = (number) => number % 2 === 0;

export const getBcd = (x, y) => {
  if (y > x) {
    return getBcd(y, x);
  }
  if (!y) {
    return x;
  }
  return getBcd(y, x % y);
};

export const isPrime = (number) => {
  for (let currentDivider = 2; currentDivider < number; currentDivider += 1) {
    if (number % currentDivider === 0) return false;
  }
  return true;
};

export const getProgression = () => {
  const progression = [];
  const elementsCount = getRandomInt(5, 10);
  const interval = getRandomInt(2, 7);
  const emptyElementIndex = getRandomInt(0, elementsCount - 1);
  let currentElement = getRandomInt(1, 100);
  for (let i = 0; i < elementsCount; i += 1, currentElement += interval) {
    progression.push(currentElement);
  }
  const deletedElement = progression.splice(emptyElementIndex, 1, '..');
  return [progression.join(' '), deletedElement[0]];
};

export const getAnswer = () => readlineSync.question('Your answer: ').trim();
