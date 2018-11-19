drakeGame = {
  wordToPick: {
    passion_fruit: {
      name: 'passionfruit',
      album: 'assets/images/Nothing_was_same.jpg',
      song: 'assets/audio/03_Passionfruit.mp3'
    },
  
    in_my_feelings: {
      name: 'inmyfeelings',
      album: 'assets/images/scorpion.jpg',
      song: 'assets/audio/in_my _feelings.mp3'
    }
  },

  guessedLettersArr: [],
  letters: [],
  wordToGuess: null,
  wordToGuessObj: {},
  wordToGuessArr: [],
  wordToGuessStr: null,
  guessedLetter: null,
  guessesLeft: 10,
  matchedLetters: [],
  songsPlayed: [],
  wins: 0,
  losses: 0,


  genWordToPick: function() {
    //create array of the object wordToPick containing song objects that are all within the drakeGame object
    var songsToArr = Object.keys(this.wordToPick);

    // choose random song from the array and assign to wordToGuess property
    this.wordToGuess = songsToArr[Math.floor(Math.random() * songsToArr.length)];

     // assign property wordToGuessObj in order to later call the properties of the random song's object properties in other functions
    this.wordToGuessObj = this.wordToPick[this.wordToGuess];

    this.checkIfPlayed();
     
    // split word into individual characters and create an array by assigning it to the wordToGuessArr
    // this.wordToGuessArr = this.wordToGuess.split('');
    // console.log(this.wordToGuessArr);


    // loop through wordToGuessArr to create the array into a string and assign it to wordToGuessStr
    // for (l = 0; l < this.wordToGuessArr.length; l++) {
    //   this.wordToGuessStr += this.wordToGuessArr[l];
    // }

    // this.setupGame();



    // loop through the new array that has no underscores with this selector:
    // document.querySelectorAll('.letterInBox').classList.add('i')
    


      // determine if the word to guess has any spaces. If so, add classes for style including the index number and the hiddenDIV class which hides the box from the game page. If not, display the box without the class that styles the box

      /////////////// Instead of adding the i (index) after determining the empty boxes and adding it to the dom, figure out a way to take out the underscores to make a new array for the word to guess and then assign the classes for the index after creating these empty boxes
  },

  checkIfPlayed: function() {
    if (this.songsPlayed.indexOf(this.wordToGuess) == -1) {
      this.songsPlayed.push(this.wordToGuess);
      this.wordToGuessArr = this.wordToGuess.split('');
      this.setupGame();
    } else {
      this.genWordToPick();
    }
  },



  setupGame: function() {
    // loop through array of letters from the wordToGuessArr and display the empty boxes on the game page
    for (i = 0; i < this.wordToGuessArr.length; i++) {

      // create empty divs for the letter boxes to display 
      var node = document.createElement('li');
      var textnode = document.createTextNode('');
      node.appendChild(textnode);


      // determine if the word to guess has any spaces. If so, add classes for style with the hiddenDIV class which hides the box from the game page. If not, display the box with the class that styles the box. Also add the index of the letter from the wordToGuess array to each div to determine which letter will go in the box when the user enters the correct letter
      if (this.wordToGuessArr[i] == '_') {
        document.querySelector('.letterDisplay').appendChild(node).classList.add('letterBox', 'hiddenDIV');
        
      } else {
        document.querySelector('.letterDisplay').appendChild(node).classList.add('letterBox', 'letterInBox' + i);
      }
    }

      // loop through the wordToGuessArr and insert the '_' into the matchedLetters array to prevent the user having to enter the '_' when playing the game in order to win
      for (j = 0; j < this.wordToGuessArr.length; j++) {
        if (this.wordToGuessArr[j] == '_') {
        this.matchedLetters.push('_')
        }
      }


    // var childDivs = document.querySelector('.wordToGuessDisplay').childNodes;
    // console.log(childDivs);
    // console.log(childDivs.length);
    // childDivs[1].classList.add('1');
    // console.log(childDivs[1].classList.contains('letterInBox'));


    // for (x = 0; x < childDivs.length; x++) {
    //   if (childDivs[x].classList.contains('letterInBox')) {
    //     childDivs[x].classList.add()
    //   }
    // }


    // play the song in background depending on which random song/word is chosen
    // var x = document.getElementById("myAudio");
    // x.src = this.wordToGuessObj.song;
    // x.play();
    // x.controls = false;

    // display album art
      document.querySelector('.album-art').src = this.wordToGuessObj.album;

    // x.contains()

    // for (m = 0; m < x.length; m++) {
    //   fast
    // }



    //                  FIX THIS FIX FIX FIX FIX BELOW
    // **************** no longer need the 2 loops underneath now that I can select for the properties of the song objects using this.wordToGuessObj 


      // loop through all characters in the word to guess and if it has an underscore, add the index of the underscorto spacesArr
      // for (j = 0; j < this.wordToGuessArr.length; j++) {
      //   if (this.wordToGuessArr[j] == '_') {
      //   this.spacesArr.push(j);
      //   }
      // }

    // loop through the spacesArr backwards and remove the underscore from the wordToGuessArr. This is because if it were to loop forward, the index of the next underscore would no longer be at the same index
      // for (k = this.spacesArr.length - 1; k >= 0; k--) {
      //   this.wordToGuessArr.splice(this.spacesArr[k], 1)
      // }
  },

  // create all letters from a to z in an array
  genLettersArr: function(charA, charZ) {
    var a = charA.charCodeAt(0) 
    var z = charZ.charCodeAt(0);
    for (; a <= z; a++) {
      this.letters.push(String.fromCharCode(a));
    }
    return this.letters;
  },

  checkGuess: function(letter) {

    // check if letter has already been guessed
    if (this.guessedLettersArr.indexOf(letter) !== -1) {
      // if it has, display "you already guessed that letter"
      this.alreadyGuessed();

      // if the letter is part of the word to guess..
    } else if (this.wordToGuessArr.indexOf(letter) !== -1) {

      if (this.matchedLetters.indexOf(letter) !== -1) {
        //if already matched, display that the letter has already been guessed
        this.alreadyGuessed();

      } else {
        // loop through the word to guess array and determine if the letter guessed is part of the word
        for (i = 0; i < this.wordToGuessArr.length; i++) {
          if (this.wordToGuessArr[i] == letter) {
            // select the class name based on the index of the word to guess array and display the letter in the letter box
            document.querySelector('.letterInBox' + i).textContent = letter;
          
            // add letter to array of mattched letters at the same index as the word to guess array
            this.matchedLetters.push(letter);
          }
        }
        console.log(this.matchedLetters);
        console.log(this.wordToGuessArr);
        this.checkGame();
      }
    } else {
      this.guessedLettersArr.push(letter);
      this.guessesLeft--
      document.querySelector('#lettersGuessed').textContent = this.guessedLettersArr.join(", ");
      document.querySelector('#remainingGuess').textContent = this.guessesLeft;
      this.checkGame();
    }

  },

  checkGame: function() {
    // if length of matched letters array matches the word to guess array then..
    if (this.matchedLetters.length == this.wordToGuessArr.length) {
      // add a point to wins
      this.wins++;
      this.guessedCorrect();
      
      // if there are no more guesses left..
    } 
    
    if (this.guessesLeft == 0) {
      // point added to losses and game restarts
      this.losses++;
      this.restartGame();
    }

  },

  alreadyGuessed: function() {
    var x = document.querySelector('.alreadyGuessed');
    x.style.display = 'block';
    x.textContent = 'You already guessed that!'
    setTimeout(function() { x.style.display = 'none' }, 1000);
  },

  guessedCorrect: function() {
    // display on page that they guessed the word correctly
    var x = document.querySelector('.alreadyGuessed');
    x.style.display = 'block';
    x.textContent = 'You guessed the word right!'
    setTimeout(function() {x.textContent = 'Now onto the next song...Get ready!' }, 1500);
    setTimeout(function() {x.style.display = 'none' }, 2500);
    setTimeout(this.restartGame(), 2600);
  },
 
  restartGame: function() {
    this.guessedLettersArr = [];
    this.guessesLeft = 10;
    this.matchedLetters = [];
    console.log(this.matchedLetters)

    document.querySelector('#remainingGuess').textContent = this.guessesLeft;
    document.querySelector('#wins').textContent = this.wins;
    document.querySelector('#losses').textContent = this.losses;
    document.querySelector('#lettersGuessed').textContent = this.guessedLettersArr;
    var boxes = document.querySelector('.letterDisplay')
      while (boxes.hasChildNodes()) {
        boxes.removeChild(boxes.firstChild);
      }
    this.genWordToPick();
  }
}
//     if (this.guessedLettersArr.indexOf(letter) == -1) {
//       guessedLettersArr.push(letter);
//     }
//   }
// }


  // https://www.w3schools.com/jsref/prop_element_classlist.asp     refer to link to use contains(class) method in order to find if a <div> has class="hiddenDIV", if so, skip this and only insert letter into the respective letterBOX




