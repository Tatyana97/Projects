const numberButtons = document.querySelectorAll("[data-number]");
 const operationButtons = document.querySelectorAll('[data-operation]');
 const decimalBtn = document.querySelector("[data-decimal]");
 const resultBtn = document.querySelector('[data-operation ]');
const clearBtn = document.querySelectorAll('.clear-btn');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const sqrBtn = document.querySelector('.sqr');
const changeSign = document.querySelector('.change-sign');

const display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';


// Обработчик событий
for (let i = 0; i < numberButtons.length; i++) {
  let number = numberButtons[i];
  number.addEventListener("click", function (e){
    numberPress(e.target.outerText);
  })
}

for (let i = 0; i < operationButtons.length; i++) {
  let operationBtn = operationButtons[i];
  operationBtn.addEventListener("click", function (e){
    operation(e.target.outerText);
  })
}

for (let i = 0; i < clearBtn.length; i++) {
  let allClearBtn = clearBtn[i];
  allClearBtn.addEventListener("click", function (e){
    clear(e.srcElement.id);
  })
}

decimalBtn.addEventListener("click", decimal);

 sqrBtn.addEventListener("click", sqr);
 changeSign.addEventListener("click", sign);




function numberPress(number) {
  
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
if (display.value === '0') {
  display.value = number;
} else {
  display.value += number;
};
}
}

function operation(op) {
// перед операцией сохраняем число в памяти 
let localOperationMemory = display.value;
    
  if (MemoryNewNumber && MemoryPendingOperation !== '=' ) {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += +localOperationMemory;
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= +localOperationMemory;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= +localOperationMemory;
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= +localOperationMemory;
    }

    else if (MemoryPendingOperation === '**') {
      MemoryCurrentNumber **= +localOperationMemory;
    }  
    else {
      MemoryCurrentNumber = +localOperationMemory;
    }
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;
  }
}



function decimal() {
  let localDecimaMemory = display.value;

  if(MemoryNewNumber){
    localDecimaMemory = '0.';
    MemoryNewNumber = false;
  } else{
    if (localDecimaMemory.indexOf(".") === -1) {
      localDecimaMemory += '.';
    };
  };
  display.value = localDecimaMemory;
}


function clear(id) {
if (id === 'del') {
  display.value = '0';
  MemoryNewNumber = true;
} else if (id === 'ac') {
  display.value = '0';
  MemoryNewNumber = true;
  MemoryPendingOperation = '';
  MemoryCurrentNumber = 0;
};
}

function sqr() {
  display.value = Math.sqrt(parseFloat(display.value));
}

function sign() {
  display.value = -1*(display.value);
}