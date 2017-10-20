$(function(){
     $(".password>input").on("click",function(event){
        var $target = event.target;
        var $password =$(".password>input").val(); 
            var $next = event.target.parentNode.nextElementSibling;
            // console.log($next);
            $next.textContent ="";
    });
    //验证手机号不为空
    $(".repassword>input").on("click",function(event){
        var $target = event.target;
        var $phone =$(".password>input").val();
        console.log($phone);
        if($phone+""==""){
             var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="密码不能为空";
        }else if(!/^\w{6,}$/.test($phone)){
             var $next = $target.parentNode.previousElementSibling;
            $next.textContent ="密码太短了";
        }else{
            var $msg = $target.parentNode.previousElementSibling;
            $msg.textContent ="";
        }
    });
    $(".submit>input").on("click",function(event){
         //验证手机号是不是为空
         var $msg = $(".msg")[0];
         var $second = $(".second")[0];
        $msg.textContent =""; 
        $second.textContent =""; 

        var $target = event.target;
        var $password =$(".password>input").val();
        var $repassword =$(".repassword>input").val();

        console.log($password);
        console.log($repassword);
        if($password+""=="" || $repassword+""==""){
            var $msg = $(".msg")[0];
            var $second = $(".second")[0];
            $second.textContent ="请输入相应信息";
        }else if($password != $repassword){
             var $msg = $(".msg")[0];
            var $second = $(".second")[0];
            $second.textContent ="两次密码不相同";
        }else{
            var $msg = $(".msg")[0];
            var $second = $(".second")[0];
            $msg.textContent ="";      
            $second.textContent ="";      
        }  
    });
});