describe("RegisterView", function() {

  var register;

  beforeEach(function() {
    register = new RegisterView();
  });

  describe("returnHTML", function() {
   
   it("to return a string of html", function() {
    var htmlString = '<form id="registerForm"><div><label for="handle">Handle:</label><input id="handleInput" type="text" name="handle" required focus></div><div><label for="password">Password:</label><input id="passwordInput" type="password" name="password" required></div><button type="submit">Register</button></form>'
    
    expect(register.returnHTML()).toEqual(htmlString);
   });
    
  });

});