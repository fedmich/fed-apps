<?php
	include dirname(__FILE__)."/lib/simplepie.php";
			
	
	$cat = empty($_GET['cat'])?'':$_GET['cat'];
	if($cat){
		if( is_numeric($cat)){
			$url = "http://oilguru.org/jobs-3/rss/?category=$cat";
		}
		else{
			$url = "http://oilguru.org/jobs-3/rss/$cat/";
		}
	}
	else{
		$search = empty($_GET['search'])?'':$_GET['search'];
		if($search){
			$url = "http://oilguru.org/jobs-3/rss/?query=$search";
		}
		else{
			//ALL
			$url = "http://oilguru.org/jobs-3/rss/all/";
		}
	}
	$feed = new SimplePie();
	
	$feed->set_feed_url($url);
	$feed->init();
	$feeds=$feed->get_items();
	$cnt=count($feeds);
	if(! $cnt){
		?>
		<div class="">
			No job found...
		</div>
		<?php
		exit();
	}
	?>
	
	<table width="99%" border="0" cellpadding="0" cellspacing="0" class="job_tbl shiny_blue">
		<thead>
		<tr>
			<th width="70" align="center">Company</th>
		    
		  <th>Job</th>
		  <th>Location</th>
		  <th>Date</th>
		</tr>
		</thead>
	<tbody>	
	<?php
	foreach($feeds as $item){
	
		$title = $item->get_title();
		$link = $item->get_link();
		
		$dx = date('M j, Y', $item->get_date('U'));
		?>				
		<tr>
			<?php  /*  
		  <td align="center" class="jlist"><img src="img/companies/logo_williams.png" alt="" width="64" height="36" /></td>
		    */ ?>
		  <td align="center" class="jlist"><img src="img/company_icon.png" alt="" width="64" height="64" /></td>
		  <td class="jlist"><a href="<?=$link;?>" target="_blank" class="job_title"><?=$title;?></a><br />
		  </td>
		  <td class="jlist">???</td>
		  <td class="jlist">
		  <?=$dx;?>
		  </td>
		</tr>	
		<?php
	}
	?>
	
	</tbody>
	</table>
	