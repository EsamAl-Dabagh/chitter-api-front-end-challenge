(function(exports) {

  function Controller(peeps = new Peeps()) {
    this._peeps = peeps;
  }

  exports.Controller = Controller;
})(this)