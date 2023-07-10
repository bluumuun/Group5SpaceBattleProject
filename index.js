// class Ship {
//     constructor (shiphull, firepower, accuracy){
//         this.shiphull = shiphull
//         this.firepower = firepower
//         this.accuracy = accuracy
//     }
//     fire(target){
//         if(Math.random() < this.accuracy){
//             target.shiphull -= this.firepower;
//         }
//     }
// }

// const Maverick = new Ship(20, 5, .7)
// console.log(Maverick);

// // creating sub class extending from parent class and changing the values of the same parameters
// // class Aliens extends Ship {
// //     constructor(){
// //         super(Math.floor(Math.random()*(7-3))+3, Math.floor(Math.random()*(5-2))+2, (Math.random()*(.8-.6))+.6);
// //     }
// // }

// // creating another class with the same parameters but different values
// class Aliens {
//     constructor () {
//         this.ships = []
//     }
//     addAliens (){
//         this.shiphull = Math.round(Math.random()*(6-3) + 3) // enemy hull is between 3 and 6
//         this.firepower = Math.round(Math.random()*(4-2) + 2) // enemy firepower is between 2 and 4
//         this.accuracy = Math.round(Math.random()*(.12 - .6) + .2) //enemy accuracy is between .6 and .8
//         this.ships.push (new Ship (this.shiphull, this.firepower, this.accuracy));
//     }
// }

// let enemyAliens = new Aliens

// enemyAliens.addAliens();
// enemyAliens.addAliens();
// enemyAliens.addAliens();
// enemyAliens.addAliens();

// console.log(enemyAliens);


// // attack
// const attackAliens = () =>{
//     let enemyFleet = enemyAliens.ships;
//     for(let i=0; i<enemyAliens.ships.length; i++){
//         // need to check if our ship is destoryed, if destroyed game OverconstrainedError, if not keep fighting
//         if (Maverick.shiphull <=0) {
//             console.log("Game Over, your ship has been destroyed")
//             break;
//         }
//         while (Maverick.shiphull > 0 || enemyFleet[i].shiphull > 0) {
//             if (Math.random() < Maverick.accuracy){
//                 enemyAliens.ships[i].shiphull = enemyAliens.ships[i].shiphull - Maverick.firepower
//             }
//             // need to check if enemy alien ship is destoryed, if yes then break and go to the next ship and restart battle
//             if(enemyAliens.ships[i].shiphull <= 0){
//                 console.log("enemy alien has been destroyed");
//                 break;
//             }

//             if (Math.random() < enemyAliens.ships[i].accuracy){
//                 Maverick.shiphull = Maverick.shiphull - enemyAliens.ships[i].firepower
//             }
//             if (Maverick.shiphull <= 0){
//                 console.log("Game over, your ship has been destroyed")
//                 break;
//             }
//         }
//     }
// }

// attackAliens() 
// console.log(Maverick);

