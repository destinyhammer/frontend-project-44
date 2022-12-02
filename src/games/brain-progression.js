import {
  sayHello, startGame, checkAnswer, getProgression, getAnswer,
} from '../index.js';

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
