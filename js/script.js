// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});
$(function(){
    $('#nav a').on('click',function(){
        $('#nav').toggleClass('-active');
        $('#nav-btn').toggleClass('-active');
    });
});

$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

// animation / wow.js
// ==================================================
$(function(){
    new WOW().init();
});