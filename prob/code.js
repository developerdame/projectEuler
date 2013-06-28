function createFibonacciSequence(numbersInSequence){
    var sequence = [];
    var firstPreviousNumber = 0;
    var secondPreviousNumber = 1;

    for (i = 0; i < numbersInSequence; i++) {
        
        var currentNumber = firstPreviousNumber + secondPreviousNumber;

        if (currentNumber > 4000000) {
            return sequence;
        }

        sequence[i] = currentNumber;
        firstPreviousNumber = secondPreviousNumber;
        secondPreviousNumber = sequence[i];        
    }

    return sequence;

}