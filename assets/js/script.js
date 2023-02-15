//VARIABLE DECLARATIONS
var words = ["Denver", "Seattle", "Boston"];
//How do I randomly choose one of the words?
var randomNumber = Math.floor(Math.random() * words.length);
var word = words[randomNumber];
console.log(word);

var startButtonEl = document.querySelector(".start-button");
// console.log(startButtonEl);
var selectedWord = document.querySelector(".large-font word-blanks");

//return word should then populate in the div class "large-font word-blanks" by resetting that value to word
//NOTE: Should I create an array with the randomly generated word, that way I can hide/show each individual letter?

//event listener on "Start" button that will trigger random word generation and for the timer to start
startButtonEl.addEventListener("click", function () {
  var word = generateWord();
  var wordText = document.querySelector("#large-font word-blanks");

  wordText.value = word;
  //   console.log("This worked!");
});

//random word generation
function generateWord() {
  //   var randomWord = [];
  //   word = "";
  //   console.log(words.length);
  // iterate through the words array, using the for loop, math.floor and math.random to generate a random value from the array
  for (i = 0; i < words.length; i++) {
    randomWord[i] =
      selectedWord[Math.floor(Math.random() * selectedWord.length)];

    word += randomWord[i];
  }
  randomWord = [];
  return word;
}

//create an empty array, then use a for loop to iterate through
var finalWord = [];

//for each character that's entered by the user, check if that character is part of the random word selected. if yes, display the char in the DOM. If no, char is not displayed
//add event listener - keydown

//if all letters are guessed in time allotted, wins ++
//else, losses ++

//reset score should set both wins and losses back to zero
