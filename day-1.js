let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  playerOne.superPower = prompt("What is your super power?");
 
// Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi-score of ${playerOne.hiScore} if you use your ${playerOne.superPower}?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  customer.city = prompt("What city do you reside in");
  

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}, ${customer.city}.`;
}
part2.onclick = day1Part2;

// Try it!
  // TODO: create a prompt to ask about a pet
function day1Part3() {
  let petOne = {};
  petOne.name = prompt("What is your pet's name?");
  petOne.type = prompt("What kind of pet is it?");
  petOne.breed = prompt("What breed is your pet?");

  
messageParagraph.innerHTML = 
  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `${petOne.name} is a great name! A ${petOne.type} is a great pet! Although, with a ${petOne.breed}, you have to be patient.`;
}

part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  let planetOne = {};
  planetOne.name = prompt("What planet would you travel to if possible?");
  planetOne.alien = prompt("What type of aliens do you imagine live on that planet?");
  planetOne.communicate = prompt("What language do you imagine that they communicate with?");

  messageParagraph.innerHTML = `A spaceship trip to ${planetOne.name} would be fun if ${planetOne.alien} existed and were friendly. Would you learn ${planetOne.communicate} to communicate with them?`;
  if (planetOne.communicate == telepathy) {
    alert("Beam me up!");
  }
}

part4.onclick = day1Part4;