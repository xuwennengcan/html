
$(document).ready(function(){
	$("p").click(function(){
		$(this).fadeOut(1000,function(){
			$(this).fadeIn(1000);
		});
	});
});
