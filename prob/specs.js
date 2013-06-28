describe("Checking Multiples", function () {
    it("is a multiple of the number", function () {
        var x = 3;
        var result = isMultiple(6, x);
        expect(result).toBe(true);
    });
    it("is not a multiple of the number", function () {
        var x = 4;
        var result = isMultiple(6, x);
        expect(result).toBe(false);
    });
});

describe("Adding Multiples", function () {
    it("adds the correct multiples", function () {
        var result = AddMultiples(10, [3]);
        expect(result).toBe(18);
    });
});

describe("Adding Multiples", function () {
    it("sums the multiples 3 and 5 in 16", function () {
        var result = AddMultiples(16, [3,5]);
        expect(result).toBe(60);
    });
});

describe("Adding Multiples", function () {
    it("sums the multiples 3 and 5 in 1000", function () {
        var result = AddMultiples(1000, [3, 5]);
    });
});

