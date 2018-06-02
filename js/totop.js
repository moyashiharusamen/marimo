$(function(){
	$("#to-top").hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$("#to-top").fadeIn("slow");
		} else {
			$("#to-top").fadeOut("slow");
		}
	});
	$("#to-top a").click(function(){
		$("html,body").animate({
			scrollTop:0
		},1000);
		return false;
	});
});