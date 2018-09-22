document.addEventListener("DOMContentLoaded", function () {
  var controller = new Controller();

  controller.fetchAllPeeps();

  (function reigsterButton() {
    document.getElementById("registerBtn")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        controller.createRegisterView();
      })
  })();

})