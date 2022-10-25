'use strict';

console.log('hello world');

let visitorName = prompt('what is your name?');

alert(`welcome to my site ${visitorName}! Please answer yes or no to the following question.`);

let questionOneGuess = prompt('do i have pets?').toUpperCase();
if (questionOneGuess === 'YES' || questionOneGuess === 'Y') {
  alert('correct!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('incorrect, i have 2 cats.');
}

alert(`thanks for playing, ${visitorName}. thank for coming to my site`);
