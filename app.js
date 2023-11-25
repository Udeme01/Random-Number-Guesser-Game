// Declare UI Vars...
const guessBtn = document.querySelector('#guessBtn');
const userInput = document.querySelector('#userInput');
const resultOutput = document.querySelector('#resultOutput')

// add event listeners...
guessBtn.addEventListener('click', guessNum);


// function declarations...
let randomNumber = Math.floor(Math.random() * 20000) + 1;
// console.log(randomNumber)

let attempts = 0;
function guessNum() {
  while(attempts <= 3) {
    // isNaN checks to see if the value the user parsed in is an actual number!...
    if(isNaN(userInput.value)) {
      resultOutput.innerHTML = `Invalid Input!`
      // I added breaks to my loop cos I was having an infinite loop and it was crashing my system!...
      break;
    } if(userInput.value == randomNumber) {
      resultOutput.innerHTML = `correct`
      // location.reload();
      break;
    } else if(userInput.value > randomNumber) {
      resultOutput.innerHTML = `too high!`
      break;
    } else {
      resultOutput.innerHTML = `too low!`
      break;
    }
  } attempts += 1;
  if(attempts == 4) {
    alert("you've exhausted your attempts! Only 3 attempts allowed!");
    location.reload();
  }
}