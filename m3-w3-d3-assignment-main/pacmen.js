const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(30); // {x:?, y:?}
  let position = setToRandom(21);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';


  // TODO add new Child image to game
  game.appendChild(/* TODO: add parameter */newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

// function update() {
//   // loop over pacmen array and move each one and move image in DOM
//   pacMen.forEach((item) => {
//     checkCollisions(item);
//     item.position.x += item.velocity.x;
//     item.position.y += item.velocity.y;

//     item.newimg.style.left = item.position.x;
//     item.newimg.style.top = item.position.y;
//   });
//   setTimeout(update, 25);
// }

function update() {
  // loop over pacmen array and move each one and update image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    // Move PacMan
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    // Animate PacMan by toggling between open and closed mouth images
    if (item.velocity.x > 0) { // Moving right
      item.newimg.src = item.newimg.src.includes('PacMan1') ? './images/PacMan2.png' : './images/PacMan1.png';
    } else { // Moving left
      item.newimg.src = item.newimg.src.includes('PacMan3') ? './images/PacMan4.png' : './images/PacMan3.png';
    }
    // Update image position in the DOM
    item.newimg.style.left = item.position.x + 'px';
    item.newimg.style.top = item.position.y + 'px';
  });
  // Call update every 25 milliseconds for a continuous loop
  setTimeout(update, 100);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  let maxWidth = window.innerWidth;
  let maxHeight = window.innerHeight;

  // Check for collision with right and left walls
  if (item.position.x + item.velocity.x + item.newimg.width >= maxWidth || item.position.x + item.velocity.x <= 0) {
    item.velocity.x = -item.velocity.x; // Reverse velocity to bounce off the wall
    if (item.velocity.x > 0) {
      item.newimg.src = './images/PacMan1.png'; // Change to right-facing image
    } else {
      item.newimg.src = './images/PacMan3.png'; // Change to left-facing image
    }
  }

  // Check for collision with bottom and top walls
  if (item.position.y + item.velocity.y + item.newimg.height >= maxHeight || item.position.y + item.velocity.y <= 0) {
    item.velocity.y = -item.velocity.y; // Reverse velocity to bounce off the wall
    // Change image source based on direction
    if (item.velocity.y > 0) {
      item.newimg.src = './images/PacMan2.png'; // Change to downward-facing image
    } else {
      item.newimg.src = './images/PacMan4.png'; // Change to upward-facing image
    }
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}

window.onload = function () {
  document.getElementById("addBtn").onclick = makeOne;
}