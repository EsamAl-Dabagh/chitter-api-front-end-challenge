(function (exports) {

  function Controller(peeps = Peeps, allPeepsView = AllPeepsView) {
    this._peeps = new peeps();
    this._allPeepsView = new allPeepsView(this._peeps);
  }

  Controller.prototype.fetchAllPeeps = function () {
    var allPeeps = [];

    var self = this;

    fetch("https://chitter-backend-api.herokuapp.com/peeps")
      .then(function (response) {
        return response.json();
      })
      .then(function (peeps) {
        peeps.forEach(function (peep) {
          allPeeps.push(peep);
        });
        self._peeps.updatePeeps(allPeeps);
        self.createView();
      });

  }

  Controller.prototype.createView = function () {
    var htmlString = this._allPeepsView.returnHTML();

    document.getElementById("mainBody").innerHTML = htmlString;
  }

  exports.Controller = Controller;
})(this)