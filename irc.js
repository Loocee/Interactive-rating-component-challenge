// button clicks
var btnClicked = false;

$(".btn").click(function () {
var button = $(this);
var value = $(this).html();
var id = $(this).attr("id");
if ($(".btn").hasClass("active")) {
  $(".btn").removeClass("active");
};
$(this).addClass("active");
  $(".rating-text").text("You selected " + value + " out of 5");
btnClicked = true;
});


$(".submit").click(function () {
if (!btnClicked) {
  btnClicked = false;
} else {
  $(".rating-parent").css("display", "none");
  $(".thank-you-parent").css("display", "block");
}
});
