drakeGame = {
  wordToPick: {
    passion_fruit: {
      name: 'passionfruit',
      album: '../images/Nothing_was_same.jpg',
      song: '../audio/03_Passionfruit.mp3'
    },
  
    in_my_feelings: {
      name: 'inmyfeelings',
      album: '../assets/scorpion.jpg'
    }
  },

  guessedLettersArr: [],
  spacesArr: [],
  wordToGuess: null,
  wordToGuessObj: '',
  wordToGuessStr: '',
  wordToGuessArr: [],
  guessedLetter: null,
  guessesLeft: 10,
  wins: 0,
  losses: 0,


  genWordToPick: function() {
    //create array of the object wordToPick containing song objects that are all within the drakeGame object
    var songsToArr = Object.keys(this.wordToPick);

    // choose random song from the array and assign to wordToGuess property
    this.wordToGuess = songsToArr[Math.floor(Math.random() * songsToArr.length)];


    // split word into individual characters and create an array by assigning it to the wordToGuessArr
    this.wordToGuessArr = this.wordToGuess.split('');


    // looper through wordToGuessArr to create the string of the array
    for (l = 0; l < this.wordToGuessArr.length; l++) {
      this.wordToGuessStr += this.wordToGuessArr[l];
    }

    // set property wordToGuessObj in order to later call the properties of the random song's object properties in other functions
    this.wordToGuessObj = this.wordToPick[this.wordToGuessStr];


    this.setupGame();



    // loop through the new array that has no underscores with this selector:
    // document.querySelectorAll('.letterInBox').classList.add('i')
    


      // determine if the word to guess has any spaces. If so, add classes for style including the index number and the hiddenDIV class which hides the box from the game page. If not, display the box without the class that styles the box

      /////////////// Instead of adding the i (index) after determining the empty boxes and adding it to the dom, figure out a way to take out the underscores to make a new array for the word to guess and then assign the classes for the index after creating these empty boxes
  },



  setupGame: function() {
    // loop through array of letters from the wordToGuessArr and display the empty boxes on the game page
    for (i = 0; i < this.wordToGuessArr.length; i++) {

      /////////////// Instead of adding the i (index) after determining the empty boxes and adding it to the dom, figure out a way to take out the underscores to make a new array for the word to guess and then assign the classes for the index after creating these empty boxes

      var node = document.createElement('div');
      var textnode = document.createTextNode('');
      node.appendChild(textnode);


      // determine if the word to guess has any spaces. If so, add classes for style with the hiddenDIV class which hides the box from the game page. If not, display the box without the class that styles the box
      if (this.wordToGuessArr[i] == '_') {
        document.querySelector('.wordToGuessDisplay').appendChild(node).classList.add('letterBox', 'hiddenDIV');
      } else {
        document.querySelector('.wordToGuessDisplay').appendChild(node).classList.add('letterBox', 'letterInBox');
      }
    }



    //                  FIX THIS FIX FIX FIX FIX BELOW
    // **************** no longer need the 2 loops underneath now that I can select for the properties of the song objects using this.wordToGuessObj 


      // loop through all characters in the word to guess and if it has an underscore, add the index of the underscorto spacesArr
      for (j = 0; j < this.wordToGuessArr.length; j++) {
        if (this.wordToGuessArr[j] == '_') {
        this.spacesArr.push(j);
        }
      }

    // loop through the spacesArr backwards and remove the underscore from the wordToGuessArr. This is because if it were to loop forward, the index of the next underscore would no longer be at the same index
      for (k = this.spacesArr.length - 1; k >= 0; k--) {
        this.wordToGuessArr.splice(this.spacesArr[k], 1)
      }
  }
}


  // https://www.w3schools.com/jsref/prop_element_classlist.asp     refer to link to use contains(class) method in order to find if a <div> has class="hiddenDIV", if so, skip this and only insert letter into the respective letterBOX

  

drakeGame.genWordToPick();




// after song name is chosen, select wordToGuessDisplay and append child '<div class="letterBox">B</div>' by looping through whatever the length of the song name is. If there is a "_", then include class hiddenDIV for the appendchild method




  
  // event listener for start button in order to render game page
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



// event listener for when user presses any key to start the game
function keyStart() {
  document.addEventListener('keyup', gameStart);
}



function gameStart() {
  //remove the keyStart function which contains the event listener in order to prevent 2 event listeners on document
  document.removeEventListener('keyup', gameStart);
  // display album-art div on HTML and remove directions from game page
  document.querySelector('.info').classList.add('animation', 'fadeIn', 'active');
  document.querySelector('.directions').style.display = "none";



  // testing code for autoplay audio after click

//   var x = document.getElementById("myAudio");
// x.autoplay = true;
// x.load();
// x.controls = false;

///////////////////



  // listen for keyup events
  document.addEventListener('keyup', function(e) {
    var key = e.key
    document.querySelector('#lettersGuessed').innerHTML = key;
    console.log('key clicked');
  })
}


// function myFunction() {
//   var x = document.getElementById("myAudio").autoplay;
//   document.getElementById("demo").innerHTML = x;
// }




//  write code for after clicking play, directions are shown on left and then aftter clicking any key, they transition to the album art