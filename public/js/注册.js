$(function(){
    //手机号输入时候的相关事件
    //1 鼠标移动到上面 框就就会变颜色
    $(".input:nth-of-type(2)").on("click",function(event){
        var $tar = event.target;
        
    });
    $(".input:nth-of-type(2)").on("mouseleave",function(event){
        var result =$(".input:nth-of-type(2)>input").val();
        if(!/\d{11}/.test(result)){
           var $target = event.target; 
           var $span =$target.parentNode.nextElementSibling;
            $span.textContent ="输入不合法"
        }
    });
    //验证码输入时的相关事件
    $(".input:nth-of-type(3)").on("click",function(event){
        var $target = event.target;
        var $phone =$(".input:nth-child(2)>input").val();
        if($phone ==""){
            var $span =$target.parentNode.previousElementSibling;
            $span.textContent ="输入不能为空"
        }
    });
    //设置密码
    $(".input:nth-of-type(3)").on("click",function(event){
        var $target = event.target;
        var $phone =$(".input:nth-child(3)>input").val();
        if($phone ==""){
            var $span =$target.parentNode.previousElementSibling;
            $span.textContent ="输入不能为空"
        }
    });
});