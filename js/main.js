'use strict';
 let number = parseInt(Math.random() * 100);
    console.log(number);

function guessNumberPlay(number) {

    
    let userNumber = prompt('Угадай число от 1 до 100');
    console.log(userNumber);


          if (userNumber == "") {
            alert('Вы не ввели число!')
            guessNumberPlay(number);
          } 
          if (userNumber === null) {
            return;
          }
        if (isNaN(userNumber)) {
            alert('Введите число!');
          guessNumberPlay(number);
           } else if (userNumber > number) {
          alert('Загаданное число меньше');
          guessNumberPlay(number);
          } else if (userNumber < number) {
            alert('Загаданное число больше');
          guessNumberPlay(number);
          } else if (userNumber == number) {
            alert('Верно, вы угадали загаданное число ' + number);
            guessNumberPlay(number);
          }  
          
          
    };
guessNumberPlay(number);
