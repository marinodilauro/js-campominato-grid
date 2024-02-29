// Create a variable for the "Play" button DOM element

const playBtnElem = document.getElementById("play_btn");


// Create a variable for the "Reset" button DOM element

const resetBtnElem = document.getElementById("reset_btn");


// Create a variable for the header DOM element

const headerElem = document.getElementById("site_header");


// Create a variable for the grid DOM element

const containerMarkup = `<div id="game_container" class="d-flex flex-wrap"></div>`;


// Create a variable for the number of the cells to generate

// let cellsNumber = 100;


// Create a variable for the single grid element markup

let cellMarkup = `<div class="cell"></div>`;


// Create a variable to prevent generation of multiple grids after the first

let isPlaying = false;
console.log(isPlaying);


// Create empty list for rnd numbers

let rndNumbersList = [];


// Create a variable for the maximum number of mushrooms to generate

const maxMushrooms = 16;


// Generate 16 random numbers from 1 to 16 

randomNumberGenerator(1, maxMushrooms);


// Generate the grid on click of "Play" button

playBtnElem.addEventListener("click", function () {

  if (isPlaying === false) {

    isPlaying = true;
    console.log(isPlaying);

    // Read the difficulty level
    let cellsNumber = document.getElementById("input_game_difficulty").value;

    // Generate grid container
    headerElem.insertAdjacentHTML("afterend", containerMarkup)

    // Generate grid with cells
    generateGrid("game_container", cellsNumber);

  };

});


// Remove grid and let the player to restart the game on click of "Reset" button

resetBtnElem.addEventListener("click", resetGame);


// #region ||||| FUNCTIONS |||||

/**
 * Generate a grid of elements with the given class in the given container.
 * 
 * @param {string} htmlContainerID HTML id of the container in which to generate the grid
 * @param {number} difficultyLevel Level of difficulty (the number of cells to generate)
 * 
 */
function generateGrid(htmlContainerID, difficultyLevel) {

  const grid = document.getElementById(htmlContainerID);

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
 * The event listener add the CSS class"clicked" to the element and print the element inner text in console.
 * 
 * @param {element} element The element to add the event listener to
 */
function addEventToElement(element) {

  element.addEventListener("click", function (e) {

    element.classList.toggle("clicked");

    console.log(this.innerText);

  });

}

/**
 * Remove the grid, remove the classes from the elements and let the player to restart game
 */
function resetGame(htmlContainerID, cssClass) {

  if (isPlaying === true) {

    const containerElem = document.getElementById("game_container");

    containerElem.remove();

    isPlaying = false;
    console.log(isPlaying);

  }

  cellsNumber = 100;

}


/**
 * Generate a random number between a minimum and a maximum (both included).
 * 
 * @param {number} min Minimum of the range
 * @param {number} max Maximum of the range
 * @returns {number}
 */
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// #endregion ||||| FUNCTIONS |||||