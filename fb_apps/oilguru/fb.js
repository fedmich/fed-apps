$(function() {
	
	
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	
	$('.job_tbl a').click(function(){
		$('.like_gate').fadeIn('fast');
	});
	$('#close_gate').click(function(){
		$('.like_gate').fadeOut('fast');
	});

	$('#category').change(function(){
		console.log( $('#category').val() );
		load_jobs( $('#category').val() )
	});

});

function load_jobs( cat ){
	var oTbl = $('#job_listing');
	oTbl.html('<img src="img/loading.gif" />Loading... ');
	var url = 'list.php' + ( cat ? '?cat='+cat : '' ) ;
	$.get( url, '', function (data){
		oTbl.html( data );
	} );
}