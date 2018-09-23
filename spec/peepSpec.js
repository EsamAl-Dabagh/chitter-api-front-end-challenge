describe("Peep", function () {

  var peep;
  var id = 32;
  var body = "This is a peep";
  var author = "ThisIsAName";
  var authorID = 228;

  beforeEach(function () {
    peep = new Peep(id, body, author, authorID);
  });

  it("instantiates with an id", function () {
    expect(peep._id).toBeDefined();
  });
  
  it("instantiates with a body", function () {
    expect(peep._body).toBeDefined();
  });
  
  it("instantiates with an author", function () {
    expect(peep._author).toBeDefined();
  });
  
  it("instantiates with an authorID", function () {
    expect(peep._authorID).toBeDefined();
  });

});