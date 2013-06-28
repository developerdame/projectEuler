function isPrimeNumber(number) { 
    
    if(number == 2)
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