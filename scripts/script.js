(() => { //create calculator buttons
    
    
    const createDiv = (class1, container, class2, /*contentId,*/ containerType, type) => {
      const selectDiv = document.querySelector(`.${container}`);
      const newDiv = document.createElement(`${containerType}`);
      
      newDiv.classList.add(class1);
      //newDiv.value = buttonContent[contentId];
      
      
      if (class2 != undefined) {
        newDiv.classList.add(class2);
      }

      if (type != undefined) {
        newDiv.setAttribute("type", type);
      }

      
      selectDiv.append(newDiv);
    }

    let buttonCounter = 0;
    createDiv("upper-row", "buttons", null, /*null,*/ "div");
    createDiv("lower-columns", "buttons", null, /*null,*/ "div");

    for (let i = 0; i < 4; i++) {
      createDiv(`button-${buttonCounter}`, "upper-row", "upper-button", /*null,*/ "div");
      buttonCounter++;
    }
    
    for (let i = 0; i < 6; i++) {
      createDiv(`column-${i}`, "lower-columns", "column", /*null,*/ "div");
      for (let index = 0; index < 4; index++) {
        createDiv(`button-${buttonCounter}`, `column-${i}`, "lower", /*null,*/ "div", "button");
        buttonCounter++;
      }
    }

    for (let i = 0; i < buttonCounter; i++) {
      createDiv(`inner-button-${i}`, `button-${i}`, "inner-button", /*i,*/ "input");
      
    }
    let forOfCounter = 0;
    const selectInnerButtons = document.querySelectorAll(".inner-button")
    for (const btn of selectInnerButtons) {
      const buttonContent = ["", "Back", "CE", "C", "MC", "MR", "MS", "M+", "7", "4", "1", "0", "8", "5", "2", "+/-", "9", "6", "3", ".", "/", "*", "-", "+", "sqrt", "%", "1/x", "="]
      btn.value = buttonContent[forOfCounter];
      btn.setAttribute("type", "button");
      
      btn.addEventListener("click", getValue);
      

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

let newNum = 0;
function getValue(e) {
  processValues(e.target.value);
}

let input = "";
let operator = "";
let a = "";
let calcCounter = 0;
let output = "";
function processValues(key) {
  const number = /\d/;
  function convertInputToNum() {
    input = Number(input);
  }
  

  if (number.test(key)) {
    input = input + key;
  } else {
    
  }
  
  if (key === ".") {
    if (input.indexOf(".") !== -1) {
      return;
    } else {
      input = input + key;
    }
  } 

  if (key === "/") {
    
    if (output != "") {
      calcOutput();
    } else {
    
    convertInputToNum();
    a = input;
    clearInput();
    }
    operator = "/";

  } else {
    
  }

  if (key === "*") {
    if (output != "") {
      calcOutput();
    } else {
    
    convertInputToNum();
    a = input;
    clearInput();
    }
    operator = "*";
  } else {
    
  }

  if (key === "-") {
    if (output != "") {
      calcOutput();
    } else {
    
    convertInputToNum();
    a = input;
    clearInput();
    }
    operator = "-";
  } else {
    
  }

  if (key === "+") {
    
  } else {
    
  }

  if (key === "=") {
    performCalc();
    calcCounter ++;
  } else {
    
  }

  if (key === "C") {
    
  } else {
    
  }

  if (key === "CE") {
    
  } else {
    
  }
}

function clearInput() {
  input = "";
}

function performCalc() {
  if (operator === "/") {
    output = a / input;
    clearInput();
  }

  if (operator === "*") {
    output = a * input;
    clearInput();
  }

  if (operator === "-") {
    output = a - input;
    clearInput();
  }
}
function updateDisplay() {

}

function calcOutput() {
  if (output != "") {
    a = output;
  }
  
}