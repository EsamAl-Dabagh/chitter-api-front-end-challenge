describe("Peeps", function () {

  var peeps;

  beforeEach(function () {
    peeps = new Peeps();
    var fetchDouble = [
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
    spyOn(peeps, "fetchAllPeeps").and.returnValue(fetchDouble);
  });

  // describe("fetchAllPeeps", function () {
  //   it("gets all of the peeps from the API", function () {
      
  //     expect(peeps.fetchAllPeeps()).toBeDefined();
  //   });
  // });

  // describe("returnAll", function () {
  //   it("returns all the previously fetched Peeps", function () {
  //     peeps.fetchAllPeeps();
  //     var allThePeeps = peeps.returnAll();
  //     expect(allThePeeps.length).toBeGreaterThan(1);
  //   });
  // });

});