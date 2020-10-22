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
function sumFoursAndSevens() {
  // Write your code here
}

// Question 7
function exsAndOhs() {
  // Write your code here
}

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
