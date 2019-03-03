function textMove () {
    $("#planet-xs").animate({
        top:"+=16.5%"
    }, {
        duration: 2000, 
        complete: function (){
            $(".img-appear")
            .css("display", "visible")
            .animate({
                height:"+=1%",
                width: "+=2%"
            }, 500)
            .animate({
                height:"-=1.3%",
                width: "-=2.3%"
            }, 500)
        }});
    $("#children-xs").animate({top:"-=16.5%"}, 2000, "linear");
}

setTimeout(textMove, 2000);

var page =$("html, body");
page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
    $("#planet-xs").stop(false,true);
    $("#children-xs").stop(false,true);
    $(".img-appear").stop(false,true);
});

$(document).ready(function(){
    $(".hideme").each(function(i){
        var top_of_object = $(this).position().top + 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(top_of_object>bottom_of_window) {
            $(this).animate({'opacity':'0'},0).animate({'margin-top':'3em'});
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        $(".hideme").each(function(i){
            var top_of_object = $(this).position().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if(bottom_of_window>top_of_object) {
                $(this).animate({'opacity':'1'},0).animate({'margin-top':'1.5em'},1000);
            }
        });
    });
});