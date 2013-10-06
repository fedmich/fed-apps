$(function() {
	$('.input').change( function (){
		calculate();
	});
	$('.input_check').click( function (){
		calculate();
	});
	
	calculate();
});

function calculate(){
	var atv = $('#atv').val();
	var turnover = $('#turnover').val();
	var non_uk = $('#non_uk').val();
	
	var percent_comm = get_percent('#percent_comm');
	var percent_tran = get_percent('#percent_tran');
	
	
	//Start calculation
	
	var dcc;
	if( percent_tran < 0.80){
		dcc = ( turnover * non_uk * 0.8 * (1 / 100) ) - (turnover* non_uk * percent_tran * (1 / 100 ) )
	}
	else{
		dcc = '';
	}
	
	var comm_rate =
		( (turnover * non_uk) * (1.3 / 100) )
		- ( (turnover * non_uk) * percent_comm );
	
		
	to_num ( $('#dcc') , dcc);
	to_num ( $('#dcc_rate') , comm_rate);
	
	var merchant = $('#merchant').val();
	var msg1 = 'By continuing with this App, we estimate that you could save approximately:';
	
	switch(merchant){
	case 'Cardnet':
		var msg1 = 'Significant savings at this time are unlikely, as the rates you currently enjoy are extremely competetive. If you would like a full, detailed analysis, please use the PROCEED button below and upload a recent merchant account statement.';
		break;
	default:
		
	}
	
	
	var merch_charge =  $('#merch_charge').val();
	switch(merchant){
	case 'Cardnet':
		var merch_charge_result = merch_charge * (13.5 / 100)
		break;
	default:
		var merch_charge_result = '';
	}
	to_num ( $('#merch_charge_result') , merch_charge_result );
	
	
	msg2 = "Additional DCC Revenue is unlikely as your conversion rates are already excellent"
	if(percent_tran<0.80){
		msg2 = "With conversion maximisation, you should be generating extra DCC revenue of at least:";
	}
	
	msg3 = "A higher DCC commission rate is possible, but unlikely. To find improved offers, use the PROCEED button below"
	if( percent_comm<0.103){
		msg3 = "The DCC commission rate you receive is not as high as it could be. Bringing it in line with the best rates offerd to similar sized businesses of your type would generate extra revenure of:"
	}
	
	var clear_pay = $('#clear_pay').val();
	msg4 = "As you already receive next day settlement, there is no margin for improving settlement times."
	if( clear_pay ){
		msg4 = "Faster settlement times could certainly be arranged for you. To receive a concrete offer including improved settlement periods, use the PROCEED button below"
	}
	
	var bUnchecked = false;
	if( ! get_check('#bool7') ){
		bUnchecked = true;
	}
	if( ! get_check('#bool6') ){
		bUnchecked = true;
	}
	if( ! get_check('#bool5') ){
		bUnchecked = true;
	}
	if( ! get_check('#bool4') ){
		bUnchecked = true;
	}
	if( ! get_check('#bool3') ){
		bUnchecked = true;
	}
	if( ! get_check('#bool2') ){
		bUnchecked = true;
	}
	if( ! get_check('#bool1') ){
		bUnchecked = true;
	}
	
	if( bUnchecked ){
		msg5 = "Improving the Management Information System tools you receive could bring significant benefits. Better MIS are available in the market. To generate an offer which includes improved MIS, use the PROCEED button below."
	}
	else{
		msg5 = "Your MIS is fit for purpose. Improvements may be possible, however, and to generate an offer which includes state of the art MIS, use the PROCEED button below."
	}
	
	
	$('#msg1').html( msg1 );
	$('#msg2').html( msg2 );
	$('#msg3').html( msg3 );
	$('#msg4').html( msg4 );
	$('#msg5').html( msg5 );
	
}

function get_percent( css  ){
	var v = $( css ).val();
	v = v.replace('%','');
	v = (v * 1 ) / 100;
	return v;
}
function get_check( css  ){
	var o = $( css );
	if(! o.length){
		return false;
	}
	var v = $( css ).get(0).checked;
	return v;
}

function to_num ( obj, v , decimals , curr ){
	if(decimals!=0){
		decimals = 2;
	}
	if( curr !=''){
		curr = '$';
	}
	
	obj.html( '...' );
	if(! v){
		obj.html( '$0' );
		return false;
	}
	obj.html( curr + addCommas( v.toFixed(decimals) ) );
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

