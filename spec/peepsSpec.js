describe("Peeps", function () {

  var peeps;

  beforeEach(function () {
    peeps = new Peeps(somePeeps);
    var somePeeps = [
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
    peeps = new Peeps(somePeeps);
  });

  describe("returnAll", function () {
    it("returns all the previously fetched Peeps", function () {
      var allThePeeps = peeps.returnAll();
      expect(allThePeeps.length).toEqual(1);
    });
  });

});