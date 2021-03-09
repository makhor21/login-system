$(document).ready(function () {
  $("#logoutBtn").click(function (e) {
    e.preventDefault();
    let id = $("#inputId").val();
    $.ajax({
      type: "POST",
      url: "/logout",
      data: { id },
      success: function (response) {
        window.location.replace("/");
      },
    });
  });
});
