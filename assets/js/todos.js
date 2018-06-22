/*$("li").click(function(e) {
  // if ($(this).css("color") === "rgb(128, 128, 128)") {
  //   $(this).css({ color: "black", textDecoration: "none" });
  // } else {
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // }
  $(this).toggleClass("completed");
  e.stopPropagation();
});*/

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  e.stopPropagation();
});
// $("span").click(function(event) {
//   // alert("clicked span");
//   $(this)
//     .parent()
//     .fadeOut(500, function() {
//       $(this).remove();
//     });
//   event.stopPropagation();
// });
// $("ul").click(function() {
//   alert("clicked ul");
// });
// $("#container").click(function() {
//   alert("clicked container div");
// });
// $("body").click(function() {
//   alert("clicked body");
// });
// $("html").click(function() {
//   alert("clicked html");
// });
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>X<span> " + todoText + "</li>");
  }
});
