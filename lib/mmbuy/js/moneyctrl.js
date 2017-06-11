/**
 * Created by yong on 2017/3/9.
 */

 var pageNow = 1;
    var pageMax = 0;
    $.ajax({
        type: 'get',
        url: 'http://139.199.192.48:9090/api/getmoneyctrl',
        data: {pageid:pageNow},
        // 1-15
        success: function (obj) {
            console.log(obj);
            // console.log(data.result[0]._id);
            var results = template('template',obj);
            // console.log(results);
            // 清除原有的内容
            $('#save-items').html('');
            // 清除原有的select中的option
            $('#selectPage').html('');
            // 添加内容
            $('#save-items').append(results);
            // 获取总页面个数
//            var totalPage = Math.ceil(data.totalCount/data.pagesize);
//            // 动态循环生成option选项,并且添加到页面上.
//            for(var i = 1;i<=totalPage;i++){
//                var html = '<option value="'+i+'">'+i+'/'+totalPage+'</option>';
//                $('#selectPage').append(html);
//            }
            //添加分页列表js
            pageMax = Math.ceil(obj.totalCount/obj.pagesize);
            for(var i=1;i<=pageMax;i++){
                $('#page ul').append('<li><a href="javascript:;" data-pageid="'+i+'">第'+i+'页</a></li>');

            }
            //指示当前页
            $('#page ul li').find('a').css('color','#000');
            $('#page ul li').eq(pageNow-1).find('a').css('color','red');
            if(pageNow==1){
                $('#page .pre_page').addClass('forbid');
            }else{
                $('#page .pre_page').removeClass('forbid');
            }
            if(pageNow==pageMax){
                $('#page .nex_page').addClass('forbid');
            }else{
                $('#page .nex_page').removeClass('forbid');
            }
        }

    })
    //分页部分js
    // 分页展示/隐藏
    $('#page .pages').on('click',function (ev) {
        // ev.stopPropagation();
        $(this).find('ul').fadeToggle();
    })
    // 选择分页按钮
    $('#page .pages').on('click', 'a',function (ev) {
        var pageid = $(this).attr('data-pageid');
        pageNow = pageid;
        updatePage();
    })
    // 上一页下一页按钮
    $('#page .pre_page').on('click',function () {
        if(pageNow==1){
            return;
        }
        pageNow--;
        updatePage();
    })
    $('#page .nex_page').on('click',function () {

        if(pageNow==pageMax){
            // $(this).addClass('forbid');
            return;
        }
        pageNow++;
        updatePage();
    })
    //更新页面函数
    function updatePage() {
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getmoneyctrl',
            datatType: 'json',
            data: {
//                'categoryid': categoryId,
                pageid: pageNow
            },
            success: function (obj) {
                // console.log(obj);
                // console.log(template('goodsList', obj));
                var results = template('template',obj);
                // console.log(results);
                // 清除原有的内容
                $('#save-items').html('');
                // 清除原有的select中的option
                $('#selectPage').html('');
                // 添加内容
                $('#save-items').append(results);
                // alert(pageMax+'---'+pageNow);
                //指示当前页
                $('#page ul li').find('a').css('color','#000');
                $('#page ul li').eq(pageNow-1).find('a').css('color','red');
                if(pageNow==1){
                    $('#page .pre_page').addClass('forbid');
                }else{
                    $('#page .pre_page').removeClass('forbid');
                }
                if(pageNow==pageMax){
                    // alert(1);
                    $('#page .nex_page').addClass('forbid');
                }else{
                    $('#page .nex_page').removeClass('forbid');
                }
            }
        })
    }
//    var index=0;
//    $('#scNext').on('touchstart', function () {
//        index++;
//        console.log(index)
//        $.ajax({
//            type: 'get',
//            url: 'http://139.199.192.48:9090/api/getmoneyctrl',
//            data: 'pageid='+index,
//            // 1-15
//            success: function (data) {
//                console.log(data);
//                // console.log(data.result[0]._id);
//                var results = template('template',data);
//                // console.log(results);
//                // 清除原有的内容
//                $('#save-items').html('');
//                // 清除原有的select中的option
//                $('#selectPage').html('');
//                // 添加内容
//                $('#save-items').append(results);
//                // 获取总页面个数
//                var totalPage = Math.ceil(data.totalCount/data.pagesize);
//                // 动态循环生成option选项,并且添加到页面上.
//                for(var i = 1;i<=totalPage;i++){
//                    var html = '<option value="'+i+'">'+i+'/'+totalPage+'</option>';
//                    $('#selectPage').append(html);
//                }
//            }
//
//        })
//
//
//
//    })