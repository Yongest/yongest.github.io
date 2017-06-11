/**
 * Created by LYC on 2017/3/10.
 */
// ===============================比价搜索js 开始======================
$(function () {
    //当前页数
    var pageNow = 1;
    //最大页数
    var pageMax = 0;
    // 获取url中商品分类id
    var categoryId = getUrlParam('categoryid');
    // console.log(categoryId);
    if(categoryId == 'undefined'||categoryId == 'null'||categoryId == ''){
        // alert(1);
        // $('.error').css('display','block');
        $('.error').show();
        $('#page').hide();
        $('.friend_link').hide();
    }
    // 获取url中商品分类名字
    var category = getUrlParam('category');
    // console.log(category);
    // 设置三级菜单中商品分类名字
    $('#category').html(category);
    //切换商品导航class
    $('.nav_list li').on('click',function () {
        $(this).siblings().find('a').removeClass('active').end().end().find('a').addClass('active');
    })
    // 页面初始化添加数据
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getproductlist',
        datatType: 'json',
        data: {
            'categoryid': categoryId,
            'pageid': pageNow
        },
        success: function (obj) {
            // console.log(obj);
            // console.log(template('goodsList', obj));
            //引用模板引擎渲染
            $('.goods_list ul').html(template('goodsList', obj));
            //添加分页列表js开始
            // 计算最大页码
            pageMax = Math.ceil(obj.totalCount/obj.pagesize);
            // 添加分页列表
            for(var i=1;i<=pageMax;i++){
                $('#page ul').append('<li><a href="javascript:;" data-pageid="'+i+'">第'+i+'页</a></li>');
            }
            //指示当前页
            $('#page ul li').find('a').css('color','#000');
            $('#page ul li').eq(pageNow-1).find('a').css('color','red');
            // 判断上一页是否越界
            //forbid 该类属性为将文字颜色变为浅灰色
            if(pageNow==1){
                $('#page .pre_page').addClass('forbid');
            }else{
                $('#page .pre_page').removeClass('forbid');
            }
            // 判断下一页是否越界
            if(pageNow==pageMax){
                $('#page .nex_page').addClass('forbid');
            }else{
                $('#page .nex_page').removeClass('forbid');
            }
            //添加分页列表js结束

            //给商品列表a链接拼接 分类名称
            $('.list').on('click',function () {
                var href = $(this).attr('href');
                $(this).attr('href',href+'&category='+category);
            })

        }
    })

    //分页部分点击事件js开始
    // 分页展示/隐藏
    $('#page .pages').on('click',function (ev) {
        // ev.stopPropagation();
        $(this).find('ul').fadeToggle();
    })
    // 分页按钮列表点击
    $('#page .pages').on('click', 'a',function (ev) {
        var pageid = $(this).attr('data-pageid');
        pageNow = pageid;
        updatePage();
    })
    // 上一页按钮
    $('#page .pre_page').on('click',function () {
        if(pageNow==1){
            return;
        }
        pageNow--;
        updatePage();
    })
    // 下一页按钮
    $('#page .nex_page').on('click',function () {
        if(pageNow==pageMax){
            return;
        }
        pageNow++;
        updatePage();
    })
    //更新页面Ajax函数
    function updatePage() {
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getproductlist',
            datatType: 'json',
            data: {
                'categoryid': categoryId,
                'pageid': pageNow
            },
            success: function (obj) {
                // console.log(obj);
                // console.log(template('goodsList', obj));
                //使用模板引擎渲染页面
                $('.goods_list ul').html(template('goodsList', obj));

                // alert(pageMax+'---'+pageNow);
                //指示当前页
                $('#page ul li').find('a').css('color','#000');
                $('#page ul li').eq(pageNow-1).find('a').css('color','red');
                // 判断上一页是否越界
                //forbid 该类属性为将文字颜色变为浅灰色
                if(pageNow==1){
                    $('#page .pre_page').addClass('forbid');
                }else{
                    $('#page .pre_page').removeClass('forbid');
                }
                // 判断下一页是否越界
                if(pageNow==pageMax){
                    $('#page .nex_page').addClass('forbid');
                }else{
                    $('#page .nex_page').removeClass('forbid');
                }
            }
        })
    }

})
// ===============================比价搜索js 结束======================

