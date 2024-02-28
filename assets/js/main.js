// Create a variable for the "Play" button DOM element

const playBtnElem = document.getElementById("play_btn");

// Create a variable for the header DOM element

const headerElem = document.getElementById("site_header");


// Create a variable for the grid DOM element

const containerMarkup = `<div id="game_container" class="d-flex flex-wrap"></div>`;


// Create a variable for the number of the cells to generate

let cellsNumber = 100;


// Create a variable for the single grid element markup

let cellMarkup = `<div class="cell easy"></div>`;


// Create a variable to prevent generation of multiple grids after the first

let isPlaying = false;


// Generate the grid on click of "Play" button

playBtnElem.addEventListener("click", function () {

  if (isPlaying === false) {

    isPlaying = true;

    // Generate grid container
    headerElem.insertAdjacentHTML("afterend", containerMarkup)

    // Change cells number at different difficulty 
    selectDifficulty("input_game_difficulty", "game_container");

    // Generate grid container
    generateGrid("game_container", "cell");

  };

  generateGridElems("cell");

});


// #region ||||| FUNCTIONS |||||

/**
 * Set the container with the given ID dimension based on the option chosen in the input with the given ID
 * 
 * @param {string} htmlInputID HTML ID of the input to get data from
 * @param {string} htmlContainerID HTML ID of the container to change the size of
 * 
 */
function selectDifficulty(htmlInputID, htmlContainerID) {

  const inputDifficultyElem = document.getElementById(htmlInputID);

  let gameDifficulty = inputDifficultyElem.value;

  const containerElem = document.getElementById(htmlContainerID);

  if (gameDifficulty === "medium") {
    cellsNumber = 81;
    cellMarkup = `<div class="cell medium"></div>`
    containerElem.style.width = "calc(85px * 9)"
  } else if (gameDifficulty === "hard") {
    cellsNumber = 49;
    cellMarkup = `<div class="cell hard"></div>`
    containerElem.style.width = "calc(100px * 7)"
  }

}


/**
 * Generate a grid of elements with the given class in the given container
 * 
 * @param {string} htmlContainerID HTML ID of the container in which to generate the grid
 * @param {string} cssClass CSS Class to give to grid elements
 * 
 */
function generateGrid(htmlContainerID, cssClass) {

  const containerElem = document.getElementById(htmlContainerID);

  const elementsList = document.getElementsByClassName(cssClass);

  for (let i = 0; i < cellsNumber; i++) {

    containerElem.insertAdjacentHTML("afterbegin", cellMarkup)

  };

}


/**
 * Change cells color on click and add a consecutive number in it
 * 
 * @param {string} cssClass CSS class of the cell element to make clickable
 * 
 */
function generateGridElems(cssClass) {

  const elementsList = document.getElementsByClassName(cssClass);

  // Color cells on click
  for (let i = 0; i < elementsList.length; i++) {

    const element = elementsList[i];

    element.innerHTML = i + 1;

    element.addEventListener("click", function () {

      element.classList.toggle("clicked");
      console.log(element.innerHTML);

    });
  }

}

// #endregion ||||| FUNCTIONS |||||