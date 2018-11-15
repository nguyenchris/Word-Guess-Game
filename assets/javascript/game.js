
  
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



// render HTML to show game page with directions after user clicks start button from splash page
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

  var x = document.getElementById("myAudio");
x.autoplay = true;
x.load();
// x.controls = false;

///////////////////



  // listen for keyup events
  document.addEventListener('keyup', function() {
    console.log('key clicked');
  })
}


function myFunction() {
  var x = document.getElementById("myAudio").autoplay;
  document.getElementById("demo").innerHTML = x;
}




//  write code for after clicking play, directions are shown on left and then aftter clicking any key, they transition to the album art