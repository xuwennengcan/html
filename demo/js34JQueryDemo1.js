
$(document).ready(function(){
	$("p").click(function(){
		$(this).fadeOut(1000,function(){
			$(this).fadeIn(1000);
		});
	});
});

$(document).ready(function(){
	$("#hide").click(function(){
		$("#hideP").hide();
	});
	$("#show").click(function(){
		$("#hideP").show();
	});
});

$(document).ready(function(){
	$("#toggleClick").click(function(){
		$("#toggleP").fadeToggle('slow');
	});
});
