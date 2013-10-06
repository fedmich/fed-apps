<?php
	$ver = 3;
	$content = file_get_contents( dirname(__FILE__)."/index.html");
	$content = str_replace( '.css"' , '.css?v=' . $ver . '"',$content);
	$content = str_replace( '.js"' , '.js?v=' . $ver . '"',$content);
	echo $content;