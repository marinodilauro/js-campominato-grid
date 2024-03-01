// #region ||||| VARIABLES |||||


// Create a variable for the "Play" button DOM element

const playBtnElem = document.getElementById("play_btn");


// Create a variable for the "Reset" button DOM element

const resetBtnElem = document.getElementById("reset_btn");


// Create a variable for the header DOM element

const headerElem = document.getElementById("site_header");


// Create a variable for the grid DOM element

const containerMarkup = `<div id="game_container" class="d-flex flex-wrap"></div>`;


// Create a variable for the single grid element markup

let cellMarkup = `<div class="cell"></div>`;


// Create a variable to prevent generation of multiple grids after the first

let isPlaying = false;
console.log("Is playing: " + isPlaying);


// Create a variable for game over

let isGameOver = false;
console.log("Game Over: " + isGameOver);


// Create a variable for the maximum number of mushrooms to generate

const maxMushrooms = 16;


// Read the difficulty level
let cellsNumber = document.getElementById("input_game_difficulty").value;


// Create empty list for random numbers
let rndNumbersList = [];


// Create varaible for the number of cells clicked
let cellsClicked = 0;


// #endregion ||||| VARIABLES |||||



// Generate the grid on click of "Play" button

playBtnElem.addEventListener("click", function () {

  if (isPlaying) {

    const containerElem = document.getElementById("game_container");

    containerElem.remove();

    playGame();

  } else {

    playGame();
  }

});


// #region ||||| FUNCTIONS |||||

function playGame() {

  isPlaying = true;
  console.log("Is playing: " + isPlaying);

  isGameOver = false;
  console.log("Is game over: " + isGameOver);

  // Read the difficulty level
  let cellsNumber = document.getElementById("input_game_difficulty").value;

  // Generate 16 random numbers from 1 to 16 
  while (rndNumbersList.length < maxMushrooms) {

    const randomNumber = randomNumberGenerator(1, cellsNumber);

    if (!rndNumbersList.includes(randomNumber)) {
      rndNumbersList.push(randomNumber);
    }

  }
  console.log(rndNumbersList);

  // Create varaible for the number of cells clicked
  let clickedCells = "";

  // Generate grid container
  headerElem.insertAdjacentHTML("afterend", containerMarkup)

  // Generate grid with cells
  generateGrid("game_container", cellsNumber);


}

/**
 * Generate a grid of elements with the given class in the given container.
 * 
 * @param {string} htmlContainerID HTML id of the container in which to generate the grid
 * @param {number} difficultyLevel Level of difficulty (the number of cells to generate)
 * 
 */
function generateGrid(htmlContainerID, difficultyLevel) {

  const grid = document.getElementById(htmlContainerID);

  grid.classList.add("rounded");

  for (let i = 1; i <= difficultyLevel; i++) {

    const gridElement = generateGridElems("div", difficultyLevel, "cell", i);

    grid.insertAdjacentElement("beforeend", gridElement);

    addEventToElement(gridElement);

  };

}


/**
 * Generate a give HTML tag with size of 10% of the container.
 * Add a given CSS class to the tag.
 * Insert a progressive number at the center of the element from 1 to the give size (both included)
 * 
 * @param {string} htmlTag The HTML tag to generate
 * @param {number} size The size of the grid (to generate elements with a width of 10% of the container)
 * @param {string} cssClass CSS class of the cell element to make clickable
 * @param {number} numb The number of elements to generate
 * 
 * @returns {element}
 */
function generateGridElems(htmlTag, size, cssClass, numb) {

  const gridElement = document.createElement(htmlTag);

  gridElement.classList.add(cssClass);

  gridElement.innerText = numb;

  gridElement.style.width = `calc(100% / ${Math.sqrt(size)})`;

  gridElement.style.lineHeight = `calc(750px / ${Math.sqrt(size)})`;

  return gridElement;

}


/**
 * Add an event listener to the given element.
 * 
 * @param {element} element The element to add the event listener to
 * 
 */
function addEventToElement(element) {

  element.addEventListener("click", clickCell);

};