// after song name is chosen, select wordToGuessDisplay and append child '<div class="letterBox">B</div>' by looping through whatever the length of the song name is. If there is a "_", then include class hiddenDIV for the appendchild method

  
  // click event listener for start button in order to render game page
  document.querySelector('.splash-btn').addEventListener('click', splash)


// document.addEventListener('keyup', function () {
//   document.querySelector('.splash').classList.add('animation', 'fadeOut', 'hide')
//   document.querySelector('.test').classList.add('animation', 'fadeIn', 'active');
//   start();
// })



// render HTML to show game page with directions after user clicks play button from splash page
function splash() {
  document.querySelector('.splash').classList.add('animation', 'fadeOut', 'hide')
  document.querySelector('.game-page').classList.add('animation', 'fadeIn', 'active');
  keyStart();
}



// keyup event listener for when user presses any key to start the game
function keyStart() {
  document.addEventListener('keyup', gameStart);
}



function gameStart() {
  //remove the keyStart function which contains the event listener in order to prevent 2 keyup event listeners on document
  document.removeEventListener('keyup', gameStart);
  // display actual game on HTML and remove directions from game page
  document.querySelector('.game-start').classList.add('animation', 'fadeIn', 'active');
  document.querySelector('.directions').style.display = "none";


  drakeGame.genWordToPick();
  drakeGame.genLettersArr('a', 'z');
  // testing code for autoplay audio after click

//   var x = document.getElementById("myAudio");
// x.autoplay = true;
// x.load();
// x.controls = false;

///////////////////



  // listen for keyup events
  document.addEventListener('keyup', function(e) {
    var key = e.key
    // document.querySelector('#lettersGuessed').innerHTML = key;

    // check if key that is pressed is a letter. If so, use the letter that is pressed for the checkGuess function
    if (drakeGame.letters.indexOf(key) !== -1) {
      drakeGame.checkGuess(key);
      console.log('key clicked');
    }
  });
}


// function myFunction() {
//   var x = document.getElementById("myAudio").autoplay;
//   document.getElementById("demo").innerHTML = x;
// }




//  write code for after clicking play, directions are shown on left and then aftter clicking any key, they transition to the album art