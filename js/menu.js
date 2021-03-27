$(window).scroll(function () { 
     if ($(document).scrollTop() > 500 ) {
        $(".fondoNav").css("background", "white");
     } else{
        $(".fondoNav").css("background", "rgba(243, 243, 243, 0.089)");
     }
});
