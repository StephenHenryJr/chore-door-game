// Global Variables
'use strict';

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

// Variables containing images
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying = true;

// Function that checks and allows for door to be clicked only once
// Checks src of image to see if it is equal to the closed door image
// If it is, then that means it has never been clicked and therefore will be false
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;s
  };
};

// Function that checks if image is Bot images
// Checks image src and if equal to the Bot image it will return true
// The parameter 'door' will be equal to 1 of the 3 door image ID's
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

// Randomly selects our 3 images and placed them behind the door
// variable choreDoor is created and generates random number between 1 & 3
// choreDoor number then used in conditional statement to assign img to doors
const randomChoreDoorGenerator= () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else { (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
  };

// Opens Door On Click and checks how many doors have been opened
// If currentlyPlaying is still set to True and door has not been clicked
// cnt. it will set the door img to equal whatever is set for this door
// playDoor() will then run, reducing the number of closed doors and checking if you won or lost
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
}

};
door2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
};
door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
};

// Function that starts game when startButton is clicked
// If currentlyPlaying is false, startRound() will fire off
startButton.onclick = () => {
  if (currentlyPlaying === false) {
  startRound();
  };
};

// Simply resets game by setting all door img's back to the closed door img
// All other variables are reset
// randomChoreDoorGenerator() fired off to reset images behind doors
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

// Function will first reduce number of closed doors
// Function will then check if number of closed doors is 0 and you win 
// Function will then check if isBot() function evaluates to True and you lose
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0 ) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  };
};

// Function that checks if you won the game and updates button HTML
// status parameter will check if it's equal to win or lose
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
  startButton.innerHTML = 'Game over! Play again?';
  };
  currentlyPlaying = false;
};

startRound();
