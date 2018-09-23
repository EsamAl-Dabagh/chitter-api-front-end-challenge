document.addEventListener("DOMContentLoaded", function () {
  var controller = new Controller();

  controller.fetchAllPeeps();

  (function reigsterButton() {
    document.getElementById("registerBtn")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        controller.createRegisterView();
        submitButton();
      })
  })();

  function submitButton() {
    document.getElementById("registerForm")
      .addEventListener("submit", function(event){
        event.preventDefault();
        var handle = document.getElementById("handleInput").value;
        var password = document.getElementById("passwordInput").value;
        
        controller.createUser(handle, password);
        controller.fetchAllPeeps();
      })
  }

})