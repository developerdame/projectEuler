describe("Check if number is prime number", function () {

    it("should return true given the number 2", function () {

        var result = isPrimeNumber(2);

        expect(result).toBe(true);
    });
    
    it("should return false given the number 1", function () {

        var result = isPrimeNumber(1);

        expect(result).toBe(true);
    });
   
    it("should return true given the number 3", function () {

        var result = isPrimeNumber(3);
        
        expect(result).toBe(true);
    });

    it("should return false given the number 9", function () {

        var result = isPrimeNumber(9);

        expect(result).toBe(false);
    });

    it("should return true given the number 29", function () {

        var result = isPrimeNumber(29);

        expect(result).toBe(true);
    });
});

describe("Check if number is divisable by number", function () {

    it("should return true given the number 9 is divisable by 3", function () {

    var result = isDivisableByNumber(9, 3);

    expect(result).toBe(true);

});

it("should return false given the number 9 is divisable by 5", function () {

    var result = isDivisableByNumber(9, 5);

    expect(result).toBe(false);

});

});
