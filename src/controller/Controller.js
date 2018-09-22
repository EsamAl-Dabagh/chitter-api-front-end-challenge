(function(exports) {

  function Controller(peeps = new Peeps(), allPeepsView = AllPeepsView) {
    this._peeps = peeps;
    this._allPeepsView = new allPeepsView(this._peeps);
  }

  

  exports.Controller = Controller;
})(this)