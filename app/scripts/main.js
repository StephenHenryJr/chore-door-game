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

// Function that checks if image is Bot images
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

// Function that checks and allows for door to be clicked only once
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  };
};

// Function that determines when all doors have been opened
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0 ) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  };
};

// Generates random number with conditional statement for placing images randomly behind doors
const randomChoreDoorGenerator= () => {
  choreDoor = Math.floor(Math.random() * numClosedDoors);
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
startButton.onclick = () => {
  if (currentlyPlaying === false) {
  startRound();
  };
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};


// Function that checks if you won the game and updates button HTML
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
  startButton.innerHTML = 'Game over! Play again?';
  };
  currentlyPlaying = false;
};

startRound();
