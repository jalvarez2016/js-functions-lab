// Question 1
function hello(name) {
  return `Hello, ${name}!`;
}

// Question 2
function findProduct(x, y) {
  // Write your code here
  return x*y;
}
console.log(findProduct(3,5));
// Question 3
function getSquare(a) {
  //Write your code here
  return a * a;
}
console.log(getSquare(5));

// Question 4
function makeOpposite(num) {
  //Write your code here
  return -num;

  
}
console.log(makeOpposite(5));

// Question 5
function logEvenNumbers() {
  // Write your code here
  for(let i=0; i<=50; i+=2){
    console.log(i);
  }
  return "Why is 6 afraid of 7?";
}
console.log(logEvenNumbers());

// Question 6
function sumFoursAndSevens(num) {
  // Write your code here
  let sum = 0;
  for(let j=1; j <= num; j++){
    if(j%4===0 || j%7===0){
      sum += j
    }
  }
  return sum
}
console.log(sumFoursAndSevens(17));
// Question 7
function exsAndOhs(num) {
  // Write your code here
  let result = "";
  for(let i=0; i<num; i++){
    result += (i%2)?"O":"X";
  }
  return result;
}
console.log(exsAndOhs(7));

function weirdString(input){
  let result = "";
  for(let i=0; i<input.length; i++){
    let letter = input.charAt(i).toLowerCase();
    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
      continue;
    } else {
      result += letter;
    }
  }
  for(let i=0; i<result.length; i++){
    result = result.split("");
    let letter = result[i];
    result[i] = (i%2)?letter.toUpperCase():letter.toLowerCase();
    result = result.join("");
  }
  return result;
}
console.log(weirdString("hello world"));

function possibleSums(nums){
  let result = [];
  let stringVer = String(nums);
  nums = stringVer.split("").map((x)=> parseInt(x, 10));
  for(let i=0; i<nums.length; i++){
    let first = nums[i];
    for(let j=i+1; j < nums.length; j++){
      let second = nums[j];
      // console.log(first , second);
      result.push(first + second);
    }
  }
  return result;
}
console.log(possibleSums(12345));
// Do NOT touch or write anything below this line
module.exports = {
  hello,
  getSquare, 
  makeOpposite,
  logEvenNumbers,
  findProduct,
  sumFoursAndSevens,
  exsAndOhs,
};
