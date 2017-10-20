$(function(){
    console.log($(".phone")[0]);
    console.log($(".phone").eq(0).attr("name"));
    //验证手机号合不合法
    $(".phone>input").on("mouseleave",function(event){
        var $target = event.target;
        var $phone =$(".phone>input").val();
        if(!/^\d{10}\d$/.test($phone)){
            var $next = event.target.parentNode.nextElementSibling;
            $next.textContent ="手机号不合法";
        }else{
            var $next = event.target.parentNode.nextElementSibling;
            $next.textContent ="";
        }
    });
    //验证手机号不为空
    $(".password>input").on("click",function(event){
        var $target = event.target;
        var $phone =$(".phone>input").val();
        console.log($phone);
        if($phone==""){
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="手机号不能为空";
        }else if(!/^\d{10}\d$/.test($phone)){
             var $next = event.target.parentNode.nextElementSibling;
            $next.textContent ="手机号不合法";
        }else{
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="";
        }
    });
});