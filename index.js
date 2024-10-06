let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('#check');
const resultText = document.querySelector('.resultText');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkResult(guessingNumber.value);
});

function checkResult(value) {
  const randomNumber = getRandomNumber(5);

  if (value == randomNumber) {
    resultText.innerHTML = `You have won`;
    totalWons++;
  } else {
    resultText.innerHTML = `You have lost;random number was:${randomNumber} `;
    totallosts++;
  }
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
