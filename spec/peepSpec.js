describe("Peep", function () {

  var peep;
  var id = 32;
  var body = "This is a peep";
  var author = "ThisIsAName";
  var authorID = 228;
  var createdAt = "2018-09-21T17:40:13.661Z";

  beforeEach(function () {
    peep = new Peep(id, body, author, authorID, createdAt);
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
  
  it("instantiates with a createdAt date", function () {
    expect(peep._createdAt).toBeDefined();
  });

});