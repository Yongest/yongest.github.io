/**
 * Created by LYC on 2017/3/10.
 */
$(function () {
    // 页面初始化添加数据
    $.ajax({
        url:'http://139.199.192.48:9090/api/getbrandtitle',
        datatType:'json',
        success:function (obj) {
            // console.log(obj);
            // 引用模板引擎赋值
            $('.content ul').append(template('brandTitle',obj));
        }
    })

})