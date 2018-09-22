(function(exports) {

  function Peep(id, body, author, authorID, createdAt) {
    this._id = id;
    this._body = body;
    this._author = author;
    this._authorID = authorID
    this._createdAt = createdAt
  }

  exports.Peep = Peep;
})(this);