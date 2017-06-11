gettitleOne();
getDataPage();
// nav_Scroll();

// 显示搜索框
$(".search").click(function(){
    $(".hide_box").toggleClass("show");
})

// 获取标题
function gettitleOne(){
$.ajax({
    url:"http://139.199.192.48:9090/api/getbaicaijiatitle",
    dataType:"jsonp",
    success:function(data){
        var result = template("title",data);
    //    console.log(result);
        $(".m_c_nav_list").html(result);
                            // 导航栏点击变色
                          //注意标签获取标签的格式   
$(".m_c_nav_list li:nth-of-type(1) a").addClass("nav_current"); 
 $(".m_c_nav_list li").click(function(){    
     $(this).children("a").addClass("nav_current").parent().siblings().children("a").removeClass("nav_current");
     $(".coupon_imgs").css("display","none");
 })
 $(".m_c_nav_list li").eq(0).click(function(){
      $(".coupon_imgs").css("display","block");
 })
    }

})
}
//  页面加载时默认拿到第一页数据,以及点击导航获取页面数据
function getDataPage(){
  $.ajax({
            url:"http://139.199.192.48:9090/api/getbaicaijiaproduct?titleid=0",
            dataType:"jsonp",
            success: function(data){              
           var result = template("model",data);           
           $(".main_contain_list ul").html(result);
            $(".m_c_nav_list li").click(function(){
           var list =  ($(this).index())
              var a =  $(this).children("a").text();
              $(".header_p").html(a);
              if(list==0){
                  $(".header_p").html("白菜价");
              }          
                $.ajax({

                    url:"http://139.199.192.48:9090/api/getbaicaijiaproduct?titleid="+list,
                    dataType:"jsonp",
                    success:function(data){
                        var result = template("model",data); 
                        $(".main_contain_list ul").html(result);                 
                    }
                })             
                })     
            }
        })
}
//  页面加载时默认拿到第一页数据
// 导航touch事件
// function nav_Scroll(){
//   var nav_ul = document.querySelector('.m_c_nav ul');
//   var startX = 0;
//   var distanceX = 0;
//   var moveX = 0;
//   var maxX = 0;
//   var minX = document.body.offsetHeight - nav_ul.offsetWidth;
//
//   var delayX = 100;
//   nav_ul.addEventListener('touchstart',function(event){
//     startX = event.touches[0].clientX;
//   });
//   nav_ul.addEventListener('touchmove',function(event){
//      moveX = event.touches[0].clientX - startX;
//      var currentMove = moveX +distanceX;
//      if(currentMove>(maxX+delayX)){
//        currentMove = (maxX+delayX);
//      }else if(currentMove<(minX-delayX)){
//       currentMove = (minX-delayX);
//      }
//        nav_ul.style.transition = "none";
//       nav_ul.style.transform = 'translateX('+(currentMove)+'px)';
//   })
//
//
//   nav_ul.addEventListener('touchend',function(event){
//     distanceX = distanceX+moveX;
//     if(distanceX>maxX){
//         distanceX = maxX;
//     }
//     else if(distanceX<minX){
//         distanceX = minX;
//     }
//     moveX = 0;
//     nav_ul.style.transform ="translateX("+(distanceX)+"px)";
//     nav_ul.style.transition = "all .5s";
//   })
//   }
listMove();
function listMove() {
    var oNav = document.querySelector('nav');
    var oListMenu = document.querySelector('.listMenu');
    var iSearchWid = document.querySelector('.search').offsetWidth;
    // var oHeader = document.querySelector('header');
    var aLi = oListMenu.querySelectorAll('li');
    var minDis = 0;
    var dis =0;
    var disNum = 0;
    var starX = 0;
    var disAsid = 200;
    // var maxDis = -(oListMenu.offsetWidth+oHeader.offsetWidth-document.body.offsetWidth);
    var maxDis = -(oListMenu.offsetWidth-document.body.offsetWidth+iSearchWid);
    var disX=0;
    var iSpeedX=0;
    oNav.addEventListener('touchstart',function (ev) {
        starX = ev.changedTouches[0].pageX;
        disX = ev.changedTouches[0].pageX;
        oListMenu.style.transition = 'none';

    });
    oNav.addEventListener('touchmove',function (ev) {
        // console.log(ev);
        // 获取手指移动的距离
        var moveX = ev.changedTouches[0].pageX;
        dis = ev.changedTouches[0].pageX-starX;
        iSpeedX = moveX-disX;

        // console.log(iSpeedY);
        //定义一个oListMenu移动距离的变量
        var movDis = disNum+dis;
        // 判断移动距离是否越界
        if(movDis>minDis){
            if(movDis>minDis+disAsid){
                movDis=minDis+disAsid;
            }
        }else if(movDis<maxDis){
            // console.log(dis);

            if(iSpeedX<=0){
                movDis =maxDis +(movDis-maxDis)*0.5;
                // console.log(z);

            }else{
                var b = -(movDis-538+oListMenu.offsetWidth);
                console.log(b);
                movDis= maxDis -b;
                // starY = moveY;
                // movDis =maxDis + (movDis-maxDis);
                // starY = moveY;
                // movDis = disNum+dis;
            }
            // if(movDis<maxDis-disAsid){
            //     movDis=maxDis-disAsid;
            // }
        }
        disX = moveX;
        // // 判断移动距离是否越界
        // if(movDis>disAsid){
        //     movDis=disAsid;
        // }else if(movDis<maxDis-disAsid){
        //     movDis=maxDis-disAsid;
        // }
        //移动
        oListMenu.style.transform = 'translateX('+movDis+'px)';
    });
    oNav.addEventListener('touchend',function (ev) {
        // 手指离开累加移动距离
        disNum+=dis;
        // 手指离开清零移动距离
        dis=0;
        //判断是否越界，越界恢复原位
        if(disNum>minDis){
            disNum=minDis;
        }else if(disNum<maxDis){
            disNum=maxDis;
        }
        oListMenu.style.transition = 'all 0.5s';
        oListMenu.style.transform = 'translateX('+disNum+'px)';
    });
    tap(oListMenu,function (ev) {
        //遍历li去掉current类
        for(var i = aLi.length;i--;){
            //*******************
            aLi[i].firstChild.classList.remove('nav_current');
            aLi[i].classList.remove('nav_current');
        }
        // 给当前点击的a添加current类
        //**********************
        ev.target.classList.add('nav_current');
        // 给disNum赋新值
        disNum = -ev.target.offsetLeft;
        //此处不给oListMenu.style.transform赋值，使其父元素执行
        // oListMenu.style.transform = 'translateY('+disNum+'px)';

    });
    function tap(obj,fn) {
        var starTime = 0;
        var intervals =200;
        var isMove = false;
        obj.addEventListener('touchstart',function (ev) {
            starTime = Date.now();
            isMove = false;
        });
        obj.addEventListener('touchmove',function (ev) {
            isMove = true;
        });
        obj.addEventListener('touchend',function (ev) {
            if(isMove){
                // console.log('滑动');
                return;
            }
            if(Date.now()-starTime>intervals){
                // console.log('长按');
                return;

            }
            // console.log('轻敲');
            fn(ev);
        });
    }
}