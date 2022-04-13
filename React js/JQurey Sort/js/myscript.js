var students = ["Mumtaz", "Saad", "Habib"];
$(function () {
  console.log("Script loaded");
  populate();
  $("#sortBtn").click(sort);
});

function populate() {
  $("#listdiv").html("");
  for (let i = 0; i < students.length; i++) {
    $("#listdiv").append("<li>" + students[i] + "</li>");
  }
}
function sort() {
  students.sort();
  populate();
}
