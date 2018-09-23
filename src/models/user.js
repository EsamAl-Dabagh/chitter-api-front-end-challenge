(function(exports) {

  function User(id, handle){
    this._id = id;
    this._handle = handle;
  }

  User.prototype.returnID = function() {
    return this._id;
  }

  User.prototype.returnHandle = function() {
    return this._handle;
  }

  exports.User = User;
})(this);