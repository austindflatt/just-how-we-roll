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
doubled6roll1.src = 'images/start/d6.png';

const doubled6roll2 = document.querySelector('#double-d6-roll-2');
doubled6roll2.src = 'images/start/d6.png';

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
// d6
d6roll.addEventListener('click', function () {
  let roll = getRandomNumber(6);
  d6roll.src = "images/d6/" + roll + ".png";
  sixes.push(roll);
  // mean
  let d6Mean = mean(sixes).toFixed(2);
  d6rollMean.innerText = d6Mean;
  // median
  let d6Median = mean(sixes).toFixed(2);
  d6rollMedian.innerText = d6Median;

})
// double d6
doubled6roll1.addEventListener('click', function () {
  let roll = getRandomNumber(6);
  let roll2 = getRandomNumber(6);
  doubled6roll1.src = "images/d6/" + roll + ".png";
  doubled6roll2.src = "images/d6/" + roll2 + ".png";
  doubleSixes.push(roll);
  // mean
  let doubled6Mean = mean(doubleSixes).toFixed(2);
  doubled6rollMean.innerText = doubled6Mean;
  // median
  let d6doubleMedian = mean(doubleSixes).toFixed(2);
  doubled6rollMedian.innerText = d6doubleMedian;
})
doubled6roll2.addEventListener('click', function () {
  let roll = getRandomNumber(6);
  let roll2 = getRandomNumber(6);
  doubled6roll1.src = "images/d6/" + roll + ".png";
  doubled6roll2.src = "images/d6/" + roll2 + ".png";
  doubleSixes.push(roll);
  // mean
  let doubled6Mean = mean(doubleSixes).toFixed(2);
  doubled6rollMean.innerText = doubled6Mean;
  // median
  let d6doubleMedian = mean(doubleSixes).toFixed(2);
  doubled6rollMedian.innerText = d6doubleMedian;
})
// d12
d12roll.addEventListener('click', function () {
  let roll = getRandomNumber(12);
  d12roll.src = "images/numbers/" + roll + ".png";
  twelves.push(roll);
  // mean
  let d12Mean = mean(twelves).toFixed(2);
  d12rollMean.innerText = d12Mean;
  // median
  let d12Median = mean(twelves).toFixed(2);
  d12rollMedian.innerText = d12Median;
})
// d20
d20roll.addEventListener('click', function () {
  let roll = getRandomNumber(20);
  d20roll.src = "images/numbers/" + roll + ".png";
  twenties.push(roll);
  // mean
  let d20Mean = mean(twenties).toFixed(2);
  d20rollMean.innerText = d20Mean;
  // median
  let d20Median = mean(twenties).toFixed(2);
  d20rollMedian.innerText = d20Median;
})

/******************
 * RESET FUNCTION *
 ******************/
 const reset = document.querySelector('#reset-button');
 reset.addEventListener('click', function () {
   d6roll.src = 'images/start/d6.png';
   doubled6roll1.src = 'images/start/d6.png';
   doubled6roll2.src = 'images/start/d6.png';
   d12roll.src = 'images/start/d12.jpeg';
   d20roll.src = 'images/start/d20.jpg';
   d6rollMean.innerText = "NA";
   d6rollMedian.innerText = "NA";
   doubled6rollMean.innerText = "NA";
   doubled6rollMedian.innerText = "NA";
   d12rollMean.innerText = "NA";
   d12rollMedian.innerText = "NA";
   d20rollMean.innerText = "NA";
   d20rollMedian.innerText = "NA";
 });
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
function mean (str) {
  let mean = 0;
  for (let i = 0; i < str.length; i++) {
    mean += str[i];
  }
  let output = mean / str.length;
  return output;
}

function median (str) {
  const sorted = str.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}