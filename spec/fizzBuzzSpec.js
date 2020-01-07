describe("fizzBuzz", function() {

    describe("FizzBuzz test", function() {
        it("should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        })
        it("should return Fizz", function() {
            expect(fizzBuzz(9)).toBe("Fizz");
        })
        it("should return Buzz", function() {
            expect(fizzBuzz(20)).toBe("Buzz");
        })
        it("should return number not divisible by 3 or 5", function() {
            expect(fizzBuzz(31)).toBe(31);
        })
    })
})