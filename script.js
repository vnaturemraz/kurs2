// 1 задание
// let str = 'asfdafaq';

// str = str.toUpperCase();
// console.log (str);

// 2 задание
// let newStr = [];
// let searchStart = function (strmas, str){
//     for (i = 0; i < strmas.length; i++){
//         if (strmas[i].toLowerCase().startsWith(str.toLowerCase())){
//             newStr.push(strmas[i]);
//         }
//     };
//     console.log(newStr);
// }

// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');

// 3 задание
// let arr = 32.58884;
// console.log(Math.floor(arr));
// console.log(Math.ceil(arr));
// console.log(Math.round(arr));

// 4 задание
// arr = [];
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// 5 задание
// function getRandomInt(minValue, maxValue) { 
 
// return Math.round (Math.random() * (maxValue- minValue)) + minValue;
// }
// console.log(getRandomInt(1, 10));

// 6 задание
// let arrMas = [];
//  function getRandomArrNumbers (arr){
//     for (i=0; i<(Math.floor(arr/2)); i++){
//         arrMas.push(Math.round (Math.random() * arr));
        
//     }
//     return arrMas;
//  }
//  console.log(getRandomArrNumbers(12))

// 7 задание
// function getRandomArrNumbers (minValue, maxValue){
//     return Math.round (Math.random() * (maxValue- minValue)) + minValue;
// }

// console.log(getRandomArrNumbers(45, 50));

//8 задание

// let currentDate = new Date();
// console.log(currentDate);

//9 задание
// let currentDate = new Date();
// let days73 = 73 * 24 * 60 * 60 * 1000;
// let searchDate = +currentDate + days73;
// let dayAfter73 = new Date (searchDate);
// console.log(dayAfter73);

//10 задание
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();

// let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()]; 
// let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

// console.log(fullDate);
// console.log(fullTime);
