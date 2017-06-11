/**
 * Created by kang on 2017/3/9.
 */
//classify  js
var num = 1;
var X=0;
var timer;
$.ajax({
    url:"http://139.199.192.48:9090/api/getindexmenu",
    dataType:'jsonp',
    success: function(a) {
        // console.log(a);
        var oo = template('template', a);
        //console.log(oo);
        $('.index_classify_top').html(oo);
        $('#classify7').on('click',function() {
            $('.index_classify').toggleClass('current');
        })
        $('.index_link').eq(4).attr('href','discount_oversea.html')
        $('.index_link').eq(6).attr('href','history.html')
        $('.index_link').eq(9).attr('href','brandTitle_distop.html?brandtitleid=0&brandtitle=平板电视十大品牌')
        // brandTitle_distop.html?brandtitleid=0&brandtitle=平板电视十大品牌
    }
});
        $.ajax({
            type: 'get',
            url: 'http://139.199.192.48:9090/api/getmoneyctrl',
            // 设置pageid = 3;而不是pageid为1,或者传入参数.是为了点击获取更多的时候,不让本页面的内容与省钱控第一页的内容一致;
            data: 'pageid=2',
            success: function (data) {
                // 调用模板引擎
                var results = template('templateTwo',data);
                
                // 把获取的数据渲染到页面上
                $('#index-items').append(results);
            }

        })

//搜索栏定位颜色改变
heardScroll();
function heardScroll() {
    //获取banner高度
    var iBannerHeight = document.querySelector('.banner').offsetHeight;
    // console.log(iBannerHeight);
    // 定义最终透明度
    var iMaxAlpha = 1;
    //获取搜索栏
    var oHeader = document.querySelector('.search');
    //设置透明
    oHeader.style.backgroundColor = 'rgba(255, 132, 29,0)';
    //滑动执行
    window.onscroll = function () {
        //获取滑动百分比
        var percent = document.body.scrollTop/iBannerHeight;
        //检查越界
        if(percent>iMaxAlpha){
            percent=iMaxAlpha;
        }
        //动态改变透明度
        oHeader.style.backgroundColor = 'rgba(255, 132, 29, '+percent+')';
        //获取滚动条滚动距离
        var iTop = document.body.scrollTop;
        // console.log(iTop);
        //获取header高度
        var iHeader = document.querySelector('.index_header').offsetHeight;
        //改变搜索栏定位方式
        if(iTop>iHeader){
            $('.banner .search').css('position','fixed');
        }else{
            $('.banner .search').css('position','absolute');
            // alert(1);

        }
    }
}
//轮播图
banner();
function banner() {
    // 获取轮播图父盒子
    var oBanner = document.querySelector('.banner');
    //获取ul
    var oUl = document.querySelector('.banner_img');
    //获取li
    var aBtn = document.querySelectorAll('.btn li');
    //定义当前播放的图片序号
    var iNow = 0;
    //获取图片宽度
    var iImgWidth = oUl.querySelector('img').offsetWidth;
    // 获取图片张数
    var iNums = aBtn.length;
    //设置定时器存储
    var timer = null;
    //设置滑动起始值
    var starPoint = 0;
    //滑动存储距离变量
    var dis = 0;
    //设置记录时间变量
    var downTime = 0;
    //设置轮播间隔时间
    var iInterTime = 3000;
    //设置左右滑动判断器
    var direction = true;
    //手指滑动事件开始
    oBanner.addEventListener('touchstart',function (ev) {
        ev = ev.changedTouches[0];
        starPoint = ev.pageX;
        clearInterval(timer);
        downTime = Date.now();
    });
    oBanner.addEventListener('touchmove',function (ev) {
        ev.preventDefault();
        ev = ev.changedTouches[0];
        dis = ev.pageX - starPoint;
        if(dis>0&&iNow==0){
            iNow=iNums;
        }else if(dis<0&&iNow==iNums){
            iNow=0;
        }
        // var iTaget= iNow * -iImgWidth+ dis;
        oUl.style.transition = 'none';
        // oUl.style.transform = 'translateX(' + iTaget + 'px)';
        // console.log('translateX(' + (-1)*iNow * iImgWidth+ 'px)');
        oUl.style.transform = 'translateX(' + (iNow * -iImgWidth+ dis)+ 'px)';

    });
    oBanner.addEventListener('touchend',function () {
        var disP = dis/iImgWidth;
        if(disP>0.3||(Date.now()-downTime<200&&disP>0.06)){
            iNow--;
        }else if(disP<-0.3||(Date.now()-downTime<200&&disP<-0.06)){
            iNow++;
        }
        // toggle();
        //延时执行防止transform冲突
        setTimeout(toggle,10);
        timer = setInterval(autoPlay.bind(this,direction), iInterTime);
    });
    timer = setInterval(autoPlay.bind(this,direction), iInterTime);
    //自动轮播
    function autoPlay(b) {
        if (b) {
            if(iNow==iNums){
                iNow=0;
                toggle(1);
            }
            iNow++;
        } else {
            if(iNow==0){
                iNow=iNums;
                toggle(1);
            }
            iNow--;
        }
        setTimeout(toggle,10);
    }
    //设置图片切换函数
    function toggle(time) {
        time = time?'none':'transform 0.5s';
        oUl.style.transition = time;
        oUl.style.transform = 'translateX(' + iNow * -iImgWidth + 'px)';
        updataBtn();
    }
    //设置小原点跟随
    function updataBtn(){
        // console.log(iNow);
        for(var i=iNums;i--;){
            aBtn[i].firstChild.classList.remove('active');
        }
        aBtn[iNow==iNums?0:iNow].firstChild.classList.add('active');
    }
}

























