




const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.display');


let buffer = '0';
let runningTotal = 0;
let previousOperator = null;


function sortButton(value) {

   if(isNaN(value)){
      isSymbol(value)
   }else {
      isNumber(value)
   }

   display.value = buffer


}


function isNumber(number) {

   if(buffer === "0") {
      buffer = number
   }else {
      buffer += number
   }
}



function isSymbol(symbol) {

   switch(symbol) {
      case 'AC':
         buffer = '0';
         runningTotal = 0;
         break;
      case '=':
         if(previousOperator === null) {
            return
         }
         flushOperations(parseInt(buffer))
         previousOperator = null;
         buffer = runningTotal;
         runningTotal = 0;
         break; 
      case '/':
      case '*':
      case '-':
      case '+':
         handleMath(symbol);
         break;
   }
}

function handleMath(symbol) {

   if(buffer === '0') {
      return
   }

   let intBuffer = parseInt(buffer)

   if(runningTotal === 0) {
      runningTotal = intBuffer
   }else {
      flushOperations(intBuffer)
   }

   previousOperator = symbol;
   buffer = '0';
}



function flushOperations(intBuffer) {

   if(previousOperator == '+') {
      runningTotal += intBuffer;
   }else if(previousOperator == '-') {
      runningTotal -= intBuffer;
   }else if(previousOperator == '*') {
      runningTotal *= intBuffer;
   }else if(previousOperator == '/') {
      runningTotal /= intBuffer;
   }

}







btns.forEach(btn => {
   btn.addEventListener('click', (e) => {
      sortButton(e.target.value)
   })
   
});