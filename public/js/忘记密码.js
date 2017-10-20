$(function(){
    //验证手机号合不合法
    $(".phone>input").on("click",function(event){
        var $next = event.target.parentNode.nextElementSibling;
        $next.textContent ="";
    });
    //验证手机号不为空
    $(".yanzhengma>input").on("click",function(event){
        var $target = event.target;
        var $phone =$(".phone>input").val();
        console.log($phone);
        if($phone+""==""){
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="手机号不能为空";
        }else if(!/^\d{11}$/.test($phone)){
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="手机号不合法";
        }else{
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="";
        }
    });
    $(".yanzhengma>span").on("click",function(event){
         //验证手机号是不是为空
         var $target = event.target;
        var $phone =$(".phone>input").val();
        console.log($phone);
        if($phone+""==""){
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="手机号不能为空";
        }else if(!/^\d{10}\d$/.test($phone)){
             var $next = $target.parentNode.previousElementSibling;
            $next.textContent ="手机号不合法";
        }else{
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="";
            //发送验证码之后倒数60秒
            var $next = event.target.parentNode.nextElementSibling;
            console.log("xiayige",$next);
            var scend =60;
            var id = window.setInterval(function(event){
                if(scend ==0){
                    window.setInterval(id);
                }else{
                    var ss="重新发送:"+scend+"秒";
                    $next.textContent=ss;
                    scend--;
                }      
            },1000);
            //按钮也会出现
            $(".submit")[0].setAttribute("style","visibility:visible");

        }
        
        
    });

});