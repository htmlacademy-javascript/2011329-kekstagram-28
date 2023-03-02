// 1-я задача:

function validateStringLength (testingLine, maxLength) {
  return testingLine.length <= maxLength;
}

console.log(validateStringLength('html', 4));

// 2-я задача:

function isPalindrome(str){
  str = str.toLowerCase().replaceAll(' ', '');
  return str === str.split('').reverse().join('');
}

// 3-я задача:

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

console.log(extractNumber('2023 год'));

// 4-я задача:

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad
/ pad.length) + string;
};

console.log(myPadStart('1', 2, '0'));
console.log(myPadStart('1', 4, '0'));
console.log(myPadStart('q', 4, 'werty'));

