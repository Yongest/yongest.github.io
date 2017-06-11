/**
 * Created by LYC on 2017/3/10.
 */
// ===============================比价搜索js 开始======================
$(function () {
    // 页面初始化添加数据
    // 获取商品一级菜单
    $.ajax({
        url:'http://139.199.192.48:9090/api/getcategorytitle',
        datatType:'json',
        success:function (obj) {
            $('.content ul').append(template('goodsTitle',obj));
            for(var i=0;i<8;i++){
                // 运用闭包保存i的值
                (function (i) {
                    // 获取商品二级菜单
                    $.ajax({
                        url:'http://139.199.192.48:9090/api/getcategory',
                        data:{titleid:obj.result[i].titleId},
                        datatType:'json',
                        success:function (items) {
                            // console.log(items);
                            $('.content ul li').eq(i).append(template('goodsItems',items));
                        }
                    })
                }(i))
            }
        }
    })
    //添加菜单收缩展开功能
    $('.content ul').on('click','p',function (ev) {
        $(ev.target).next().next().stop().slideToggle().end().find('.arrow').toggleClass('active');
    })
})
// ===============================比价搜索js 结束======================

