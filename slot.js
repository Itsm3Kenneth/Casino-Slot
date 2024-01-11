let firstNum = "";
let secondNum = "";
let thirdNum = "";
let fourthNum = "";
let isSpin = false;

let slot = {
  first: document.querySelector(".slot-1"),
  second: document.querySelector(".slot-2"),
  third: document.querySelector(".slot-3"),
  fourth: document.querySelector(".slot-4"),
};

let alphabet = "ACIJKQ25789♥♠♣♦";

function randomLetter() {
  let result = "";
  let charLength = alphabet.length;
  for (let i = 0; i < 4; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * charLength)) + " ";
  }
  return result;
}

console.clear();

function slotSpin() {
  let text = randomLetter();
  let splitText = text.split(" ");
  firstNum = splitText[0];
  secondNum = splitText[1];
  thirdNum = splitText[2];
  fourthNum = splitText[3];
  slot.first.textContent = firstNum;
  slot.second.textContent = secondNum;
  slot.third.textContent = thirdNum;
  slot.fourth.textContent = fourthNum;
}

function spin() {
   let spinning = setInterval(slotSpin, 15);
   let timeOut = setTimeout(() => {
        clearInterval(spinning)
        clearTimeout(timeOut)
   }, 450);
}