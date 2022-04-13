$(function() {
    $("#submit").click(function btnclickfnc() {
      $.get("data.txt", function datareadfunction(response) {
        $("#data").empty();
        $("#data").append(response);
        console.log("after")
      });
    });
});



