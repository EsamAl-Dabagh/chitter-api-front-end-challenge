describe("Controller", function() {

  // MOCKS
  function PeepsDouble() {
    this._allPeeps = [
      {
        "id": 34,
        "body": "my first peep :)",
        "created_at": "2018-09-21T17:40:13.661Z",
        "updated_at": "2018-09-21T17:40:13.661Z",
        "user": {
          "id": 231,
          "handle": "ThisIsAName"
          },
        "likes": []
      }
    ];
  }

  PeepsDouble.prototype.returnAll = function() {
    return this._allPeeps;

  }


  function AllPeepsViewDouble() {}

  AllPeepsViewDouble.prototype.returnHTML = function() {
    return "<div class='peep'><p class='body'>my first peep :)</p><p class='author'>Posted by: ThisIsAName</p></div>"
  }

  

  // SET UP
  var controller;

  beforeEach(function() {
    controller = new Controller(new PeepsDouble(), AllPeepsViewDouble);
  });


  // TESTS
  it("instantiates with an instance of the Peeps model", function() {
    expect(controller._peeps).toBeDefined();
  });
  
  it("instantiates with an instance of AllPeepsView", function() {
    expect(controller._allPeepsView).toBeDefined();
  });

  describe("createView", function() {
    it("updates the page with contents of html string", function() {
      controller.createView();
      var item = document.getElementById("mainBody");

      expect(item.innerHTML).toContain("my first peep :)");
    });
  });
})