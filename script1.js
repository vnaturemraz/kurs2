
let seasonsGame = function(a){
    if (a==12 || a==1 || a==2){
        console.log('Зима');
    }

    else if (a>3 & a<=5){
        console.log('Весна');
    }

    else if (a>5 & a<=8){
        console.log('Лето');
    }

    else if (a>8 & a<=11){
        console.log('Осень');
    }

    else{
        console.log('вы что то не то ввели');
    }
}

seasonsGame(5);