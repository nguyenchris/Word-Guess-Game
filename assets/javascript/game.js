// Initialize game object
drakeGame = {
  wordToPick: {
    passion_fruit: {
      album: "assets/images/Nothing_was_same.jpg",
      song: "assets/audio/03_Passionfruit.mp3"
    },
    in_my_feelings: {
      album: "assets/images/scorpion.jpg",
      song: "assets/audio/in_my _feelings.mp3"
    },
    fake_love: {
      album: "assets/images/Nothing_was_same.jpg",
      song: "assets/audio/fakelove.mp3"
    },
    jersey: {
      album: "assets/images/timetobealive.jpg",
      song: "assets/audio/jersey.mp3"
    },
    jumpman: {
      album: "assets/images/timetobealive.jpg",
      song: "assets/audio/jumpman.mp3"
    },
    scholarships: {
      album: "assets/images/timetobealive.jpg",
      song: "assets/audio/scholarships.mp3"
    },
    shot_for_me: {
      album: "assets/images/takecare.jpg",
      song: "assets/audio/shotforme.mp3"
    },
    hold_on_were_going_home: {
      album: "assets/images/Nothing_was_same.jpg",
      song: "assets/audio/goinghome.mp3"
    },
    nice_for_what: {
      album: "assets/images/scorpion.jpg",
      song: "assets/audio/niceForWhat.mp3"
    },
    one_dance: {
      album: "assets/images/views.jpg",
      song: "assets/audio/onedance.mp3"
    },
    controlla: {
      album: "assets/images/views.jpg",
      song: "assets/audio/controlla.mp3"
    },
    show_me_a_good_time: {
      album: "assets/images/thankmelater.jpg",
      song: "assets/audio/showmeagoodtime.mp3"
    },
    come_thru: {
      album: "assets/images/Nothing_was_same.jpg",
      song: "assets/audio/comethru.mp3"
    },
    know_yourself: {
      album: "assets/images/toolate.jpg",
      song: "assets/audio/knowyourself.mp3"
    },
    find_your_love: {
      album: "assets/images/thankmelater.jpg",
      song: "assets/audio/findyourlove.mp3"
    },
    gods_plan: {
      album: "assets/images/scorpion.jpg",
      song: "assets/audio/godsplan.mp3"
    },
    crew_love: {
      album: "assets/images/takecare.jpg",
      song: "assets/audio/crewlove.mp3"
    },
    pound_cake_paris_morton_music: {
      album: "assets/images/Nothing_was_same.jpg",
      song: "assets/audio/poundcake.mp3"
    }
  },

  songsToArr: [],
  guessedLettersArr: [],
  letters: [],
  wordToGuess: null,
  wordToGuessObj: {},
  wordToGuessArr: [],
  guessesLeft: 8,
  matchedLetters: [],
  songsPlayed: [],
  wins: 0,
  losses: 0,

  genWordToPick: function() {
    //create array of the object wordToPick containing song objects that are all within the drakeGame object
    this.songsToArr = Object.keys(this.wordToPick);

    // choose random song from the array and assign to wordToGuess property
    this.wordToGuess = this.songsToArr[
      Math.floor(Math.random() * this.songsToArr.length)
    ];

    // assign property wordToGuessObj in order to later select the properties of the random song's object properties
    this.wordToGuessObj = this.wordToPick[this.wordToGuess];

    // now that the random song is chosen, check to see if it has already been played yet
    this.checkIfPlayed();
  },

  checkIfPlayed: function() {
    // check if the song has been played already by seeing if the song is in the songsPlayed array
    if (this.songsPlayed.indexOf(this.wordToGuess) == -1) {
      // if it hasn't, add the song to the songsPlayed array
      this.songsPlayed.push(this.wordToGuess);
      // separate the wordToGuess string between every character and assign it to wordToGuessArr property
      this.wordToGuessArr = this.wordToGuess.split("");
      this.setupGame();
    } else {
      // if the song has already played, generate another random song
      this.genWordToPick();
    }
  },

  setupGame: function() {
    // loop through array of letters from the wordToGuessArr and display the empty boxes on the game page
    for (i = 0; i < this.wordToGuessArr.length; i++) {
      // create empty divs for the letter boxes to display
      var node = document.createElement("li");
      var textnode = document.createTextNode("");
      node.appendChild(textnode);

      // determine if the word to guess has any spaces
      if (this.wordToGuessArr[i] == "_") {
        // If so, add classes for style with the hiddenDIV class which hides the empty box from the game page
        document.querySelector(".letterDisplay").appendChild(node).classList.add("letterBox", "hiddenDIV");
      } else {
        // If no space, display the box with the class that styles the box. Also add the index of the letter from the wordToGuess array to each div as an html class in order to determine which letter will go in the box when the user enters the correct letter
        document.querySelector(".letterDisplay").appendChild(node).classList.add("letterBox", "letterInBox" + i);
      }
    }

    // loop through the wordToGuessArr and insert the '_' into the matchedLetters array to prevent the user having to enter the '_' when playing the game in order to win
    for (j = 0; j < this.wordToGuessArr.length; j++) {
      if (this.wordToGuessArr[j] == "_") {
        this.matchedLetters.push("_");
      }
    }

    // play the song in background depending on which random song/word is chosen
    var x = document.getElementById("myAudio");
    x.src = this.wordToGuessObj.song;
    x.controls = false;
    x.currentTime = 20;
    x.play();

    // display album art
    document.querySelector(".album-art").src = this.wordToGuessObj.album;
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
            document.querySelector(".letterInBox" + i).textContent = letter;

            // add letter to array of matched letters
            this.matchedLetters.push(letter);
          }
        }
        this.checkGame();
      }
    } else {
      // add incorrect guessed letter to array of guessed letters
      this.guessedLettersArr.push(letter);
      this.guessesLeft--;
      this.updateGame();
      this.checkGame();
    }
  },

  checkGame: function() {
    // if length of matched letters array matches the word to guess array then..
    if (this.matchedLetters.length == this.wordToGuessArr.length) {
      // add a point to wins
      this.wins++;
      // display text indicating the user guessed correctly and restart game
      this.guessedCorrect();
    }

    // if there are no more guesses left..
    if (this.guessesLeft == 0) {
      // point added to losses
      this.losses++;
      // update page on HTML
      this.updateGame();
      // display that the user guessed incorrect and restart the game
      this.guessedIncorrect();
    }
  },

  alreadyGuessed: function() {
    // display on page that they already guessed that letter
    var x = document.querySelector(".alreadyGuessed");
    x.style.display = "block";
    x.textContent = "You already guessed that!";
    setTimeout(function() {
      x.style.display = "none";
    }, 600);
  },

  guessedCorrect: function() {
    // display on page that they guessed the word correctly
    var x = document.querySelector(".alreadyGuessed");
    x.style.display = "block";
    x.textContent = "You guessed the word right!";
    setTimeout(function() {
      x.textContent = "Now onto the next song...good luck!";
    }, 1000);
    setTimeout(function() {
      x.style.display = "none";
      drakeGame.restartGame();
    }, 2000);
  },

  guessedIncorrect: function() {
    // display on page that they guessed the word incorrectly
    var x = document.querySelector(".alreadyGuessed");
    x.style.display = "block";
    x.textContent = "Aw, you guessed that song wrong...better luck next time!";
    setTimeout(function() {
      x.textContent = "Now onto the next song...you got this!";
    }, 1500);
    setTimeout(function() {
      x.style.display = "none";
      drakeGame.restartGame();
    }, 2000);
  },

  updateGame: function() {
    document.querySelector("#remainingGuess").textContent = this.guessesLeft;
    document.querySelector("#wins").classList.add("animation", "fadeIn");
    document.querySelector("#wins").textContent = this.wins;
    document.querySelector("#losses").textContent = this.losses;
    document.querySelector("#lettersGuessed").textContent = this.guessedLettersArr.join(", ");
  },

  genLettersArr: function(charA, charZ) {
    // create all letters from a to z in an array to prevent non-letter keys being considered a guess
    var a = charA.charCodeAt(0);
    var z = charZ.charCodeAt(0);
    for (; a <= z; a++) {
      this.letters.push(String.fromCharCode(a));
    }
    return this.letters;
  },

  gameOver: function() {
    this.updateGame();
    // remove game page elements besides scoreboard, header, and footer
    var rows = document.querySelectorAll(".row");
    for (i = 0; i < rows.length; i++) {
      rows[i].style.display = "none";
    }

    var gameEnd = document.querySelector(".gameOver");
    gameEnd.style.display = "block";

    if (this.wins > this.losses) {
      gameEnd.textContent = "You won!";
    } else if (this.wins == this.losses) {
      gameEnd.textContent = "Dang, you tied!";
    } else {
      gameEnd.textContent = "You Lost :/";
    }
  },

  restartGame: function() {
    // check if all songs have been played
    if (this.songsPlayed.length === this.songsToArr.length) {
      // if so, display game over page
      this.gameOver();

      // if not, reset guesses and matched letters
    } else {
      this.guessedLettersArr = [];
      this.guessesLeft = 8;
      this.matchedLetters = [];

      // remove letter boxes on game page
      var boxes = document.querySelector(".letterDisplay");
      while (boxes.hasChildNodes()) {
        boxes.removeChild(boxes.firstChild);
      }
      // update game page and generate new word to guess
      this.updateGame();
      this.genWordToPick();
    }
  }
};



