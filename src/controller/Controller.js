(function(exports) {

  function Controller(peeps = new Peeps(), allPeepsView = AllPeepsView) {
    this._peeps = peeps;
    this._allPeepsView = new allPeepsView(this._peeps);
  }

  Controller.prototype.createView = function() {
    var htmlString = this._allPeepsView.returnHTML();

    document.getElementsByClassName("mainBody").innerHTML = htmlString;
    // console.log(element);

    // element.innerHTML = htmlString;
  }

  exports.Controller = Controller;
})(this)