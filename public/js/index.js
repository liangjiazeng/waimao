$(function(){
	var width = $(window).width();
	var height = $(window).height();
	// pc端
	if(width>768){
		$('.section').height(height-1);
		$('.section').css('display','block');
	}
	// 移动端
	$('.outer').height(height-1);
	$(window).resize(function(){
		// pc端
		var width = $(window).width();
		var height = $(window).height();
		if(width>768){
			$('.section').height(height-1);
			$('.section').css('display','block');
		} else {
			$('.section').height(height-1);
			$('.section').css('display','none');
		}

		// 移动端
		$('.outer').height(height-1);
	});






});