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
  inputStr = selectDisplay.value;
}

function clearDisplay() {
  selectDisplay.value = "";
}

const regOps = /^[+\-*.\/]*$/ //regex to test for any of the following math operators: + - * /

function getInput(e) { // gets a button value from a button press event and processes the value
  const newValue = e.target.value; 
  const regNumPeriod = /[\d\.]/; //regex to test for any digit or period
  if (regNumPeriod.test(newValue)) { 
      isNumberOrPeriod(newValue);
  } else if (regOps.test(newValue)) {
      isOperator(newValue);
  } else if (newValue === "=") {
      doCalc();
  } else {
    console.log("Invalid input ignored.")
    return;
  }
}

let inputStr = "";
let inputNumber = 0;
let operator = "";
let history = "";

let calcArray = [0, 0, 0];

function isNumberOrPeriod(newValue) {
  if (newValue === "." && input.indexOf(".") !== -1) { //check if newValue is a period and if the input string contains a period. If it does, return.
    return;
  } else {
    inputStr = inputStr + newValue;
    history = history + newValue;
    console.log(history);
    inputStrToNumber();
  }
/*  console.log(input);
  console.log(typeof(input));
  console.log(inputNumber);
  console.log(typeof(inputNumber));*/
}
let opCounter = 0;
function isOperator(newValue) {
  console.log("isOperator active!");
  console.log("opCounter is", opCounter);
  operator = newValue; 
  console.log("Operator set to", operator);
  const lastHist = history.slice(-1); 

  if (regOps.test(lastHist)) { //test to see if last char entered was an operator. If so, replace it with the new one.
    history = history.substring(0, history.length - 1);
    history = history + newValue;
    return;
    
  }
  
  if (opCounter < 1) { //if this is the first operation
    console.log("opCounter < 1")
    console.log("inputNumber type is", typeof inputNumber);
    calcArray[1] = inputNumber;
    console.log("calcArray values are", calcArray[0], calcArray[1], calcArray[2]);
  } else if (opCounter >= 1) {
    console.log("opCounter >= 1)")
    calcArray[0] = calcArray[1];
    calcArray[1] = inputNumber;
    console.log("calcArray values are", calcArray[0], calcArray[1], calcArray[2]);
    doCalc();
  }

  history = history + newValue;
  opCounter ++;
  inputStr = "";

  
}

function doCalc() {
  if (calcArray[2] != 0) {
    calcArray[0] = calcArray[2];
  }
  console.log("Starting calc. calcArray values are", calcArray);
  switch (operator) {
    case "+":
      console.log("performing addition!");
      calcArray[2] = calcArray[0] + calcArray[1];
      break;
    case "-":
      console.log("performing subtraction!");
      calcArray[2] = calcArray[0] - calcArray[1];
      break;
    case "*":
      console.log("performing multiplication!");
      calcArray[2] = calcArray[0] * calcArray[1];
      break;
    case "/":
      console.log("performing division!");
      calcArray[2] = calcArray[0] / calcArray[1];
      
      break;
  }
  console.log("Calculation performed! New calcArray values are", calcArray)
}



// helper functions
function inputStrToNumber() {
  inputNumber = Number(inputStr);
}

function clearAll() {
  inputStr = "";
  inputNumber = 0;
  history = "";
}