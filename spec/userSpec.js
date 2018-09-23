describe("User", function() {

  var user;

  beforeEach(function() {
    user = new User(1, "ThisIsAName");
  });

  it("instantiates with an ID", function() {
    expect(user._id).toEqual(1);
  })
  
  it("instantiates with a handle", function() {
    expect(user._handle).toEqual("ThisIsAName");
  })

  describe("returnID", function() {
    it("returns the ID of a user", function() {
      expect(user.returnID()).toEqual(1);
    });
  });
 
  describe("returnHandle", function() {
    it("returns the handle of a user", function() {
      expect(user.returnHandle()).toEqual("ThisIsAName");
    });
  });

});