


describe("function centsToDecimals", function(){
    it("Should convert value from cents to floating point number with 2 decimals", function(){
        expect(centsToDecimals(149)).toBe(1.49);
        expect(centsToDecimals(1999)).toBe(19.99);
        expect(centsToDecimals(25)).toBe(0.25);
        
    });
    it("Should return null, if invoked without any argument", function(){
        expect(centsToDecimals()).toBeNull();
    });
    it("Should return null, if invoked with an argument that is not a valid number", function(){
        expect(centsToDecimals("hello")).toBeNull();
        expect(centsToDecimals(true)).toBeNull();
        expect(centsToDecimals([1, 2, 3])).toBeNull();
    });
});


