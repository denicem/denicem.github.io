jQuery(document).ready(function($) {
  $("#toggle-mobile-nav").click(function() {
    $("#page").toggleClass("mobile-nav-opened");
  });

  $("#page").click(function(e) {
    var target = e.target;

    if($(target).hasClass("navbar-toggler") || $(target).parent().hasClass("navbar-toggler")) {
      return;  
    }
    $("#page").removeClass("mobile-nav-opened");
  });
})