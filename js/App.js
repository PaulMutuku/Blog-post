$(document).ready(function(){
  $(".hamburger").click(function() {
    $(".options").slideToggle();
  });
  $(window).scroll(function(){
      if ($(document).scrollTop() > 600) {
           $(".nav").css("background-color", "rgba(210,208,255,1)");

            } else {
           $(".nav").css("background-color", "rgba(210,208,255,0)");
            }
    });
});
