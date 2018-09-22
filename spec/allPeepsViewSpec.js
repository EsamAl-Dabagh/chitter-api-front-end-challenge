describe("allPeepsView", function() {

  function PeepsDouble() {
    this._allPeeps = [
      {
        "id": 34,
        "body": "my first peep :)",
        "created_at": "2018-09-21T17:40:13.661Z",
        "updated_at": "2018-09-21T17:40:13.661Z",
        "user": {
          "id": 231,
          "handle": "YuuuuSeeeer"
          },
        "likes": []
      }
    ];
  }

  var peepsView;

  beforeEach(function() {
    peepsView = new AllPeepsView(new PeepsDouble());
  });

  it("instantiates with an instance of Peeps", function() {
    expect(typeof(peepsView._peeps)).toEqual("object")
  });

});