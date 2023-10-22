// 1 задание
// const arr = [1, 5, 4, 10, 0, 3];

// for (const item of arr) {
//     if (item === 10) {
//         console.log(item);
//         break;
//     }
//     console.log(item);
// }

// 2 задание
// const arr = [1, 5, 4, 10, 0, 3];
// let arrSearch = arr.indexOf(4);
// console.log(arrSearch);

// 3 задание

// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

// 4 задание

// let arr =[];
// for (let i=0; i < 3; i++){
//     arr[i] = [];
//     for (let j = 0; j < 3; j++){
//         arr[i].push(1);
//     }
// }
// console.log(arr);

// 5 задание 

// let arr = [1, 1, 1];

// for ( let i = 0; i < 3; i++){
//     arr.push(2);
// }

// console.log(arr);

// 6 задание
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
// console.log(arr);

//7 задание
// const arr = [9, 8, 7, 6, 5];
// if (arr.includes(Number(prompt(`Угадай число`)))) {

//     alert(`Угадал`)

// } else {

//     alert(`Не угадал`)

// }

//8 задание

// let a = 'abcdef';
// let aMass = Array.from(a);
// aMass.reverse();
// console.log(aMass.join(''));

//9 задание

// let arr = [[1, 2, 3,],[4, 5, 6]];
// console.log(arr.flat());

//10 задание

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0
// for ( let i = 0; i < (arr.length-1); i++){
//     sum = arr[i] + arr[i+1];
//     console.log(sum);
// }

//11 задание
// let arr = [1, 3, 5, 7]
// let quad = function (){
//     let result = arr.map(item => (item**2));
//     console.log(result)
// }

// quad(arr);

//12 задание

// const arr12 = ["слово", "", "слог", "длинное предложение", "буква"];

// const getLengthWords = function (arr) {
//   let lengthArr = arr.map(el => el.length);
//   return lengthArr;
// };

// console.log(getLengthWords(arr12));

//13 задание

// const arr = [-25, 25, 0, -1000, -2];
// const arrNeg = []
// const filterPositive = function () {
//     for (i=0; i < arr.length; i++){
//         if (arr[i]<0){
//             arrNeg.push(arr[i]);
//         }
//     }
//     console.log(arrNeg)
// }

// filterPositive(arr)