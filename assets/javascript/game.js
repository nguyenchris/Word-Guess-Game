
  
  document.querySelector('.splash-btn').addEventListener('click', splash)

// document.addEventListener('keyup', function () {
//   document.querySelector('.splash').classList.add('animation', 'fadeOut', 'hide')
//   document.querySelector('.test').classList.add('animation', 'fadeIn', 'active');
//   start();
// })

function start() {
  document.addEventListener('keyup', function () {
    console.log('key clicked');
  })
}

function splash() {
  document.querySelector('.splash').classList.add('animation', 'fadeOut', 'hide')
  document.querySelector('.game-page').classList.add('animation', 'fadeIn', 'active');
  start();
}