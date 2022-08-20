// button clicks
$(".btn").click(function () {
  var value = $(this).html();
  var id = $(this).attr("id");
  animate(id);
  $(".rating-text").text("You selected " + value + " out of 5");
});

function animate(target) {
    $("#" + target).toggleClass("button-click");
}

$(".submit").click(function () {
$(".rating-parent").css("display", "none");
$(".thank-you-parent").css("display", "block");
});
