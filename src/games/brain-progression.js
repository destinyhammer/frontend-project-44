import {
  startGame, getRandomInt,
} from '../index.js';

const getProgression = (elementsCount, interval) => {
  const progression = [];
  let currentElement = getRandomInt(1, 100);
  for (let i = 0; i < elementsCount; i += 1, currentElement += interval) {
    progression.push(currentElement);
  }
  return progression;
};

const prepareProgressionQuestion = () => {
  const elementsCount = getRandomInt(5, 10);
  const interval = getRandomInt(2, 7);
  const progression = getProgression(elementsCount, interval);
  const emptyElementIndex = getRandomInt(0, progression.length - 1);
  const deletedElement = progression.splice(emptyElementIndex, 1, '..');
  const question = progression.join(' ');
  const [rightAnswer] = deletedElement;

  return [question, rightAnswer];
};

const startBrainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  startGame(prepareProgressionQuestion, gameDescription);
};

export default startBrainProgression;
