const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// hex colors consist of a hashtag, followed by a combination of numbers and letters, so we are going to set up a 
// loop that will generate random combinations.
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
      // this is just a variable that holds the hashtag
      let hexColor = '#';
      for(let i = 0; i < 6; i++){

            // returns hashtag followed by random combination based on the getRandomNumber function
            hexColor += hex[getRandomNumber()]
      }
      color.textContent = hexColor;
      document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
      return Math.floor(Math.random() * hex.length);
}