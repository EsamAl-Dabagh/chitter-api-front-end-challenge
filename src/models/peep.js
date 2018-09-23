(function(exports) {

  function Peep(id, body, author, authorID) {
    this._id = id;
    this._body = body;
    this._author = author;
    this._authorID = authorID
  }

  exports.Peep = Peep;
})(this);