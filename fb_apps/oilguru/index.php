<?php
	
	var_dump($_REQUEST);
	
	if(! empty($_REQUEST["signed_request"])) {
		var_dump($_REQUEST["signed_request"]);

    	$data = parse_signed_request($_REQUEST["signed_request"]);
		var_dump($data);
		
	    if (empty($data["page"]["liked"])) {
        	echo 'fan';
    	} else {
			echo 'not fan';
    	}

		function parse_signed_request($signed_request) {
			list($encoded_sig, $payload) = explode('.', $signed_request, 2); 
			$data = json_decode(base64_url_decode($payload), true);

			return $data;
		}

		function base64_url_decode($input) {
			return base64_decode(strtr($input, '-_', '+/'));
		}
	}
	
	
	$ver = 3;
	$content = file_get_contents( dirname(__FILE__)."/index.html");
	$content = str_replace( '.css"' , '.css?v=' . $ver . '"',$content);
	$content = str_replace( '.js"' , '.js?v=' . $ver . '"',$content);
	echo $content;