/**
 * Remove an event listener from the given element.
 * 
 * @param {element} element The element to add the event listener to
 * 
 */
function removeEventFromElement(element) {

  element.removeEventListener("click", clickCell);

};


/**
 * Manage the click of the cells.
 * If there is a mushroom in a cell the game is over
 * 
 */
function clickCell() {

  const grid = document.getElementById("game_container");

  console.log(this.innerText);

  if (rndNumbersList.includes(Number(this.innerText))) {

    this.classList.add("mushroom");

    this.innerText = "";

    this.style.backgroundImage = "url('../assets/img/Koffingbig.webp')";

    gameOver();

    console.log("Game Over: " + isGameOver);

  } else if (cellsClicked === (cellsNumber - rndNumbersList.length)) {

    winnerPopUp = popUp("div", "500px", "popup rounded", "YOU WIN!", "Congratulations!", "Wanna try again?");
    grid.insertAdjacentElement("afterbegin", winnerPopUp);
  } else {

    cellsClicked += 1;

    console.log(cellsClicked);

    this.classList.add("clicked");

  }

}


/**
 * Remove the grid, remove the classes from the elements and let the player restart game
 */
function restartGame(htmlContainerID, cssClass) {

  if (isGameOver) {

    const containerElem = document.getElementById("game_container");

    containerElem.remove();

    playGame();
  }
};


/**
 * Generate a random number between a minimum and a maximum (both included).
 * 
 * @param {number} min Minimum of the range
 * @param {number} max Maximum of the range
 * 
 * @returns {number}
 */
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


/**
 * Manage game over and prevent the user to play after game over
 */
function gameOver() {

  // Prevent the user to click cells after game over
  const cellList = document.querySelectorAll(".cell");

  for (let i = 0; i < cellList.length; i++) {

    const element = cellList[i];

    // Shows all koffings 
    if (rndNumbersList.includes(Number(element.innerText))) {

      console.log("show koffing");

      element.classList.add("mushroom");

      element.innerText = "";

      element.style.backgroundImage = "url('../assets/img/Koffingbig.webp')";
    }
    removeEventFromElement(element);
  }

  // Create game over popup
  const grid = document.getElementById("game_container");
  gameOverPopUp = popUp("div", "500px", "popup rounded", "GAME OVER", "Better luck next time!", "Wanna try again?");
  grid.insertAdjacentElement("afterbegin", gameOverPopUp);

  // Create a variable for the "Restart game" button DOM element
  const restartBtnElem = document.getElementById("restart_btn");
  restartBtnElem.addEventListener("click", restartGame);

  //Set game over to true
  isGameOver = true;

  //Set isPlaying to false
  isPlaying = false;
  console.log("Is playing: " + isPlaying);

  // Empty the random number list
  rndNumbersList = [];

  // Reset the number of cells clicked
  cellsClicked = 0;


};


/**
 * Generate an element on top of every other elements in the center of a container 
 * 
 * @param {string} htmlTag The HTML tag to generate
 * @param {string} width The width of the element in pixels
 * @param {Array} classes The class/classes to set on the element
 * @param {string} title The title of the element
 * @param {string} [line1] First optional phrase
 * @param {string} [line2] Second optional phrase
 * @returns {element}
 */
function popUp(htmlTag, width, classes, title, line1, line2) {

  const popUpElem = document.createElement(htmlTag);

  popUpElem.classList = classes;

  popUpElem.innerHTML = `
  <h1>${title}</h1>
  <p>${line1}</p>
  <p>Your score: ${cellsClicked}</p>
  <p>${line2}</p>
  <button type="button" class="btn btn-primary mc_btn px-5 py-2" id="restart_btn">Reset</button>`;

  popUpElem.style.width = `${width}`;

  popUpElem.style.textAlign = "center";

  popUpElem.style.margin = "0 auto";

  popUpElem.style.position = "absolute";

  popUpElem.style.top = "50%";

  popUpElem.style.left = "50%";

  popUpElem.style.transform = "translate(-50%, -50%)";

  popUpElem.style.zIndex = "1000";

  return popUpElem;
};

// #endregion ||||| FUNCTIONS |||||