(function(exports) {

  function Peeps(peeps) {
    this._allPeeps = peeps;
  }

  // Peeps.prototype.fetchAllPeeps = function() {

  //   var allPeeps = [];

  //   fetch("https://chitter-backend-api.herokuapp.com/peeps")
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(peeps) {
  //       peeps.forEach(function(peep) {
  //         allPeeps.push(peep);
  //       });
  //   });
  //   this._allPeeps = allPeeps;
  // }

  Peeps.prototype.returnAll = function() {
    return this._allPeeps;
  }

  Peeps.prototype.updatePeeps = function(newPeeps) {
    this._allPeeps = newPeeps;
  }

exports.Peeps = Peeps;
})(this);