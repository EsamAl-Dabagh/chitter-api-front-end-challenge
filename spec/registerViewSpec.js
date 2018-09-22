describe("RegisterView", function() {

  var register;

  beforeEach(function() {
    register = new RegisterView();
  });

  describe("returnHTML", function() {
   
   it("to return a string of html", function() {
    var htmlString = '<form><div><label for="handle">Handle:</label><input type="text" name="handle" required focus></div><div><label for="password">Password:</label><input type="password" name="password" required></div></form>'
    
    expect(register.returnHTML()).toEqual(htmlString);
   });
    
  });

});