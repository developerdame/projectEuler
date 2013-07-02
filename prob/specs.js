describe("Reverse order of numbers", function () {

    it("should return 4321 given the number 1234", function () {

        var result = reverseNumber(1234);

        expect(result).toBe(4321);
    });

    it("should return 1001 given the number 1001", function () {

        var result = reverseNumber(1001);

        expect(result).toBe(1001);
    });
});

describe("Check if number is palidrome", function () {

    it("should return true given the number 1001", function () {

        var result = isNumberPalindrome(1001);

        expect(result).toBe(true);
    });

    it("should return false given the number 1234", function () {

        var result = isNumberPalindrome(1234);

        expect(result).toBe(false);
    });
});