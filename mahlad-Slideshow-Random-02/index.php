<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Js SlideShow Random</title>
	<link type="text/css" rel="stylesheet" href="../reset.css">
	<link type="text/css" rel="stylesheet" href="style.css">
	<script type="text/javascript" src="../zepto.js" ></script>
	<script type="text/javascript" src="SlideTow.js"></script>
</head>
<body>

	<div class="container">
		<div class="slRnd">
			<?php
				$path='../images/partOf';
				$img_arr=scandir($path);
				$img_inc='jpg,png,gif,jpeg';
				$img_inc=explode(',',$img_inc);
				foreach ($img_arr as $value) {
					$val=explode('.',$value);
					$endF=strtolower(end($val));
					if(in_array($endF, $img_inc)){
						echo "<div class='imgS'><img src='$path/small/$value'></div>";
						
						}
				}

			?>
		</div>
	</div><!--container-->
</body>
</html>