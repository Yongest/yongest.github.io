/**
 * Created by LYC on 2017/3/10.
 */
$(function () {
    //从url取值
    //获取商品id
    var productid = getUrlParam('productid');
    //获取商品类名
    var brandName = getUrlParam('brandName');
    //获取商品分类名
    var category = getUrlParam('category');
    // 给商品分类名三级菜单赋值
    if(category==null){
        $('#category').hide();
    }else{
        $('#category').html(category+'&nbsp;&gt;');
    }
    // 给商品类名三级菜单赋值
    $('#brandName').html(brandName);
    //初始化页面--商品详情
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getproduct',
        datatType: 'json',
        data: {
            productid:productid
        },
        success: function (data) {
            // console.log(data);
            // console.log(template('goods_detail',data));
            //引用模板引擎渲染页面
            $('.menu').after(template('goods_detail',data));
            //切换商品导航class
            $('.goods_nav div').on('click',function () {
                $(this).siblings().removeClass('active').end().addClass('active');
            })
            // 动态添加三级菜单商品分类链接
            $('#category').attr('href','category_list.html?categoryid='+data.result[0].categoryId+'&category='+category)
            // alert('category_list.html?categoryid='+data.result[0].categoryId+'&category='+category);
        }
    })
    //初始化页面--评价详情
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getproductcom',
        datatType: 'json',
        data: {
            productid:productid
        },
        success: function (data) {
            // console.log(data);
            // console.log(template('appraise_list',data));
            // $('.menu').after(template('goods_detail',data));
            //引用模板引擎渲染页面
            $('.evaluate ul').html(template('appraise_list',data));
        }
    })

})
