$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .navigation").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
