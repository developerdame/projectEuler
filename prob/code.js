function reverseNumber(number) {

    var stringNumber = number.toString();
    var numberArray = stringNumber.split('');
    var reverseStringNumber = numberArray.reverse();
    return parseInt(reverseStringNumber.join(''), 10);
}


function isNumberPalindrome(number){

    if (number == reverseNumber(number))
        return true;

    return false;
}

function getHighestPalidromeProduct() {
    var highest = 0;

    for (i = 999; i > 0; i--) {
        
        for (x = 999; x > 0; x--) {

            if (isNumberPalindrome(i * x)) {
                if ((x * i) > highest) {
                    highest = i * x;
                }
            }
        }
    }
    return highest;
}