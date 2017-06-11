/**
 * Created by kang on 2017/3/11.
 */
var myNum = 0;
function getUrlParam(key){
    var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}

var couPonid=getUrlParam("couponid");
var couponTitle=getUrlParam("couponTitle");

$('.head_change').html('<h1>'+couponTitle+'优惠券</h1>')
$('.kfc_ticket').html(couponTitle+'优惠券')

$.ajax({
    type: 'get',
    url: 'http://139.199.192.48:9090/api/getcouponproduct',
    data: {
        couponid : couPonid
    },
    success: function (data) {
        // jq 自动帮助我们 完成了 JSON.parse
        // 调用模板引擎 渲染数据
        var result = template('template1', data);
        // 添加到页面上 即可
        $('.coupon_d').append(result);


        var result3 = template('template3', data);
        //console.log(result3);
        $('.placeholder').html(result3);

        $('.quan-list .coupon_d li').click(function (event) {
            event.preventDefault();
            $('.placeholder').addClass('clip');
            $('[class^="k_arrow"]').removeClass('hide');
            var myNum = $(this).index();
            console.log(myNum);
            //alert($('.quan-list .coupon_d li').length);
            $('.placeholder').children('li').eq(myNum).css('opacity',1).siblings().css('opacity',0);
            $('.k_arrow_1').on('click',function() {
                myNum--;
                myNum = myNum == -1? $('.quan-list .coupon_d li').length-1:myNum;
                $('.placeholder').children('li').eq(myNum).css('opacity',1).siblings().css('opacity',0);
            })
            $('.k_arrow_2').on('click',function() {
                myNum = myNum == $('.quan-list .coupon_d li').length-1? -1:myNum;
                myNum++;
                //alert(myNum);
                $('.placeholder').children('li').eq(myNum).css('opacity',1).siblings().css('opacity',0);
            })
        })

        $('.placeholder').click(function () {
            $('.placeholder').removeClass('clip')
            $('[class^="k_arrow"]').addClass('hide');
        })
    }
})