let player = {
  name: "Jayden",
  chips: 0
}

let firstNum = getRandomCard();
let secondNum = getRandomCard();
let sum = firstNum + secondNum;
let cards = [firstNum, secondNum];
let message = "";

let promptEl = document.querySelector(".prompt");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#players-card");

let blackJack = false;
let isAlive = false;


playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
  renderGame();
  isAlive = true;
}

function getRandomCard() {
  let cardNum = Math.floor(Math.random() * 13) + 1;
  if (cardNum < 2){
    return 1
  } else if (cardNum > 10) {
    return 10
  }
  else{
    return cardNum
  }
}


function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    blackJack = true;
    message = "You have Black Jack";
    
  } else {
    message = "You lost";
    isAlive = false;
  }
  promptEl.textContent = message;
}

function newCard() {
  if (isAlive === true && blackJack === false) {
    drawCard = getRandomCard();
    sum = sum + drawCard;
    cards.push(drawCard);
    console.log(cards);
    renderGame();
  }
}
