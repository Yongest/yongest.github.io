/**
 * Created by LYC on 2017/3/10.
 */
$(function () {
    // 获取url值
    //获取商品品牌排行id
    var brandtitleid = getUrlParam('brandtitleid');
    //获取商品分类名称
    var brandtitle = getUrlParam('brandtitle');
    // 给页面动态部分赋值
    $('#distop_brandtitle').html(brandtitle);
    $('.distop_content h4').html(brandtitle+'哪个好');
    $('.topten_list h4').html(brandtitle+'销量排行');
    $('.topten_evaluate h4').html(brandtitle+'最新评论');
    // 页面初始化添加数据
    //十大品牌排行榜
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrand',
        datatType: 'json',
        data: {
            brandtitleid: brandtitleid
        },
        success: function (data) {
            // console.log(data);
            // console.log(template('topten_brand', data));
            $('.topten_brand ul').append(template('topten_brand', data));
            // 给金银铜三个品牌span加上红橙绿颜色
            $('.topten_brand ul span').eq(0).addClass('one').end().eq(1).addClass('two').end().eq(2).addClass('three');
        }
    })
    // 十大品牌销量榜
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrandproductlist',
        datatType: 'json',
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        },
        success: function (data) {
            // console.log(data);
            // console.log(template('topten_list', data));
            $('.topten_list ul').append(template('topten_list', data));
            // for (var i = 0; i < data.result.length; i++) {
            //     var aa = data.result[i].productId;
            //     (function(i){
            //         十大品牌热门商品评论
                    $.ajax({
                        url: 'http://139.199.192.48:9090/api/getproductcom',
                        datatType: 'json',
                        data: {
                            productid: data.result[0].productId
                        },
                        success: function (obj) {
                            // console.log(obj);
                            // console.log(template('topten_evaluate', obj));
                            $('.topten_evaluate ul').append(template('topten_evaluate', obj));
                            //十大品牌热门商品详情
                            $.ajax({
                                url: 'http://139.199.192.48:9090/api/getproduct',
                                datatType: 'json',
                                data: {
                                    productid: data.result[0].productId
                                },
                                success: function (goodsObj) {
                                    // console.log(goodsObj);
                                    // console.log(template('topten_evaluate_goods', goodsObj));
                                    $('.topten_evaluate ul LI').prepend(template('topten_evaluate_goods', goodsObj));
                                }
                            })




                        }
                    })
                // }(i))

            // }
        }
    })

})