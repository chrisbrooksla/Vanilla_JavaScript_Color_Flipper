const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function (){
      // get random number between 0-3 (for the indexes of items in the array)
      const randomNumber = getRandomNumber();
      document.body.style.backgroundColor = colors[randomNumber];
      color.textContent = colors[randomNumber];
});

function getRandomNumber (){

      // this multiplies by the number of items in the "colors" array, in this case, 4.
      // Math.floor always rounds DOWN to the nearest integer
      // ex: 0.9 rounds down to 0
      // since Math.random won't ever get the final value of a whole number(ex: 1, 3, 4), 
      // by rounding down we will always get a number value between 0-3
      return Math.floor(Math.random() * colors.length);
}