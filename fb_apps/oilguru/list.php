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
		<div class="no_job" align="center">
			No job found...
		</div>
		<?php
		exit();
	}
	?>
	
	<table width="99%" border="0" cellpadding="0" cellspacing="0" class="job_tbl gray">
		<thead>
		<tr>
			<th>#</th>
	  	  <th>Job</th>
		  <th>Date</th>
		  <th></th>
		</tr>
		</thead>
	<tbody>	
	<?php
	$ctr = 0;
	foreach($feeds as $item){
		++$ctr;
		if($ctr > 15){
			break;
		}
	
		$title = $item->get_title();
		$link = $item->get_link();
		
		//$dx = date('M j, Y', $item->get_date('U'));
		$dx = date('M j', $item->get_date('U'));
		?>				
		<tr class="<?=$ctr%2==0?'even':'odd';?>">
			<?php  /*  
		  <td align="center" class="jlist"><img src="img/companies/logo_williams.png" alt="" width="64" height="36" /></td>
		    */ ?>
			
			<td width="20" align="center">
			<?=$ctr;?>
			</td>
			
		  <td class="jlist"><a href="<?=$link;?>" target="_blank" class="job_title"><?=$title;?></a><br />
		  </td>
		  <td class="jlist">
		  <?=$dx;?>
		  </td>
		  <td align="center">
		  	<a href="<?=$link;?>" target="_blank" class="button_green">Apply</a>
		  </td>
		</tr>	
		<?php
	}
	?>
	
	</tbody>
	</table>
	