// click event listener for start button in order to render game page
document.querySelector(".splash-btn").addEventListener("click", splash);

// render HTML to show game page with directions after user clicks play button from splash page
function splash() {
  document.querySelector(".splash").classList.add("animation", "fadeOut", "hide");
  document.querySelector(".game-page").classList.add("animation", "fadeIn", "active");
  keyStart();
}

// keyup event listener for when user presses any key to start the game
function keyStart() {
  document.addEventListener("keyup", gameStart);
}

function gameStart() {
  //remove the keyStart function which contains the event listener in order to prevent 2 keyup event listeners on document
  document.removeEventListener("keyup", gameStart);
  // display actual game on HTML and remove directions from game page
  document.querySelector(".game-start").classList.add("animation", "fadeIn", "active");
  document.querySelector(".directions").style.display = "none";

  // intialize game by generating the random word to guess and letters that will be available as guesses
  drakeGame.genWordToPick();
  drakeGame.genLettersArr("a", "z");

  // listen for keyup events
  document.addEventListener("keyup", function(e) {
    var key = e.key;

    // check if key that is pressed is a letter. If so, use the letter that is pressed for the checkGuess function
    if (drakeGame.letters.indexOf(key) !== -1) {
      drakeGame.checkGuess(key);
    }
  });
}
