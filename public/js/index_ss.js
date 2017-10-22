$(function(){

	// “模特” “演绎” “专业”三个模块点击之后的切换
	$('header .top_two .scroll>div').on('click',function(event){
		var id = +$(this).eq(0).attr("id");
		var dd = $(".content .girls>div").toArray();


		//首先要把“模特” “演绎” “专业” 的class改变为hidden
		$(".content .girls>div").toArray().forEach(function(item,index){
			item.setAttribute('class',"hidden");
		});	
		//点中的那一个获取到的id值  .content .girls>div相对应的模块就会改变class为mote
		$(".content .girls>div").eq(id).attr('class','mote');


		//点击之后 改变css样式  改变字体颜色为橙色
		$('header .top_two .scroll>div').eq(0).css('color','#fff');
		$('header .top_two .scroll>div').eq(1).css('color','#fff');
		$('header .top_two .scroll>div').eq(2).css('color','#fff');	
		$(this).eq(0).css('color','#ff9a64');
	});
		//模拟点击事件    一开始默认点击的就是第一个 也就是“模特”
		$('header .top_two .scroll>div').eq(0).trigger('click');

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

	// 图片的橙色框框自动轮播	每隔一秒种就向右切换
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


    //“模特” “演绎” “专业”三个模块对应下的四组图片的轮播  6秒跳一次
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