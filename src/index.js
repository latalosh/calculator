document.addEventListener('DOMContentLoaded', startApp);

let firstNumber = '';
let secondNumber = '';
let operation = '';


function startApp() {

  let buttonsContainer = document.querySelector('.buttons-container');

  buttonsContainer.addEventListener('click', function eventHandler(event) {
    let selectedButton = event.target.innerText;

    let isNumber = /\d/g.test(selectedButton);
    let isOperation = /\+|\x|\-|\//.test(selectedButton);
    let isEqual = /=/g.test(selectedButton);

    /*
    * only save the operation if 
    * - first number exist 
    * - no operation is saved before
    */
    if (isOperation && firstNumber && !operation)
      operation = selectedButton;


    if (isNumber)
      if (!firstNumber)
        firstNumber += selectedButton;
      else
        secondNumber += selectedButton;


    if (isEqual) {
      let result = calculateTheResult();
      console.log({ result });
      firstNumber = '';
      secondNumber = '';
      operation = '';
    }

    console.log({ firstNumber, secondNumber, operation });
  });

}

function calculateTheResult() {
  switch (operation) {
    case '+': {
      return calculator.sum(firstNumber, secondNumber);
    }
  }
}
