import {
  sayHello, startGame, checkAnswer, getRandomInt, getAnswer,
} from '../index.js';

const getProgression = () => {
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

const askProgressionQuestion = () => {
  const [question, rightAnswer] = getProgression();
  console.log(`Question: ${question}`);
  const answer = getAnswer();
  return checkAnswer(answer, rightAnswer);
};

const startBrainProgression = () => {
  const gameHeader = 'What number is missing in the progression?';

  const playerName = sayHello();

  startGame(askProgressionQuestion, playerName, gameHeader);
};

export default startBrainProgression;
