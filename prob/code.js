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