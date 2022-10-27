'use strict';

let username = prompt('Hello, What is your name?');
alert(`Thanks for stopping by my site, ${username}! If you are up for the challenge here are some questions!`);

let Q1 = prompt('Have I ever been skydiving?').toUpperCase();
if (Q1 === 'YES' || Q1 === 'Y') {
  //console.log('Correct!');
  alert('Correct! It was a lot of fun.');
} else if (Q1 === 'NO' || Q1 === 'N') {
  //console.log('Incorrect!');
  alert('Incorrect! I have been skydiving');
}

let Q2 = prompt('Do I Have Any Pets?').toUpperCase();
if (Q2 === 'YES' || Q2 === 'Y') {
  //console.log('Correct! I have one cat.');
  alert('Correct! I have one cat');
} else if (Q2 === 'NO' || Q2 === 'N') {
  //console.log('Incorrect!');
  alert('Incorrect! I have 1 cat.');
}

let Q3 = prompt('Have I ever been scuba diving?').toUpperCase();
if (Q3 === 'YES' || Q3 === 'Y') {
  //console.log('Incorrect!');
  alert('Incorrect! But I do want to go.');
} else if (Q3 === 'NO' || Q3 === 'N') {
  //console.log('Correct!');
  alert('Correct! But I do want to go.');
}

let Q4 = prompt('Do I like the new Dune movie?').toUpperCase();
if (Q4 === 'YES' || Q4 === 'Y') {
  //console.log('Correct!');
  alert('Correct! I cannot get over how good it is!');
} else if (Q4 === 'NO' || Q4 === 'N') {
  //console.log('Incorrect');
  alert('Incorrect! It is amazing!');
}

let Q5 = prompt('Am I hungry?').toUpperCase();
if (Q5 === 'YES' || Q5 === 'Y') {
  //console.log('Correct!');
  alert('Correct! Always!');
} else if (Q5 === 'NO' || Q5 === 'N') {
  //console.log('Incorrect!')
  alert('Incorrect! I am always hungry!');
}

let myNum = Math.floor(Math.random() * 15);
let guesses = 4;

while (guesses > 0) {
  let guessNum = prompt('Im thinking of a number between 1 and 15, what number am I thinkning of?');
  guesses--;
  if (guessNum > myNum) {
    alert('Too High');
  } else if (guessNum < myNum) {
    alert('Too Low');
  } else if (parseInt(guessNum) === myNum) {
    alert('Correct');
    break;
  }
}

let answers = ['panic at the disco', 'queen', 'george ezra', 'explosions in the sky', 'green day'];
let secGuesses = 6


for (let i = 0; i < 6; i++) {
  let guessBand = prompt('What are one of the bands I have listened to recently?');
  if (guessBand === 'queen' || guessBand === 'panic at the disco') {
    alert('correct');
    break;
  }
  else {
    alert('incorrect');
  }
}

alert('Here were the correct answers, Panic At The Disco, Queen, George Ezra, Explosions In The Sky, and Green Day');

alert(`Thanks for stopping by and answering some questions! Have a great rest of your day ${username}!`);