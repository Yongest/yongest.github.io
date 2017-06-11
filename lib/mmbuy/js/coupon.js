
/**
 * Created by yongw on 2017/3/12.
 */

$.ajax({
    type: 'get',
    url: 'http://139.199.192.48:9090/api/getcoupon',
    data: '',
    success: function (data) {
        // jq 自动帮助我们 完成了 JSON.parse
        console.log(data);
        // 调用模板引擎 渲染数据
        var result = template('template', data);
        console.log(result);
        // 添加到页面上 即可
        $('.get_coupon').append(result);
    }
})

