// Create a variable for the "Play" button DOM element

const playBtnElem = document.getElementById("play_btn");
console.log(playBtnElem);

// Create a variable for the header DOM element

const headerElem = document.getElementById("site_header");
console.log(headerElem);


// Create a variable for the grid DOM element

const gameContainerMarkup = `<div id="game_container" class="d-flex flex-wrap"></div>`;
console.log(gameContainerMarkup);


// Create a variable for the number of the cells to generate

const cellsNumber = 100;


// Create a variable for the single grid element markup

const cellMarkup = `<div class="cell"></div>`;
console.log(cellMarkup);

// Create a variable to prevent generation of multiple grids after the first

let isPlaying = false;
console.log(isPlaying);


// Generate the grid on click of "Play" button

playBtnElem.addEventListener("click", function () {

  if (isPlaying === false) {

    isPlaying = true;

    headerElem.insertAdjacentHTML("afterend", gameContainerMarkup)

    const gameContainerElem = document.getElementById("game_container");

    for (let i = 0; i < cellsNumber; i++) {

      gameContainerElem.insertAdjacentHTML("afterbegin", cellMarkup)

    };
  };

});