// var startButton = document.getElementById('startButton');
//          startButton.addEventListener('click', function(attackAliens) {
//         console.log('Button clicked!');
//         });
class Ship {
    constructor(shiphull, firepower, accuracy) {
      this.startingShipHull = shiphull; // Store the starting ship hull value
      this.shiphull = shiphull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
    fire(target) {
      if (Math.random() < this.accuracy) {
        target.shiphull -= this.firepower;
      }
    }
  }
  const BlueGiant = new Ship(20, 5, 0.7);
  function getRandomFirepower() {
    return Math.round(Math.random() * (4 - 2) + 2);
  }
  function getRandomAccuracy() {
    return Math.round((Math.random() * (0.81 - 0.6) + 0.6) * 10) / 10;
  }
  class Invaders {
    constructor() {
      this.ships = [];
    }
    addInvaders() {
      const shiphull = Math.round(Math.random() * (6 - 3) + 3);
      const firepower = Math.round(Math.random() * (4 - 2) + 2);
      const accuracy = Math.round((Math.random() * (0.81 - 0.6) + 0.6) * 10) / 10;
      this.ships.push(new Ship(shiphull, firepower, accuracy));
    }
  }
  let enemyInvaders = new Invaders();
  const attackInvaders = () => {
    let enemyFleet = enemyInvaders.ships;
    for (let i = 0; i < enemyFleet.length; i++) {
      if (BlueGiant.shiphull <= 0) {
        console.log("Game Over, Your Ship Has Been Taken Out");
        return;
      }
      while (BlueGiant.shiphull > 0 && enemyFleet[i].shiphull > 0) {
        if (Math.random() < BlueGiant.accuracy) {
          enemyFleet[i].shiphull -= BlueGiant.firepower;
        }
        if (enemyFleet[i].shiphull <= 0) {
          console.log("Yayyyy You've Taken Out The Invaders!");
          enemyFleet.splice(i, 1); // Remove destroyed enemy ship from the fleet
          break;
        }
        if (Math.random() < enemyFleet[i].accuracy) {
          BlueGiant.shiphull -= enemyFleet[i].firepower;
        }
        if (BlueGiant.shiphull <= 0) {
          console.log("Game Over, Your Ship Has Been Taken Out");
          return;
        }
      }
    }
  };
  document.getElementById("start").addEventListener("click", startGame);
  function startGame() {
    enemyInvaders = new Invaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    enemyInvaders.addInvaders();
    console.log(enemyInvaders);
    let shipimg = document.createElement("img");
    shipimg.src = "image/USS_ship.png";
    document.querySelector("#Ship > div").appendChild(shipimg);
  }
  document.getElementById("start").addEventListener("click", battle);
  function battle() {
    document.getElementById("Ship").innerHTML = "";
    let shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");
    document.getElementById("Ship").appendChild(shipContainer);
    let shipimg = document.createElement("img");
    shipimg.src = "image/uss_ship.png";
    document.getElementById("Ship").append(shipimg);
    for (let i = 0; i < enemyInvaders.ships.length; i++) {
      let invadersimg = document.createElement("img");
      invadersimg.src = "images/enemy_ship_dead.png";
      document.getElementById("Ship").append(invadersimg);
    }
    let initialShipHull = BlueGiant.startingShipHull; // Use the starting ship hull value
    while (BlueGiant.shiphull > 0 && enemyInvaders.ships.length > 0) {
      BlueGiant.accuracy = getRandomAccuracy(); // Update ship accuracy before each attack
      attackInvaders();
    }
    if (BlueGiant.shiphull > 0) {
      let victoryText = document.createElement("p");
      victoryText.textContent = "Yayyyy You've Taken Out The Invaders!";
      victoryText.style.color = "blue";
      victoryText.style.fontSize = "50px";
      document.getElementById("Ship").appendChild(victoryText);
    } else {
      let gameOverText = document.createElement("p");
      gameOverText.textContent = "Game Over, Your Ship Has Been Taken Out";
      gameOverText.style.color = "red";
      gameOverText.style.fontSize = "50px";
      document.getElementById("Ship").appendChild(gameOverText);
    }
    let startHullText = document.createElement("p");
    startHullText.textContent = "Start Ship Hull: " + initialShipHull;
    startHullText.style.color = "white";
    startHullText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(startHullText);
    let shipAccuracyText = document.createElement("p");
    shipAccuracyText.textContent = "Ship Accuracy: " + BlueGiant.accuracy;
    shipAccuracyText.style.color = "white";
    shipAccuracyText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(shipAccuracyText);
    let shipFirepowerText = document.createElement("p");
    shipFirepowerText.textContent = "Ship Firepower: " + BlueGiant.firepower;
    shipFirepowerText.style.color = "white";
    shipFirepowerText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(shipFirepowerText);
    let endHullText = document.createElement("p");
    endHullText.textContent = "End Ship Hull: " + BlueGiant.shiphull;
    endHullText.style.color = "white";
    endHullText.style.fontSize = "16px";
    document.getElementById("Ship").appendChild(endHullText);
    console.log(BlueGiant);
    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", restartGame);
    document.getElementById("Ship").appendChild(restartButton);
  }
  function restartGame() {
    BlueGiant.shiphull = BlueGiant.startingShipHull;
    enemyInvaders = new Invaders();
    document.getElementById("Ship").innerHTML = "";
    startGame();
  }
  startGame();
