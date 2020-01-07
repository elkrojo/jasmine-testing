describe("whatCanIDrink", function() {

    describe("Age verification test", function() {
        it("should return incorrect", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })
        it("should return Toddy", function() {
            expect(whatCanIDrink(10)).toBe("Drink Toddy");
        })
        it("should return Coke", function() {
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        })
        it("should return Beer", function() {
            expect(whatCanIDrink(19)).toBe("Drink Beer");
        })
        it("should return Whisky", function() {
            expect(whatCanIDrink(95)).toBe("Drink Whisky");
        })
    })
})