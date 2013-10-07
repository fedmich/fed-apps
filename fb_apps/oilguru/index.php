<?php
	if(! empty($_REQUEST["signed_request"])) {
		
    	function parse_signed_request($signed_request) {
			list($encoded_sig, $payload) = explode('.', $signed_request, 2);
			$data = json_decode(base64_url_decode($payload), true);

			return $data;
		}

		function base64_url_decode($input) {
			return base64_decode(strtr($input, '-_', '+/'));
		}
		
		$data = parse_signed_request($_REQUEST["signed_request"]);
		
		$is_fan = empty($data["page"]["liked"]) ? false : true;

	}
	
	
	$ver = 3;
	$content = file_get_contents( dirname(__FILE__)."/index-page.html");
	$content = str_replace( '.css"' , '.css?v=' . $ver . '"',$content);
	$content = str_replace( '.js"' , '.js?v=' . $ver . '"',$content);
	
	if(! empty($is_fan)){
		$content = str_replace( 'var is_fan = false', 'var is_fan = true',$content);
	}
	
	echo $content;