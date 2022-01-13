'use strict';

const buttons = document.getElementById('functional');
const resultField = document.getElementById('result');
let par1 = null;
let par2 = null;
let action = null;
const btnClick = (event) => {
  if(event.target !== buttons){
    event.target.classList.toggle('btnClick');
  } // условие на то, не является ли target родителем
}
const concreteBtn = (btn) => {
  if(btn.target !== buttons){ // такое же условие, чтобы не было абракадабры в поле результата)))
    switch(btn.target.textContent) {
      case '±': {
        if(typeof Number(resultField.textContent) === 'number') {
          par1 = Number(resultField.textContent) * -1;
          resultField.textContent = par1;
        } else {
          resultField.textContent = '';
        }
        break;
      }
      case 'C': {
        resultField.textContent = '';
        par1 = null;
        par2 = null;
        break;
      }
      case '0': {
        resultField.textContent === '' ? resultField.textContent += '0.' 
          : resultField.textContent += btn.target.textContent; // если поле пустое то сделать 0.
        break;
      }
      case '.': {
        resultField.textContent === '' ? resultField.textContent += '0.'
          : resultField.textContent += '.';
        break;
      } 
      case '+': {
        if(resultField.textContent !== ''){ // только если поле не пустое
          par1 = Number(resultField.textContent);
          resultField.textContent = btn.target.textContent;
          action = '+';
        }
        break;
      }
      case '−': {
        if(resultField.textContent !== ''){
          par1 = Number(resultField.textContent);
          resultField.textContent = btn.target.textContent;
          action = '-';
        }
        break;
      }
      case '*': {
        if(resultField.textContent !== ''){
          par1 = Number(resultField.textContent);
          resultField.textContent = btn.target.textContent;
          action = '*';
        }
        break;
      }
      case '/': {
        if(resultField.textContent !== ''){
          par1 = Number(resultField.textContent);
          resultField.textContent = btn.target.textContent;
          action = '/';
        }
        break;
      }
      case '=': {
        if(resultField.textContent !== ''){
          par2 = Number(resultField.textContent.slice(1));
          if(action === '+') {
            resultField.textContent = par1 + par2;
          } else if(action === '-'){
            resultField.textContent = par1 - par2;
          } else if(action === '*') {
            resultField.textContent = par1 * par2;
          } else if (action === '/') { 
            resultField.textContent = par1 / par2; 
          }
        }
        break;
      } 
      default: {
        resultField.textContent += btn.target.textContent;
        break;
      }
    }
  }
}

buttons.addEventListener('mousedown', btnClick); // mousedown - чтобы можно было подержать и рассмотреть получше))
buttons.addEventListener('mousedown', concreteBtn);
buttons.addEventListener('mouseup', btnClick);

