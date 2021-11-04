$(document).ready(function(){
    if($("html").hasClass("mobile")){
        $("#content3").attr("data-stellar-background-ratio", "0.5");
    }
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });
});