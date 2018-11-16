drakeGame = {
  wordToPick: {
    passionfruit: {
      name: 'passionfruit',
      album: '../images/Nothing_was_same.jpg',
      song: '../audio/03_Passionfruit.mp3'
    },
  
    in_my_feelings: {
      name: 'in_my_feelings',
      album: '../assets/scorpion.jpg'
    }
  },

  guessedLettersArr: [],
  wordToGuess: null,
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
    
    console.log(this.wordToGuessArr);


    for (i = 0; i < this.wordToGuessArr.length; i++) {
      if (this.wordToGuessArr[i] == '_') {
        var node = document.createElement('div');
        var textnode = document.createTextNode(this.wordToGuessArr[i]);
        node.appendChild(textnode);
        document.querySelector('.wordToGuessDisplay').appendChild(node).classList.add('letterBox', 'hiddenDIV')
      } else {
        var node = document.createElement('div');
        var textnode = document.createTextNode(this.wordToGuessArr[i]);
        node.appendChild(textnode);
        document.querySelector('.wordToGuessDisplay').appendChild(node).classList.add('letterBox')
      }
    }
  }


  
}

drakeGame.genWordToPick();




// after song name is chosen, select wordToGuessDisplay and append child '<div class="letterBox">B</div>' by looping through whatever the length of the song name is. If there is a "_", then include class hiddenDIV for the appendchild method






  
  // event listener for start button in order to render game page
  document.querySelector('.splash-btn').addEventListener('click', splash)


// document.addEventListener('keyup', function () {
//   document.querySelector('.splash').classList.add('animation', 'fadeOut', 'hide')
//   document.querySelector('.test').classList.add('animation', 'fadeIn', 'active');
//   start();
// })

// function start() {
//   document.addEventListener('keyup', function () {
//     console.log('key clicked');
//   })
// }



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