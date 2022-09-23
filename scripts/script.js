    // ***LAYOUT - clear display, create calculator buttons, add event listeners, and apply styling classes***

const selectDisplay = document.querySelector(`.display-text`);
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

    // ***Select buttons and add event listeners***
    let forOfCounter = 0;
    const selectInnerButtons = document.querySelectorAll(".inner-button")
    for (const btn of selectInnerButtons) {
      const buttonContent = ["", "Back", "CE", "C", "MC", "MR", "MS", "M+", "7", "4", "1", "0", "8", "5", "2", "+/-", "9", "6", "3", ".", "/", "*", "-", "+", "sqrt", "%", "1/x", "="]
      btn.value = buttonContent[forOfCounter];
      btn.setAttribute("type", "button");
      
      btn.addEventListener("click", getInput);
      window.addEventListener("keyup", getInput);
      
      
      
      // ***Apply classes for color styling***
      
      
      if (forOfCounter <= 3) {
        btn.classList.add("dark-red")
        
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

      if (forOfCounter === 2 || forOfCounter >= 4 && forOfCounter <= 7 || forOfCounter >= 24 && forOfCounter < 27) { //remove event listeners from greyed buttons
        btn.classList.remove("dark-red");
        btn.classList.add("grey");
        btn.removeEventListener("click", getInput);
      }
      forOfCounter++;
      
      
    }
    
})();

    //CALCULATOR LOGIC//

function clearDisplay() {
  selectDisplay.textContent = "";
}

const regOps = /^[+\-*.\/]*$/ //regex to test for any of the following math operators: + - * /

function getInput(e) { // gets a value from an input event and processes the value

  const newKeypress = e.key;
  let newValue = e.target.value; 
  
  if (e.key != undefined) {
    newValue = e.key;
    if (newValue === "Enter") {
      newValue = "=";
    }
  }
  
  const regNumPeriod = /[\d\.]/; //regex to test for any digit or period

  if (regNumPeriod.test(newValue)) { 
      isNumberOrPeriod(newValue);
  } else if (regOps.test(newValue)) {
      isOperator(newValue);
  } else if (newValue === "=") {
      calcArray[0] = calcArray[1];
      calcArray[1] = inputNumber;
      doCalc();
      opCounter = 0;  
  } else if (newValue === "C") {
    reset();
  } else if (newValue === "Back") {
    inputStr = inputStr.slice(0, -1);
    inputStrToNumber();
    selectDisplay.textContent = inputStr;
  } else {
    return;
  } 
}

let inputStr = "";
let inputNumber = 0;
let operator = "";
let history = "";

let calcArray = [0, 0, 0];

function isNumberOrPeriod(newValue) {
  if (displayIsResult > 0) { //if existing displayed number is a result, reset the calculator
    clearDisplay();
    calcArray = [0, 0, 0];
    displayIsResult = 0;
  }
  if (newValue === "." && inputStr.indexOf(".") !== -1) { //check if newValue is a period and if the input string contains a period. If it does, return.
    return;
  } else {
    inputStr = inputStr + newValue;
    history = history + newValue;
    selectDisplay.textContent = inputStr;
    inputStrToNumber();
  }  
}
let opCounter = 0;
function isOperator(newValue) {
  operator = newValue; 
  const lastHist = history.slice(-1); //store the last character of history as lastHist

  if (regOps.test(lastHist)) { //test to see if last char entered (lastHist) was an operator. If so, replace it with the new one.
    history = history.substring(0, history.length - 1);
    history = history + newValue;
    return;
  }
  
  if (opCounter < 1) { //if this is the first operation
    calcArray[1] = inputNumber;
  } else if (opCounter >= 1) {
    console.log("opCounter >= 1)")
    calcArray[0] = calcArray[1];
    calcArray[1] = inputNumber;
    doCalc();
  }
  history = history + newValue;
  opCounter ++;
  inputStr = "";
}

let displayIsResult = 0;

function doCalc() {
  if (calcArray[2] != 0) {
    calcArray[0] = calcArray[2];
  }
  switch (operator) {
    case "+":
      calcArray[2] = calcArray[0] + calcArray[1];
      break;
    case "-":
      calcArray[2] = calcArray[0] - calcArray[1];
      break;
    case "*":
      calcArray[2] = calcArray[0] * calcArray[1];
      break;
    case "/":
      calcArray[2] = calcArray[0] / calcArray[1];
      if (calcArray[2] === Infinity) {
        alert("Can't divide by 0. Resetting calculator.")
        reset();
      }
      break;
  }
  
  selectDisplay.textContent = calcArray[2];
  displayIsResult = 1;
  inputStr ="";
  inputNumber=0;
}

function inputStrToNumber() {
  inputNumber = Number(inputStr);
}

function reset() {
  document.location.reload();
}