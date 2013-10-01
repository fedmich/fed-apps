$(function() {
	
	
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	
	$('.job_tbl a').click(function(){
		$('.like_gate').fadeIn('fast');
	});
	$('#close_gate').click(function(){
		$('.like_gate').fadeOut('fast');
	});
});