/**
 *
 */
$(function(){
    var nowing = 0;  /*定义一个变量来控制图片的显示*/
    var mytimer = null; /*定义一个定时器*/

    function autoplay(){   /*定义一个自动播放的函数*/
        if(nowing < $(".slider .slider-ul li").length-1){
            nowing++;
        }else {
            nowing = 0;
        }
        $(".slider .slider-ul li").eq(nowing-1).animate({"opacity":0},2000);
        $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},2000);

        //小圆点的同步
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    }
    mytimer = setInterval(autoplay,3000);

    //鼠标进入的时候显示左右按钮
    $(".slider").mouseenter(function(){
        $(".arrow").css("display","block");
        clearInterval(mytimer);
    })
    //鼠标离开的时候 隐藏左右按钮

    $(".slider").mouseleave(function(){
        $(".arrow").css("display","none");
        mytimer = setInterval(autoplay,3000);
    })


    //点击左右按钮的时候的事件
    $(".arrow-r").click(autoplay);//直接执行autoplay函数

    //点击 左按钮的时候
    $(".arrow-l").click(function(){
        if(nowing>0){
            nowing--;
        }else {
            nowing = $(".slider .slider-ul li").length-1;
        }

        if(nowing == $(".slider .slider-ul li").length-1){
            $(".slider .slider-ul li").eq(0).animate({"opacity":0},2000);//隐藏第一个元素
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},2000);
        }else {
            $(".slider .slider-ul li").eq(nowing+1).animate({"opacity":0},2000);//当前元素后面的元素隐藏起来，因为点击的是左按钮
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},2000);//当前元素显示
        }
        //小圆点的变化
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    })

})