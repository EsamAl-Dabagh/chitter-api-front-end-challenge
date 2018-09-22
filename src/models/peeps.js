(function (exports) {

  function Peeps(peeps) {
    this._allPeeps = peeps;
  }

  Peeps.prototype.returnAll = function () {
    return this._allPeeps;
  }

  Peeps.prototype.updatePeeps = function (newPeeps) {
    this._allPeeps = newPeeps;
  }

  exports.Peeps = Peeps;
})(this);