/**
 * Created by yongw on 2017/3/12.
 */


function getUrlParam(key){
    var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}
var para=getUrlParam("id")
console.log(para);
$.ajax({
    type: 'get',
    url: 'http://139.199.192.48:9090/api/getdiscountproduct',
    data: {
        productid : para
    },
    success: function (data) {
        console.log(data)
        // jq 自动帮助我们 完成了 JSON.parse
        // 调用模板引擎 渲染数据x
        var result = template('template1', data);
        // 添加到页面上 即可
        $('.cu-content').append(result);
        var comment=data.result[0].productComment
        console.log(comment)
        $('.cu-content-pl').append(comment)
        $('.pro_name').html(data.result[0].productName);

//            $('.golink').html(
//            '<a href='+data.result[0].productFrom+'> <i class="icon-gobuy"></i>前往购买</a>'
//            )
    }
})