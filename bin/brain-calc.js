#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const brainCalc = (playername = 'Player') => {
    const actions = ['+', '-', '*'];
    
    const getRandomInt = (min = 0, max = 100) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getRandomAction = () => {
        const max = actions.length;
        const actionIndex = getRandomInt(0, actions.length - 1);
        return actions[actionIndex];
    };

    const getCalculation = (firstNumber, secondNumber, action) => {
        switch(action) {
            case '+':
                return +firstNumber + +secondNumber;
            case '-':
                return +firstNumber - +secondNumber;
            case '*':
                return +firstNumber * +secondNumber;
            default:
                return +firstNumber + +secondNumber;
        }
    };

    const setQuestion = () => {
        const firstNumber = getRandomInt(0, 100);
        const secondNumber = getRandomInt(0, 10);
        const action = getRandomAction();
        const question = `${firstNumber} ${action} ${secondNumber}`;

        console.log(`Question: ${question}`);
        const answer = +readlineSync.question(`Your answer: `);
        const rightAnswer = getCalculation(firstNumber, secondNumber, action);

        if (answer === rightAnswer) {
            return 'Correct!';
        } else {
            return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
        }
    };

    console.log('What is the result of the expression?');

    for (let i = 1; i <= 3; i += 1) {
        const currentQuestion = setQuestion();
        if (currentQuestion.indexOf('wrong') !== -1) {
            console.log(currentQuestion);
            console.log(`Let's try again, ${playername}!`);
            return;
        }
        console.log(currentQuestion);
    }

    console.log(`Congratulations, ${playername}!`);

};

brainCalc(greetings());

export default brainCalc;