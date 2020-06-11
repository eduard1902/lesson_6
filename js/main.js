'use strict';

function guessNumberPlay() {
    let userNumber 

    while (true) {

        let userNumber = prompt('Угадай число от 1 до 100');

        if (userNumber == "") {
            alert('Вы не ввели число!')
            continue;
          }
        if (!userNumber) break;

        let number = parseInt(Math.random() * 100);

        console.log(number);

        if (isNaN(userNumber)) {
            alert('Введите число!');
          }else if (userNumber > number) {
            alert('Загаданное число меньше');
          }else if (userNumber < number) {
            alert('Загаданное число больше');
          }else if (userNumber == number) {
            alert('Верно, вы угадали загаданное число ' + number);
          }

        }
    };
guessNumberPlay();
