(function(exports) {

  function RegisterView() {
    this._formHTML = '<form id="registerForm"><div><label for="handle">Handle:</label><input id="handleInput" type="text" name="handle" required focus></div><div><label for="password">Password:</label><input id="passwordInput" type="password" name="password" required></div><button type="submit">Register</button></form>'
  }

  RegisterView.prototype.returnHTML = function() {
    return this._formHTML;
  }


  exports.RegisterView = RegisterView;
})(this);
