'use strict';

let username = prompt('Hello, What is your name?');
alert(`Thanks for stopping by my site, ${username}! If you are up for the challenge here are some questions!`);

function skyDiving() {
let Q1 = prompt('Have I ever been skydiving?').toUpperCase();
if (Q1 === 'YES' || Q1 === 'Y') {
  //console.log('Correct!');
  alert('Correct! It was a lot of fun.');
} else if (Q1 === 'NO' || Q1 === 'N') {
  //console.log('Incorrect!');
  alert('Incorrect! I have been skydiving');
  // score++;
} 
}
skyDiving();

function pets() {
let Q2 = prompt('Do I Have Any Pets?').toUpperCase();
if (Q2 === 'YES' || Q2 === 'Y') {
  //console.log('Correct! I have one cat.');
  alert('Correct! I have one cat');
} else if (Q2 === 'NO' || Q2 === 'N') {
  //console.log('Incorrect!');
  alert('Incorrect! I have 1 cat.');
  // score++;
}
}
pets();

function scubaDiving() {
let Q3 = prompt('Have I ever been scuba diving?').toUpperCase();
if (Q3 === 'YES' || Q3 === 'Y') {
  //console.log('Incorrect!');
  alert('Incorrect! But I do want to go.');
} else if (Q3 === 'NO' || Q3 === 'N') {
  //console.log('Correct!');
  alert('Correct! But I do want to go.');
  // score++;
}
}
 skyDiving();

function movie() {
let Q4 = prompt('Do I like the new Dune movie?').toUpperCase();
if (Q4 === 'YES' || Q4 === 'Y') {
  //console.log('Correct!');
  alert('Correct! I cannot get over how good it is!');
} else if (Q4 === 'NO' || Q4 === 'N') {
  //console.log('Incorrect');
  alert('Incorrect! It is amazing!');
  // score++;
}
}
movie();

function hungry() {
let Q5 = prompt('Am I hungry?').toUpperCase();
if (Q5 === 'YES' || Q5 === 'Y') {
  //console.log('Correct!');
  alert('Correct! Always!');
} else if (Q5 === 'NO' || Q5 === 'N') {
  //console.log('Incorrect!')
  alert('Incorrect! I am always hungry!');
  // score++;
}
}
hungry();

function guessNum() {
let myNum = Math.floor(Math.random() * 14) + 1;
let guesses = 4;

while (guesses > 0) {
  let guessNum = prompt('Im thinking of a number between 1 and 15, what number am I thinkning of?');
  if (guessNum > myNum) {
    alert('Too High');
    console.log('Too High');
  } else if (guessNum < myNum) {
    alert('Too Low');
    console.log('Too Low');
  } else if (parseInt(guessNum) === myNum) {
    alert('Correct');
    console.log('Correct');
    //score++;
    break;
  }
  guesses--;
  if (guesses === 0) {
    alert(`the correct answer was ${myNum}`);
  }
}
}
guessNum();

function music() {
let answers = ['panic at the disco', 'queen', 'george ezra', 'explosions in the sky', 'green day'];
let secGuesses = 6


for (let i = 0; i < 6; i++) {
  let guessBand = prompt('What are one of the bands I have listened to recently?').toLowerCase();
  if (guessBand === 'queen' || guessBand === 'panic at the disco' || guessBand === 'george ezra' || guessBand === 'explosions in the sky' || guessBand === 'green day') {
    alert('Correct');
    console.log('Correct');
    //score++;
    break;
  } else {
    alert('Incorrect');
    console.log('Incorrect');
  }
}
}
music();
 alert('Here were the correct answers, Panic At The Disco, Queen, George Ezra, Explosions In The Sky, and Green Day');

alert(`Thanks for stopping by and answering some questions! Have a great rest of your day ${username}!`);


// alert(score: ${ score } / 2');