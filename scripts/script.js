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
      console.log("Created div with classes:", class1, " ", class2);
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
      console.log(`Creating inner-button-${i}, button-${i}`)
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
  console.log("this is e.target.value", e.target.value);
  processValues(e.target.value);
}

let input = "";
function processValues(key) {
  const number = /\d/;
  console.log("this is key", key);
  
  

  if (number.test(key)) {
    input = input + key;
    console.log("input is now", input);
  } else {
    console.log("nan lol");
  }
  
  if (key === ".") {
    if (input.indexOf(".") !== -1) {
      return;
    } else {
      input = input + key;
    }
    console.log("period");
  } else {
    console.log("not period lol");
  }

  if (key === "/") {
    console.log("divide!");
  } else {
    console.log("not divide lol");
  }

  if (key === "*") {
    console.log("multiply!")
  } else {
    console.log("not multiply lol");
  }

  if (key === "-") {
    console.log("subtract!")
  } else {
    console.log("not subtract lol");
  }

  if (key === "+") {
    console.log("add!")
  } else {
    console.log("not add lol");
  }

  if (key === "=") {
    console.log("equals!")
  } else {
    console.log("not equals lol");
  }

  if (key === "C") {
    console.log("c!")
  } else {
    console.log("not c lol");
  }

  if (key === "CE") {
    console.log("ce!")
  } else {
    console.log("not ce lol");
  }
}

function updateDisplay() {

}
