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
const doubled6roll1 = document.querySelector('#double-d6-roll-1');
doubled6roll1.src = 'images/d6/1.png';

const doubled6roll2 = document.querySelector('#double-d6-roll-2');
doubled6roll2.src = 'images/d6/1.png';

// d12 dice
const d12roll = document.querySelector('#d12-roll');
d12roll.src = 'images/start/d12.jpeg';

// d20 roll
const d20roll = document.querySelector('#d20-roll');
d20roll.src = 'images/start/d20.jpg';

// ** MEAN, MEDIAN, MODE **//
// d6
const d6rollMean = document.querySelector('#d6-rolls-mean');
const d6rollMedian = document.querySelector('#d6-rolls-median');
const d6rollMode = document.querySelector('#d6-rolls-mode');
d6rollMean.innerText = "NA";
d6rollMedian.innerText = "NA";
d6rollMode.innerText = "NA";

// double d6
const doubled6rollMean = document.querySelector('#double-d6-rolls-mean');
const doubled6rollMedian = document.querySelector('#double-d6-rolls-median');
const doubled6rollMode = document.querySelector('#double-d6-rolls-mode');
doubled6rollMean.innerText = "NA";
doubled6rollMedian.innerText = "NA";
doubled6rollMode.innerText = "NA";

// d12
const d12rollMean = document.querySelector('#d12-rolls-mean');
const d12rollMedian = document.querySelector('#d12-rolls-median');
const d12rollMode = document.querySelector('#d12-rolls-mode');
d12rollMean.innerText = "NA";
d12rollMedian.innerText = "NA";
d12rollMode.innerText = "NA";

// d20
const d20rollMean = document.querySelector('#d20-rolls-mean');
const d20rollMedian = document.querySelector('#d20-rolls-median');
const d20rollMode = document.querySelector('#d20-rolls-mode');
d20rollMean.innerText = "NA";
d20rollMedian.innerText = "NA";
d20rollMode.innerText = "NA";

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
