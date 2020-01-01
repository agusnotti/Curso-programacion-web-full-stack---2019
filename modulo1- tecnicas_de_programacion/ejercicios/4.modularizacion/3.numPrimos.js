for (let num = 2; num < 1000; num++) {
    if (esPrimo(num)){
        console.log(num)
    }
}

function esPrimo(num) { 
    for (let i = 2; i < num; i++) {
        if (num % i == 0){
            return false;
        }
    }
    return true;
}
