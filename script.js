// 1 задание
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
 
//  console.log(people.sort (function (a,b){
    
//     if (a.age > b.age){
//         return 1;
//     }

//     if (a.age < b.age){
//         return -1;
//     }

//     return 0;
//  }))

// 2 задание 

// function isPositive(number) {
//     return (number > 0);
// }

// function isMale(item) {
//     return item.gender === 'male';
// }

// function filter(arr, ruleFunction) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (ruleFunction(arr[i])) {
//             output.push(arr[i]);
//         }
//     }
//     return output;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//3 задание

// const timer = () => {
    
//     const interval = setInterval(() => {
//         let time = new Date ();
//         console.log(time);
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//     }, 30000 )
// };

// timer();

// 4 задание

// function delayForSecond(callback) {
 
//   setTimeout(function(){
//     callback()
//   }, 1000)
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// 5 задание

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'))