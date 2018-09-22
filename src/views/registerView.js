(function(exports) {

  function RegisterView() {
    this._formHTML = '<form><div><label for="handle">Handle:</label><input type="text" name="handle" required focus></div><div><label for="password">Password:</label><input type="password" name="password" required></div></form>'
  }

  RegisterView.prototype.returnHTML = function() {
    return this._formHTML;
  }


  exports.RegisterView = RegisterView;
})(this);