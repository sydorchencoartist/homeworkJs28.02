/*
Решить следующие задачи:

1. Написать программу, которая через prompt считывает число 
и выводит в консоль число равное 10% от введенного числа
2. Написать программу, которая получает два числа и выводит наименьшее
3. Написать программу, которая считывает через prompt число 
и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) 
и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, 
или ‘Hi, <name>’, если пользователь несовершеннолетний.
*/

// 1.
const number = prompt("Введите число");
const div = number / 10;
console.log("10% от вашего числа = " + div);    

// 2.
const number1 = prompt("Введите первое число:");
const number2 = prompt("Введите второе число:");

if (number1 < number2) {
  console.log("Наименьшее число: " + number1);
} else if (number1 > number2) {
  console.log("Наименьшее число: " + number2);
} else {
  console.log("Числа равны");
}

// 3.
const userNum = prompt("Введите любое число:");

if (userNum > 100) {
  alert("Число больше 100");
} else if (userNum == 100) {
  alert("Число равно 100");
} else {
  alert("Число меньше 100");
}

// 4.
const userName = prompt("Введите ваше имя:");
const userAge = prompt("Сколько вам лет (в годах)?");

if (userAge >= 18) {
  alert("Hello, " + userName);
} else {
  alert("Hi, " + userName);
}