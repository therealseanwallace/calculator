(() => {
    
  
    const createDiv = (class1, container, class2) => {
      const selectDiv = document.querySelector(`.${container}`);
      console.log("Div selected!", selectDiv);
      const newDiv = document.createElement('div');
      newDiv.classList.add(class1);
      if (class2 != undefined) {
        newDiv.classList.add(class2);
        console.log("class 2 is", class2);
      } else {
        console.log("else class 2 is", class2);
      }
      selectDiv.append(newDiv);
      console.log("Created div with classes:", class1, " ", class2);
    }

    let buttonCounter = 0;
    createDiv("upper-row", "buttons");
    createDiv("lower-columns", "buttons");

    for (let i = 0; i < 4; i++) {
      createDiv(`button-${buttonCounter}`, "upper-row", "upper-button");
      buttonCounter++;
    }
    
    for (let i = 0; i < 6; i++) {
      createDiv(`column-${i}`, "lower-columns", "column");
      for (let index = 0; index < 4; index++) {
        createDiv(`button-${buttonCounter}`, `column-${i}`, "lower");
        buttonCounter++;
      }
    }

    for (let i = 0; i < buttonCounter; i++) {
      console.log(`Selecting inner-button-${i}, button-${i}`)
      createDiv(`inner-button-${i}`, `button-${i}`, "inner-button");
      
    }

    
})();





function drawAButton(div, ) {
  const selectContainer = document.querySelector(".square-container");
  const square = document.createElement('div');
  square.classList.add("square");
  square.addEventListener('mouseenter', fillSquare);
  selectContainer.append(square);
} 









function createButtons(numberOfSquares, width) {
  deleteSquares();    
  
  if (numberOfSquares !== 'undefined') {
    for (let i = 0; i < (numberOfSquares * numberOfSquares); i++ ) {
      drawASquare();
      assignIDs(i);
    }
  } else {
    for (let i = 0; i < 256; i++) {
      drawASquare();
      assignIDs(i);
    }
  } 
  applySquareSizing(width);
}