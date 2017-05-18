/**
 * Created by Administrator on 2016/1/14.
 */
window.onload = function (){
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    // 1. 先获得要操作的对象
    var warp = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arr = document.getElementById("arrow");
    var left = document.getElementById("arrLeft");
    var right = document.getElementById("arrRight");
    var flag = true;
    //0. 首先给img标签动态的创建src的图片路径
    var imgs = ['images/bingbing.jpg','images/lingengxin.jpg','images/yuanyuan.png','images/slidepic4.jpg','images/slidepic5.jpg'];
    for(var i = 0;i<lis.length;i++){
        lis[i].firstElementChild.firstElementChild.setAttribute('src',imgs[i]);
    }

    // 2. 让每个li标签都走到各自的位置
    //animate(lis[0],config[0]);
    //animate(lis[1],config[1]);
    //animate(lis[2],config[2]);
    assign();//先调用一次，让li标签生成到各自的位置
    function assign(){  // 配置
        for(var i = 0; i < config.length; i++) { //让每一个li标签，都走到对应的配置单的位置
            animate(lis[i],config[i],function(){
                  flag = true;
            });
        }
    }

    // 3. 鼠标移入大盒子显示左右按钮
    wrap.onmouseover = function (){
           animate(arr,{
               opacity:1
           });
           clearInterval(timerId);
    }
    // 4. 鼠标离开的时候，要隐藏左右按钮
    wrap.onmouseout = function (){
           animate(arr,{
               opacity:0
           });
           timerId = setInterval(autoPlay,2500);
    }
    // 5. 给右侧按钮注册事件
    right.onclick = function (){
           // 如果改变数组中的元素的位置 也就说相当于将数组中的最后一个元素放到数组中第一个位置
        // 也就是说将数组中的最后一个元素剪切下来，追加到数组的第一项中
        //var a = config.pop();
        //config.unshift(a);
        //config.unshift(config.pop());

        //var b = config.shift();
        //config.push(b);
        autoPlay();

    }
    

    //7.开启定时器
    var timerId = setInterval(autoPlay,2500);
    function autoPlay(){
         if(flag){
            flag = false;
            config.push(config.shift());
            // 需要按照新的配置单重新生成li标签的样式
            assign();//
        }
    }
    // 6. 给左侧按钮注册事件
    left.onclick = function (){
        if(flag){
            flag = false;
            config.unshift(config.pop());
            assign();
        }

    }
    // 7. 加节流阀


}