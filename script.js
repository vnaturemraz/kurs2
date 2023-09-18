// 1 задание
// let min = (a, b) => {
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }

// console.log (min(3, 10));

// 2 задание
// let resultChet = function (a) {
//     a % 2 == 0 ? alert('Число четное') : alert ('Число нечетное');
// }


// 3.1 задание 
// let square = (a) => a**2;
// console.log(square(4));

// 3.2 задание 
// let square = (a) => {
// 	let result = a**2;
// 	return result; 
// }

// 4 задание
// let answerAge = function () {
//     let age = prompt ('сколько вам лет?');
    
//     if (age > 0 & age <= 12){
//         alert('Привет, друг!');
//     }

//     else if (age > 12){
//         alert('Добро пожаловать!');
//     }

//     else{
//         alert('Вы ввели неправильное значение');
//     }
// }

// answerAge();

// 5 задание
// let numberOrNot = function (a, b) {
//     if (!isNaN(a) & !isNaN(b)) {
//         let result = a*b
//         return result;
//     }

//     else{
//         let result = ('Одно или оба значения не являются числом');
//         return result;
//     }
// }

// console.log(numberOrNot('sdfs',5));

// 6 задание
// let numberOrNot = function (a) {
//     if (!isNaN(a)) {
//         let result = a**3
//         return ( `n в кубе равняется ${result}`);
//     }

//     else{
//         let result = ('Переданный параметр не является числом');
//         return result;
//     }
// }

// console.log(numberOrNot('AFA'));

// 7 задание
// let circle1 = {
//     radius: 10,
//     getArea() {
//         let s = Math.PI * this.radius**2;
//         return s;
//     },
//     getPerimeter() {
//         let p = 2 * Math.PI * this.radius;
//         return p;
//     }
// }

// let circle2 = {
//     radius: 15,
//     getArea() {
//         let s = Math.PI * this.radius**2;
//         return s;
//     },
//     getPerimeter() {
//         let p = 2 * Math.PI * this.radius;
//         return p;
//     }
// }

// console.log(circle1.getPerimeter())
