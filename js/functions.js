function testLine ('проверяемая строка', 20) {
  if ('проверяемая строка' <= 20) {
    return true;
  }

  return false;
}

function isPalindrome(str){
  str = str.toLowerCase().replace(/\s/g, "");
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('Лёша на полке клопа нашёл '));


function numFromStr(str){
  return [...str].map(i => {if(isFinite(i) == true || i == "."){return i}else{return " "}}).join("").split(" ").filter(i => i != "").map(i => Number(i))
}

console.log(numFromStr('2023 год'));
