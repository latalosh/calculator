document.addEventListener('DOMContentLoaded', startApp);


function startApp() {

  let firstNumberElement = document.querySelector('#first-number');
  let secondNumberElement = document.querySelector('#second-number');
  let operationElement = document.querySelector('#operation');
  let resultElement = document.querySelector('#result');

  let firstNumber = '';
  let secondNumber = '';
  let operation = '';
  let lock = false;

  let buttonsContainer = document.querySelector('.buttons-container');

  buttonsContainer.addEventListener('click', calculatorButtonClickHandler);


  function resetAll() {
    lock = false;
    firstNumber = '';
    secondNumber = '';
    operation = '';
    firstNumberElement.innerText = '';
    secondNumberElement.innerText = '';
    operationElement.innerText = '';
    resultElement.innerText = '';
  }



  function calculatorButtonClickHandler(event) {
    let selectedButton = event.target.innerText;

    let isNumber = /\d/g.test(selectedButton);
    let isOperation = /\+|\x|\-|\//.test(selectedButton);
    let isEqual = /=/g.test(selectedButton);
    let isAC = /AC/.test(selectedButton);

    if (isAC)
      resetAll();

    if (lock)
      return;

    /*
    * only save the operation if 
    * - first number exist 
    * - no operation is saved before
    */
    if (isOperation && firstNumber && !operation) {
      operation = selectedButton;
      operationElement.innerText = operation;
    }


    if (isNumber)
      if (!firstNumber || !operation) {
        firstNumber += selectedButton;
        firstNumberElement.innerText = firstNumber;
      }
      else {
        secondNumber += selectedButton;
        secondNumberElement.innerText = secondNumber;
      }


    if (isEqual) {
      lock = true;
      let result = calculateTheResult({ firstNumber, secondNumber, operation });
      resultElement.innerText = ` = ${result}`;
    }
  }



  /*
   * take two numbers, and return the multiplication of them
   */
  multiply(x,y){
    return x * y;
  },
}

function calculateTheResult({ firstNumber, secondNumber, operation }) {
  switch (operation) {
    case '+': {
      return calculator.sum(firstNumber, secondNumber);
    }
    default:
      return '';
  }
}
