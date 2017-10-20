$(function(){
    //模特 选项卡
    $("header .mote .left>span").on("mouseover",function(event){
        var $target = event.target;
        var $result =$target.textContent;
        if($result+""=="模特"){
            var $img =$("nav .img")[0];
            var $three =$("nav .three")[0];
            var $two =$("nav .two")[0];
            $img.setAttribute("style","visibility: visible;");
            $two.setAttribute("style","visibility: hidden;");
            $three.setAttribute("style","visibility: hidden;");
        }else if($result+""=="演绎"){
            var $img =$("nav .img")[0];
            var $three =$("nav .three")[0];
            var $two =$("nav .two")[0];
            $img.setAttribute("style","visibility: hidden;");
            $two.setAttribute("style","visibility: visible;");
            $three.setAttribute("style","visibility: hidden;");
        }else{
            var $img =$("nav .img")[0];
            var $three =$("nav .three")[0];
            var $two =$("nav .two")[0];
            $img.setAttribute("style","visibility: hidden;");
            $two.setAttribute("style","visibility: hidden;");
            $three.setAttribute("style","visibility: visible;");
        }
    });

    //机构 招募
    $(".company .nav>.left").on("mouseover",function(event){
            var $target = event.target;
            var $result =$target.textContent;
            if($result == "机构"){
                var $companys = $(".company .companys")[0];  
                var $zhaomu = $(".company .zhaomu")[0];  
                $companys.setAttribute("style","visibility: visible;");
                $zhaomu.setAttribute("style","visibility: hidden;");
            }else{
                var $companys = $(".company .companys")[0];  
                var $zhaomu = $(".company .zhaomu")[0];  
                $companys.setAttribute("style","visibility: hidden;");
                $zhaomu.setAttribute("style","visibility: visible;");
            }
    });
    // 学堂 机构
    $(".news .nav>span").on("mouseover",function(event){
            var $target = event.target;
            var $result =$target.textContent;
            if($result == "学堂"){
                var $study = $(".news .study")[0];  
                var $fun = $(".news .fun")[0];  
                $study.setAttribute("style","visibility: visible;");
                $fun.setAttribute("style","visibility: hidden;");
            }else{
                var $study = $(".news .study")[0];  
                var $fun = $(".news .fun")[0];  
                $study.setAttribute("style","visibility: hidden;");
                $fun.setAttribute("style","visibility: visible;");
            }
    });
    //模特轮播图
    $("nav .four>.center span").on("mouseover",function(event){
        var $target =event.target;
        var $id = $target.id;
        var adr_1 ="../images/0-images/index/index_22.png";
        var adr_2 ="../images/0-images/index/index_18.png";
        var adr_3 ="../images/0-images/index/index_20.png";
        if($id+"" =="one"){
            $("nav .img img")[0].setAttribute("src",adr_1);
            $("nav .img img")[1].setAttribute("src",adr_2);
            $("nav .img img")[2].setAttribute("src",adr_3);
        }else if($id+"" =="two"){
            $("nav .img img")[0].setAttribute("src",adr_2);
            $("nav .img img")[1].setAttribute("src",adr_3);
            $("nav .img img")[2].setAttribute("src",adr_1);
        }else if($id+"" =="three"){
            $("nav .img img")[0].setAttribute("src",adr_3);
            $("nav .img img")[1].setAttribute("src",adr_1);
            $("nav .img img")[2].setAttribute("src",adr_2);  
        }else{
            $("nav .img img")[0].setAttribute("src",adr_1);
            $("nav .img img")[1].setAttribute("src",adr_2);
            $("nav .img img")[2].setAttribute("src",adr_3);
        }
    });

    //底下的首页 娱乐 机构等等幻灯片
        $("footer span").on("click",function(){
            var dj =document.getElementsByClassName("bb");
            console.log("dj",dj[0]);
            $(".bb").load("../html/个人中心.html");
            $("footer")[0].setAttribute("style","position: absolute;top: 1000px;");
            console.log( $("footer"));
        })
    // for(var i=0;i<sb.lengt.h;i++){
    //     sb[i].on("click",function(event){
    //         $(".bb").load("../html/个人中心");
    //     });
    // }
})