describe("Calculator", function(){
    //var calc=new Calculator;
    
    
    //this way a new instance of the object will be created for each test
    beforeEach (function(){  
        calc=new Calculator;
    });
    
    describe("Addition test", function() {
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);;
        });
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window,"alert");
            calc.add("test1");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});