let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

// Example
function day2Part1() {
  let wallet;
  let walletNumber;
  let coffeeNumber = 3.99;

  // 1. ask the user for data
  wallet = prompt("How much is in your wallet?");
  // 2. convert the answer to a number
  walletNumber = Number(wallet);

  // 3. use a math expression with the > operator to say if the statements is true or false.
  messageParagraph.innerHTML = `Coffee costs $ ${coffeeNumber}. You have $ ${walletNumber}. You can afford coffee: ${walletNumber > coffeeNumber}`
  
}

part1.onclick = day2Part1;


function day2Part2() {
  let bank;
  let bankNumber;
  let carNumber = 5000;

  alert("Try it!");
  // Try it!
  // TODO: Prompt the user for how much in in their bank account. Convert it to a number.
  // 1. Ask the user for data
bank = prompt("Who do you bank with?");
  // 2. convert it to a number
  bankNumber = prompt("How much do you have in your savings account?");
  
 // 3. use a math expression with the > operator to say if the statements is True or False.
  messageParagraph.innerHTML = `The car costs $ ${carNumber}. You have $ ${bankNumber} in your bank. You can afford the car: ${bankNumber > carNumber}`
  
}
part2.onclick = day2Part2;


function day2Part3() {
  let wallet;
  let walletNumber;
  let tvNumber = 300;

  alert("Try it!");
  // Try it!
  // TODO: Prompt the user for how much in their wallet. Convert it to a number, and tell them true or false if they can buy a TV.
wallet = prompt("Do you have your bank card or credit card in your wallet?");
  // 1. Ask the user for data
walletNumber = prompt("How much credit do you have?");
  // 2. convert it to a number

messageParagraph.innerHTML = `The TV costs $ ${tvNumber}. You have $ ${walletNumber} in credit. Can you afford a TV?: ${walletNumber > tvNumber}`
  // 3. use a math expression with the > operator to say if the statements is true or false.


}
part3.onclick = day2Part3;


function day2Part4() {
  let bank4;
  let bankNumber4;
  let rocketNumber = 1000000;

  alert("Try it!");
  // Try it!
  // TODO: Prompt the user for how much in in their bank account. Convert it to a number, and tell them true or false if they can buy a rocket.
bank4 = prompt("Do you have a savings account?");
  // 1. Ask the user for data
bankNumber4 = prompt("How much is in your savings?");
  // 2. convert it to a number

messageParagraph.innerHTML = `Richard Branson charges $ ${rocketNumber} for a rocketride to the Moon. You have $ ${bankNumber4} in your savings. Will you be rocketing to the Moon with Sir Richard?: ${bankNumber4 >= rocketNumber}`
  // 3. use a math expression with the > operator to say if the statements is true or false.


}
part4.onclick = day2Part4;
