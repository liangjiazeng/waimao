$(function(){
	$('header .top_two .scroll>div').on('click',function(event){
		var id = +$(this).eq(0).attr("id");
		var dd = $(".content .girls>div").toArray();

		$(".content .girls>div").toArray().forEach(function(item,index){
			item.setAttribute('class',"hidden");
		});	
		$('header .top_two .scroll>div').eq(0).css('color','#fff');
		$('header .top_two .scroll>div').eq(1).css('color','#fff');
		$('header .top_two .scroll>div').eq(2).css('color','#fff');
		$(".content .girls>div").eq(id-1).attr('class','mote');
		// $(".content .girls>div").eq(id-1).css('background','#ff9a64');
		$(this).eq(0).css('color','#ff9a64');
		// $(".content .girls>div").eq(id-1).attr('class',"hidden");
	});

	$(this).on('click','.mote .small_line>div',function(event){
		var div = $('.content .girls .mote>div');
		var id = +$(this).eq(0).attr("id");
		for(var i=0;i<4;i++){
			$('.content .girls .mote>div').eq(i).attr('class',"no_show");
		}
		for(var i=0;i<4;i++){
			$('.mote .small_line>div').eq(i).attr('class','');
		}
		$('.content .girls .mote>div').eq(id).attr('class','show');
		$(this).attr('class','sb');
	});

	// 自动轮播
		var shows = $('.content .girls .mote>div').toArray();
		var lines = $('.mote .small_line>div').toArray();
		var address_mote =['./images/0-images/index/index_22.png','./images/0-images/index/index_20.png','./images/0-images/index/index_18.png'];
		var address_yanyi =['./images/0-images/num_1.jpg','./images/0-images/num_2.jpg','./images/0-images/num_3.jpg'];
		var address_zhuanye =['./images/0-images/cos_1.jpg','./images/0-images/cos_2.jpg','./images/0-images/cos_3.jpg'];

		var sum = 0;
	var id = setInterval(function(){
		 $('.content .girls .mote .show>div').toArray().forEach(function(item,index){
		 	item.setAttribute("class","sb");	
		 });
		 $('.content .girls .mote .show>div').eq(sum).attr("class","mote1");		 
		 sum++;
		 //重头来一遍
		 if(sum==3){
		 	sum=0;
		 }
	},1000);


		var sms =0;
	var ids = setInterval(function(){
		for(var i=0;i<4;i++){
			$('.content .girls .mote>div').eq(i).attr("class","no_show");
		}
		 for(var i=0;i<4;i++){
			$('.content .girls .mote .small_four .small_line>div').eq(i).attr("class","sbs");
		}
		 $('.content .girls .mote>div').eq(sms).attr("class","show"); 
		 $('.content .girls .mote .small_four .small_line>div').eq(sms).attr("class","sb");		 
		 sms++;
		 //重头来一遍
		 if(sms==4){
		 	sms=0;
		 }
	},6000);


	//机构 招募
    $(".company .nav>.left").on("mouseover",function(event){
            var $target = event.target;
            var $result =$target.textContent;
            if($result == "机构"){
                var $companys = $(".company .companys").eq(0).css('display','block');  ;  
                var $zhaomu = $(".company .zhaomu").eq(0).css('display','none'); 
            }else{
                var $companys = $(".company .companys").eq(0).css('display','none');  ;  
                var $zhaomu = $(".company .zhaomu").eq(0).css('display','block');  
               ;
            }
    });
})