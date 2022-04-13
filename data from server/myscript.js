$(function () {
  console.log("script loaded");
  loadreceipe();
  // $("#receipediv").click(loadreceipe)
});
function loadreceipe() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    success: getRequestData,
    error:handleerror,
  });
  console.log("receipe loaded");
}
function handleerror(){
 $("#receipediv").empty();
  $("#receipediv").html("error on server");
}

function getRequestData(res) {
    $("#receipediv").empty();
  for (var i = 0; i < res.length; i++) {
    $("#receipediv").append(
      "<div class = recepi><h3>" +
        res[i].title +
        "</h3><p>" +
        res[i].body +
        "</p></div>"
    );
  }
}
