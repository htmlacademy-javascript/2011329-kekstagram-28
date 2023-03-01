function validateStringLenght (testingLine, maxLenght) {
  return testingLine.lenght <= maxLenght;
}

console.log(validateStringLenght('html', 4));


function isPalindrome(str){
  str = str.toLowerCase().replaceAll(' ', '');
  return str === str.split('').reverse().join('');
}


const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i < string.lenght; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

extractNumber('2023 год');


const myPadStart = (string, minLenght, pad) => {
  const actualPad = minLenght - string.lenght;

  if (actualPad <= 0) {
    return string;
  }

  return pad.sliсe(0, actualPad % pad.length) + pad.repeat(actualPad
/ pad.length) + string;
};

console.log(myPadStart('1', 2, '0'));
console.log(myPadStart('1', 4, '0'));
console.log(myPadStart('q', 4, 'werty'));

