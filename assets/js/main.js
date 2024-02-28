// Create a variable for the "Play" button DOM element

const playBtnElem = document.getElementById("play_btn");
// console.log(playBtnElem);

// Create a variable for the header DOM element

const headerElem = document.getElementById("site_header");
// console.log(headerElem);


// Create a variable for the grid DOM element

const gameContainerMarkup = `<div id="game_container" class="d-flex flex-wrap"></div>`;
// console.log(gameContainerMarkup);


// Create a variable for the number of the cells to generate

let cellsNumber = 100;





// Create a variable for the single grid element markup

let cellMarkup = `<div class="cell easy"></div>`;
// console.log(cellMarkup);


// Create a variable to prevent generation of multiple grids after the first

let isPlaying = false;
console.log("Is playing: " + isPlaying);


// Generate the grid on click of "Play" button

playBtnElem.addEventListener("click", function () {

  if (isPlaying === false) {

    isPlaying = true;
    console.log("Is playing: " + isPlaying);

    // Generate grid container
    headerElem.insertAdjacentHTML("afterend", gameContainerMarkup)

    const gameContainerElem = document.getElementById("game_container");

    // Change cells number at different difficulty 

    const inputDifficultyElem = document.getElementById("input_game_difficulty");
    let gameDifficulty = inputDifficultyElem.value;

    if (gameDifficulty === "medium") {
      cellsNumber = 81;
      cellMarkup = `<div class="cell medium"></div>`
      gameContainerElem.style.width = "calc(85px * 9)"
    } else if (gameDifficulty === "hard") {
      cellsNumber = 49;
      cellMarkup = `<div class="cell hard"></div>`
      gameContainerElem.style.width = "calc(100px * 7)"
    }

    console.log(gameDifficulty);

    console.log("Number of cells" + cellsNumber);

    // Generate cells
    for (let i = 0; i < cellsNumber; i++) {

      gameContainerElem.insertAdjacentHTML("afterbegin", cellMarkup)

    };
  };


  const cellElems = document.getElementsByClassName("cell");

  // Color cells on click
  for (let i = 0; i < cellElems.length; i++) {

    const cell = cellElems[i];

    cell.innerHTML = i + 1;

    cell.addEventListener("click", function () {

      cell.classList.toggle("clicked");
      console.log(cell.innerHTML);

    });
  }

});



// Create a variable for the single grid cell DOM element