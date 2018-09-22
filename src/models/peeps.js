(function(exports) {

  function Peeps() {
    this._allPeeps;
  }

  Peeps.prototype.fetchAllPeeps = function() {

    var allPeeps = [];

    fetch("https://chitter-backend-api.herokuapp.com/peeps")
      .then(function(response) {
        return response.json();
      })
      .then(function(peeps) {
        peeps.forEach(function(peep) {
          allPeeps.push(peep);
        });
    });
    this._allPeeps = allPeeps;
  }

  Peeps.prototype.returnAll = function() {
    return this._allPeeps;
  }


exports.Peeps = Peeps;
})(this);