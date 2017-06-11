/**
 * Created by kang on 2017/3/10.
 */
$(function () {
    var aId = 0;    //店家id
    var aEara = 0;  //地域
    var num = 1; //计加载次数数
    var aI = 0;
    var aE = 0;
    var isTrue = false;
    var timer;
    //初始化获取id ajax 11111111111
    ajx('http://139.199.192.48:9090/api/getgsshop', 'drop1', $('.a_jd').parent().next('ul'), function () {
        $('.a_jd_ul').children('li:eq(0)').addClass('current');
        $('.a_jd_ul').children('li').on('click', function () {
            $(this).addClass('current').siblings().removeClass('current');
            aId = $(this).index();
            aI = aId;
            console.log('id+++' + aId)
            $('.sp_jd').html($(this).html());
        })
    });
    //初始化获取area ajax 22222222222222
    ajx('http://139.199.192.48:9090/api/getgsshoparea', 'drop2', $('.a_area').parent().next('ul'), function () {
        $('.a_area_ul').children('li:eq(0)').addClass('current');
        $('.a_area_ul').children('li').on('click', function () {
            $(this).addClass('current').siblings().removeClass('current');
            aEara = $(this).index();
            aE = aEara;
            console.log('eara+++' + aEara)
            switch (aEara) {
                case 0:
                    $('.sp_area').html('华北');
                    break;
                case 1:
                    $('.sp_area').html('华东');
                    break;
                case 2:
                    $('.sp_area').html('华南');
                    break;
                case 3:
                    $('.sp_area').html('华中');
                    break;
                case 4:
                    $('.sp_area').html('西南');
                    break;
                case 5:
                    $('.sp_area').html('东北');
                    break;
                case 6:
                    $('.sp_area').html('西北');
                    break;
            }
        })
    });
    //初始化获取商品列表 ajax 33333333333333
    ajx('http://139.199.192.48:9090/api/getgsproduct?shopid=' + aId + '&&areaid=' + aEara, 'drop3', $('#product_row'));
    //价格点击
    $('.a_money_ul').children('li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.sp_money').html($(this).html());
    })
    //区域点击
    $('.sp_jd_prt').on('click', function () {
        //aEara = 0;
    })
    //确定查询
    $('.gsproduct_search_logo').on('click', function () {
        $('.gsproduct_footer_banner span').html('点击加载更多');
        num = 1;
        aEara = aE;
        aId = aI;
        console.log('id+++' + aId + 'eara+++' + aEara);
        $('.drop_ul_1').addClass('hide');
        $('i.glyphicon').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        ajx('http://139.199.192.48:9090/api/getgsproduct?shopid=' + aId + '&&areaid=' + aEara, 'drop3', $('#product_row'));
    })
    //查询栏点击收放
    var bol = false;
    var bol2 = false;
    $('.a_jd_1').on('click', function () {
        if ($(this).children('i').hasClass('glyphicon-triangle-top')) {
            bol2 = true;
        }
        if ($(this).parent().next('ul').hasClass('hide') == false) {
            bol = true;
        }
        $('.drop_ul_1').addClass('hide');
        $(this).parent().next('ul').toggleClass('hide');
        $('.a_jd_1').children('i').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        if (bol) {
            $('.drop_ul_1').addClass('hide');
        }
        $(this).children('i').toggleClass('glyphicon-triangle-bottom').toggleClass('glyphicon-triangle-top');
        if (bol2) {
            $(this).children('i').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        }
        bol = false;
        bol2 = false;
    });
    //封装ajx  ajax调用函数
    function ajx(url1, id1, ele1, fn) {
        $.ajax({
            url: url1,
            dataType: 'jsonp',
            success: function (a) {
                var b = template(id1, a);
                ele1.html(b);
                load();
                if (fn) {
                    fn();
                }
            }
        })
    }

    function ajx2(url1, id1, ele1, fn) {
        $.ajax({
            url: url1,
            dataType: 'jsonp',
            success: function (a) {
                var b = template(id1, a);
                ele1.append(b);
                if (fn) {
                    fn();
                }
            }
        })
    }

    function load() {
        //2222222
        //$('body').on('touchmove',function(e) {
        //    clearTimeout(timer);
        //    timer = setTimeout(function() {isTrue = true;},500)
        //    if(isTrue) {
        //        if(aEara ==6) {
        //            $('.gsproduct_footer_banner span').html('到底了,亲~~~');
        //            return;
        //        } else {
        //            $('.gsproduct_footer_banner span').html('点击加载更多');
        //        }
        //        var cc = ($('.gsproduct_product_box').height())*11*num;
        //        var bb = e.originalEvent.changedTouches[0].pageY;
        //        console.log(bb);
        //        console.log(bb+'========'+cc);
        //        if(bb>cc) {
        //            num++;
        //            if(aEara<6) {
        //                aEara++;
        //                ajx2('http://139.199.192.48:9090/api/getgsproduct?shopid='+aId+'&&areaid='+aEara, 'drop3', $('#product_row'));
        //            }
        //            console.log('id+++'+aId+'eara+++'+aEara);
        //        }
        //        isTrue = false;
        //    }
        //})
        //3333333333333333333333
        timer = setTimeout(function () {
            isTrue = true;
        }, 500)
        $('.gsproduct_footer_banner').on('click', function () {
            //$('.gsproduct_footer_banner span').html('到底了亲~~');
            clearTimeout(timer);
            timer = setTimeout(function () {
                isTrue = true;
            }, 500)
            if (isTrue) {
                num++;
                if (aEara < 6) {
                    $('.gsproduct_footer_banner span').html('点击加载更多');
                    aEara++;
                    ajx2('http://139.199.192.48:9090/api/getgsproduct?shopid=' + aId + '&&areaid=' + aEara, 'drop3', $('#product_row'),function() {
                        if(aEara ==6) $('.gsproduct_footer_banner span').html('到底了亲~~');
                    });
                } else {
                    $('.gsproduct_footer_banner span').html('到底了亲~~');
                    return;
                }
                console.log('id+++' + aId + 'eara+++' + aEara);
                isTrue = false;
            }
        })
    }
})
//580f512e2f23e43f5152799b