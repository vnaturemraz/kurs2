
let seasonsGame = function(a){
    if (a==12 || a==1 || a==2){
        alert('Зима');
    }

    else if (a>3 & a<=5){
        alert('Весна');
    }

    else if (a>5 & a<=8){
        alert('Лето');
    }

    else if (a>8 & a<=11){
        alert('Осень');
    }

    else{
        alert('вы что то не то ввели');
    }
}

let wordsGame = function (){
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert (words);
    let answer1 = prompt ("Чему равнялся первый элемент массива?");
    let answer2 = prompt ("Чему равнялся последний элемент массива?");

    if ((words[0].toLowerCase() === answer1.toLowerCase()) && (words[6].toLowerCase() === answer2.toLowerCase() )){
        alert ("Поздравляю, ты угадал!");
    }

    else if ((words[0].toLowerCase() === answer1.toLowerCase()) || (words[6].toLowerCase() === answer2.toLowerCase() )){
        alert ("Вы были близки к победе!");
    }

    else{
        alert ("Вы ответили неверно :(");
    }
}

