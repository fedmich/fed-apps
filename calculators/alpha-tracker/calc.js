/* v0.1 */

$(function() {
	$('#surveyors').val( 2 );
	$('#days').val( 3 );
	$('#rate').val( 800 );
	$('#writeup').val( 4 );
	
	$('.input').change( function (){
		calculate();
	});
	calculate();
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
	
	to_num ( $('#month_cost') , cost , '£' );
	to_num ( $('#month_save') , answer, '£' );
	
	var cost2 = cost * 1.44;	//rate
	var answer2 = answer * 1.44;	//rate
	
	to_num ( $('#month_cost2') , cost2 );
	to_num ( $('#month_save2') , answer );
	
}

function to_num ( obj, v , cur ){
	obj.html( '...' );
	if(! v){
		obj.html( '$0' );
		return false;
	}
	if(! cur){
		cur = '$'
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

