(function (exports) {

  function Controller(peeps = Peeps, allPeepsView = AllPeepsView, reigsterView = new RegisterView()) {
    this._peeps = new peeps();
    this._allPeepsView = new allPeepsView(this._peeps);
    this._registerView = reigsterView;
    this._user = User;
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

  Controller.prototype.createRegisterView = function () {
    var htmlString = this._registerView.returnHTML();
    document.getElementById("mainBody").innerHTML = htmlString;
  }

  Controller.prototype.createUser = function (handle, password) {
    var url = "https://chitter-backend-api.herokuapp.com/users";
    var data = {"user": {"handle":handle, "password":password}}
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(function(res) {
      return res.json()
    }).then(function(response) {
      var userID = response.id;
      var userHandle = response.handle;

      new User(userID, userHandle);
    })
  }

  exports.Controller = Controller;
})(this)