/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
// 1st dice
const d6roll = document.querySelector('#d6-roll');
d6roll.src = 'images/start/d6.png';

// Double d6 roll
const doubleD6roll1 = document.querySelector('#double-d6-roll-1');
doubleD6roll1.src = 'images/d6/1.png';

const doubleD6roll2 = document.querySelector('#double-d6-roll-2');
doubleD6roll2.src = 'images/d6/1.png';

//d12 dice
const d12roll = document.querySelector('#d12-roll');
d12roll.src = 'images/start/d12.jpeg';

//d20 roll
const d20roll = document.querySelector('#d20-roll');
d20roll.src = 'images/start/d20.jpg';

/*******************
 * EVENT LISTENERS *
 *******************/




/******************
 * RESET FUNCTION *
 ******************/

reset();
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
