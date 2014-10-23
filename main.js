$( document ).ready(function() {
	$(".active.carImage").height($(".carousel").height());

	$(window).resize(function(){
		if($(window).width() < 720){
			$(".page-header").hide();
		}else{
			$(".page-header").show();
		}
	})
});