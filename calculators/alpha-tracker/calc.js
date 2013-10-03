/* v0.2 */

$(function() {
	$('#surveyors').val( 2 );
	$('#days').val( 3 );
	$('#rate').val( 800 );
	$('#writeup').val( 4 );
	
	$('.input').change( function (){
		calculate();
	});
	
	calculate();
	
	var ltypes = $('.lbl_rtype');
	ltypes.click( function (){
		ltypes.not( this ).removeClass('active_percentage');
		$( this ).addClass('active_percentage');
	});
});

function calculate(){
	var surveyors = $('#surveyors').val();
	var days = $('#days').val();
	var rate = $('#rate').val();
	var writeup = $('#writeup').val();
	
	var rtype = $('[name=report_type]:checked').val()
	
	var cost = (surveyors * rate) / 2;
	var answer = (
			( ( (surveyors * days ) * 4.33 ) )
			* ( rtype / 100 )
		)
		* ( (writeup / 8) * rate )
		;
	
	var rtype = $('[name=report_type]:checked').val()
	var curr = $('[name=currency_type]:checked').val()
	
	to_num ( $('#month_cost') , cost, curr );
	to_num ( $('#month_save') , answer , curr );
	
}

function to_num ( obj, v , cur ){
	if(! cur){
		cur = '$';
	}
	obj.html( '...' );
	if(! v){
		obj.html( cur + '0' );
		return false;
	}
	obj.html( cur + addCommas( v.toFixed(2) ) );
}
function addCommas(nStr)
{
	var x, x1, x2;
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

