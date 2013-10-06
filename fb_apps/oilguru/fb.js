$(function() {
	
	
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	
	$('.job_tbl a').click(function(){
		$('.like_gate').fadeIn('fast');
	});
	$('#close_gate').click(function(){
		$('.like_gate').fadeOut('fast');
	});

	$('#category').change(function(){
		//console.log( $('#category').val() );
		$('#search').val('');
		load_jobs( $('#category').val() )
	});

	load_jobs( '' );
	$('#form1').submit( function (){
		var s = $('#search').val();
		load_jobs( '', s );

		return false;
	});
});

function load_jobs( cat , search ){
	var oTbl = $('#job_listing');
	oTbl.html('<img src="img/loading.gif" />Loading... ');
	if( cat ){
		var url = 'list.php' + ( cat ? '?cat='+cat : '' ) ;
	}
	else{
		var url = 'list.php' + ( search ? '?search=' + search : '' ) ;
	}
	$.get( url, '', function (data){
		oTbl.html( data );

		FB.Canvas.setAutoGrow();
	});
}