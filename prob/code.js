function isPrimeNumber(number) {

    if (number == 2 || number % 2 == 0)
        return true;

    for (i = 2; i < number; i++) {

        if (number % i == 0)
            return false;
    }
    return true;
}

function isDivisableByNumber(number, divideByNumber) {

    return number % divideByNumber == 0;
}

function findFactors(number, array) {

    if (number == 1)
        return array;

    for (i = 2; i <= number; i++) {
        
        if (isDivisableByNumber(number, i)) {
        
            if (isPrimeNumber(i)) {
        
                array.push(i);
                findFactors(number / i, array);
                break;
             }
        }      

    }
}


