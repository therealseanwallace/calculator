(() => {
    
    
    const createDiv = (class1, container, class2, /*contentId,*/ containerType, type) => {
      const buttonContent = ["", "Back", "CE", "C", "MC", "MR", "MS", "M+", "7", "4", "1", "0", "8", "5", "2", "+/-", "9", "6", "3", ".", "/", "*", "-", "+", "sqrt", "%", "1/x", "="]
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
      if (forOfCounter <= 3) {
        btn.classList.add("dark-red")
        
      }

      if (forOfCounter >= 4 && forOfCounter <= 7) {
      btn.classList.add("red")
      
      }

      //if (forOfCounter >= 5 && forOfCounter <= 19) {}
      forOfCounter++;

    }
    
})();




