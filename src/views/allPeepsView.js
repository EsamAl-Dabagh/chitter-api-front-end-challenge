(function(exports) {

  function AllPeepsView(peeps) {
    this._peeps = peeps;
  }

  AllPeepsView.prototype.returnHTML = function() {

    var htmlString = "<div class='peep'>"

    this._peeps.returnAll().forEach(function(peep) {
      htmlString += `<p class='body'>${peep.body}</p><p class='author'>Posted by: ${peep.user.handle}</p>`
    });

    var joinedString = htmlString + "</div>"

    return joinedString;
  }

  exports.AllPeepsView = AllPeepsView;
})(this);