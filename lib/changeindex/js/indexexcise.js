/**
 * Created by yong on 2017/2/6.
 */

$(function(){
    var nowing = 0;//
    var mytimer = null;

    function autoPlay(){
        if(nowing<$('.slider .slider-ul li').length-1){
            nowing++;
        }else {
            nowing = 0;
        }

        $('.slider .slider-ul li').eq(nowing-1).animate({'opacity':0},2000);
        $('.slider .slider-ul li').eq(nowing).animate({'opacity':1},2000);

        $('.circle li').eq(nowing).addClass('current').siblings().removeClass('current');
    }

    mytimer = setInterval(autoPlay,3000);

    $('.slider').on({
        'mouseenter':function(){
            $('.arrow').css('display','block');
            clearInterval(mytimer);
        },
        'mouseleave':function(){
            $('.arrow').css('display','none');
           mytimer = setInterval(autoPlay,3000);
        }
    })

    $('.arrow-r').on('click',function(){
        autoPlay();
    })

    $('.arrow-l').on('click',function(){
        if(nowing>0){
            nowing--;
        } else {
            nowing = $('.slide .slider-ul li').length-1;
        }

        if(nowing == $('.slider .slider-ul li').length-1){
            $('.slider .slider-ul li').eq(0).animate({'opacity':0},2000);
            $('.slider .slider-ul li').eq(nowing).animate({'opacity':1},2000);
        }else {
            $('.slider .slider-ul li').eq(nowing+1).animate({'opacity':0},2000);
            $('.slider .slider-ul li').eq(nowing).animate({'opacity':1},2000);
        }

        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");

    })
















})
