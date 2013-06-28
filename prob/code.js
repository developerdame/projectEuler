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

function selectEvenFibonacciNumbers(fibonacciNumbers) {
    var evenFibs = [];
   
    var numberOfEvenNumbers = 0;

    for (i = 0; i < fibonacciNumbers.length; i++) {

        if (fibonacciNumbers[i] % 2 == 0) {
            evenFibs[numberOfEvenNumbers] = fibonacciNumbers[i];
            numberOfEvenNumbers++;     
        }
    }

    return evenFibs;
}

function sum(numbers){

    var total = 0;
    for (i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}