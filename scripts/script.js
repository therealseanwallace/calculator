    //LAYOUT//

    //clear display & create calculator buttons

const selectDisplay = document.querySelector(`.display`);
(() => { 
    clearDisplay();
    
    const createDiv = (class1, container, class2, containerType, type) => {
      const selectDiv = document.querySelector(`.${container}`);
      const newDiv = document.createElement(`${containerType}`);
      
      newDiv.classList.add(class1);
      
      
      
      if (class2 != undefined) {
        newDiv.classList.add(class2);
      }

      if (type != undefined) {
        newDiv.setAttribute("type", type);
      }

      
      selectDiv.append(newDiv);
    }

    let buttonCounter = 0;
    createDiv("upper-row", "buttons", null, "div");
    createDiv("lower-columns", "buttons", null, "div");

    for (let i = 0; i < 4; i++) {
      createDiv(`button-${buttonCounter}`, "upper-row", "upper-button", "div");
      buttonCounter++;
    }
    
    for (let i = 0; i < 6; i++) {
      createDiv(`column-${i}`, "lower-columns", "column", "div");
      for (let index = 0; index < 4; index++) {
        createDiv(`button-${buttonCounter}`, `column-${i}`, "lower", "div", "button");
        buttonCounter++;
      }
    }

    for (let i = 0; i < buttonCounter; i++) {
      createDiv(`inner-button-${i}`, `button-${i}`, "inner-button", "input");
      
    }

    //select buttons and add event listeners
    let forOfCounter = 0;
    const selectInnerButtons = document.querySelectorAll(".inner-button")
    for (const btn of selectInnerButtons) {
      const buttonContent = ["", "Back", "CE", "C", "MC", "MR", "MS", "M+", "7", "4", "1", "0", "8", "5", "2", "+/-", "9", "6", "3", ".", "/", "*", "-", "+", "sqrt", "%", "1/x", "="]
      btn.value = buttonContent[forOfCounter];
      btn.setAttribute("type", "button");
      
      btn.addEventListener("click", getInput);
      
      //apply classes for color styling
      if (forOfCounter <= 3) {
        btn.classList.add("dark-red")
        
      }

      if (forOfCounter >= 4 && forOfCounter <= 7) {
      btn.classList.add("red")
      }

      if (forOfCounter >= 8 && forOfCounter <= 19) {
        btn.classList.add("blue")
      }
      
      if (forOfCounter >= 20 && forOfCounter <= 23) {
        btn.classList.add("red")
      }

      if (forOfCounter >= 20 && forOfCounter <= 23) {
        btn.classList.add("red")
      }

      if (forOfCounter >= 24 && forOfCounter <= 26){
        btn.classList.add("darkblue")
      }

      if (forOfCounter === 27) {
        btn.classList.add("red")
      }
      forOfCounter++;

    }
    
})();

    //CALCULATOR LOGIC//

selectDisplay.addEventListener("input", updateInputFromDisplay);
console.log(selectDisplay);


function updateInputFromDisplay() {
  input = selectDisplay.value;
}

function clearDisplay() {
  selectDisplay.value = "";
}


function getInput(e) { // gets a button value from a button press event and processes the value
  const newValue = e.target.value; 
  
  const reNum = /[\d\.]/; //regex to test for any digit or period
  const reOps = /^[+\-*.\/]*$/ //regex to test for any of the following math operators: + - * /
  if (reNum.test(newValue)) { 
    console.log("Value is", newValue,"!");
    return(newValue);
  } else if (reOps.test(newValue)) {
      console.log("Math operator detected! Value is", newValue,"!")
  } else if (newValue === "=") {
      console.log("Equals detected!")
  }
}

let input = 0;

const newNum = function() {
  
}
const add = function(x, y) {
	a = x + y;
  return(a);
}

const subtract = function(x, y) {
	a = x - y;
  return(a);
};

const multiply = function(x, y) {
	a = x * y;
  return(a);
};

const divide = function (x, y) {
  a = x / y;
  return(a);
}

