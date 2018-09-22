(function (exports) {

  function Controller(peeps = new Peeps(), allPeepsView = AllPeepsView) {
    this._peeps = peeps;
    this._allPeepsView = new allPeepsView(this._peeps);
  }

  Controller.prototype.createView = function () {
    var htmlString = this._allPeepsView.returnHTML();

    document.getElementById("mainBody").innerHTML = htmlString;
  }

  Controller.prototype.refreshPeeps = function () {
    return this._peeps.fetchAllPeeps();
  }

  exports.Controller = Controller;
})(this)