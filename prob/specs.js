describe("Create correct fibonacci sequence", function () {
    it("should return 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 given the number 10 ", function () {

        var result = createFibonacciSequence(10);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(5);
        expect(result[4]).toBe(8);
        expect(result[5]).toBe(13);
        expect(result[6]).toBe(21);
        expect(result[7]).toBe(34);
        expect(result[8]).toBe(55);
        expect(result[9]).toBe(89);

    });

    it("should not exceed a return of 4 million", function () {

        var result = createFibonacciSequence(100);
        expect(result[result.length - 1]).toBeLessThan(4000000);
    });

    it("should have a final number of 3524578 when passed 100 ", function () {

        var result = createFibonacciSequence(100);
        expect(result[result.length - 1]).toBe(3524578);
    });
});

describe("Select all even fibonacci numbers", function () {

    it("should return 2, 8, 34, given the sequence 1, 2, 3, 5, 8, 13, 21, 34, 55, 89", function () {

        var result = selectEvenFibonacciNumbers([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
        expect(result[0]).toBe(2);
        expect(result[1]).toBe(8);
        expect(result[2]).toBe(34);        

    });

});

describe("Add sequence together", function () {

    it("should return 44 given the sequence 2, 8, 34", function () {

        var result = sum([2, 8, 34]);
        expect(result).toBe(44);      

    });

});

describe("Getting the sum for a sequence that is no larger than 4 million", function () {

    it("should return the answer for project euler", function () {

        var sequence = createFibonacciSequence(100);
        var evenNumbers = selectEvenFibonacciNumbers(sequence);
        var result = sum(evenNumbers);
        console.info(result);

    });

});