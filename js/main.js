$( document ).ready(function() {
	var removeHeader = function(){
		if($(window).width() < 768){
			$(".page-header").hide();
		}else{
			$(".page-header").show();
		}
	};	

	$(window).resize(removeHeader);
	removeHeader();

});