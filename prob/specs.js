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

describe("Get prime factors", function () {

    it("should return 2,2,3 when given the number 12", function () {

        var result = [];

        findFactors(12, result);
        expect(result[0]).toBe(2);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);

    });

    it("should return 5,7,13,29 when given the number 13195", function () {

        var result = [];
        findFactors(13195, result);
        expect(result[0]).toBe(5);
        expect(result[1]).toBe(7);
        expect(result[2]).toBe(13);
        expect(result[3]).toBe(29);
    });

    it("should return the highest factors when given the number 600851475143", function () {

        var result = [];
        findFactors(600851475143, result);
        console.info(result[result.length-1]);
    });
});

