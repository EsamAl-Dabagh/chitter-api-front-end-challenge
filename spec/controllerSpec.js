describe("Controller", function() {

  var controller;

  beforeEach(function() {
    controller = new Controller();
  });

  it("instantiates with an instance of the Peeps model", function() {
    expect(controller._peeps).toBeDefined();
  });
})