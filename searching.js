'use strict';


//Linear Search

function lSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

//Binary Search

function binarySearch(array, value, start = 0, end = array.length) {
  let index = Math.floor((start + end) / 2);
  let middle = array[index];

  if (middle === value) {
    return index;
  } else if (middle < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (middle > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

//exercise1

let string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5 76 62';

let array = string.split(' ');
const arr = array.map(el => {
  return parseInt(el, 10);
});

console.log('linear search', lSearch(arr, 27));


//exercise 2
function compareNumbers(a, b) {
  return a - b;
}

const sorted = arr.sort(compareNumbers);

console.log('binary Search', binarySearch(sorted, 1));
