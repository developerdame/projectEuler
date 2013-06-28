function isMultiple(numberToCheck, multipleToCheckFor) {

    return (numberToCheck % multipleToCheckFor) == 0;    
}

function AddMultiples(maxNumber, arrayOfMultiples) {

    var result = 0;

    for (var i = 1; i < maxNumber; i++) {

        for (y = 0; y < arrayOfMultiples.length; y++) {

            if (isMultiple(i, arrayOfMultiples[y])) {
                result = result + i;
                break;
             }            
        }
    }
    console.info(result);

    return result;
}
