/**
 * Created by LYC on 2017/3/8.
 */
function setRem() {
    var rem = 20;
    var html = document.querySelector('html');
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / rem + 'px';
}
setRem();
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
//获取url中的参数
// function getUrlParam(name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");                   //构造一个含有目标参数的正则表达式对象
//     var r = window.location.search.substr(1).match(reg); //匹配目标参数
//     if (r != null) return unescape(r[2]);
//     return null; //返回参数值
// }
function getUrlParam(key){
    var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}
//回到顶部js
$('footer .row div').eq(2).on('click',function() {
    $('body').animate({'scrollTop':0},500);
})
//搜索部分开始
//定义对象存储数据源
var goods = {};
$('#search_key').on('input',function () {
    // alert(1);
    var key = $('#search_key').val();
    if(!key){
        return;
    }
    // 获取商品一级菜单
    $.ajax({
        url:'http://139.199.192.48:9090/api/getcategorytitle',
        datatType:'json',
        success:function (obj) {
            // $('.content ul').append(template('goodsTitle',obj));
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
                            for(var j=0;j<items.result.length;j++){
                                // console.log(items.result[j].category);
                                var name = items.result[j].category;
                                // console.log(items.result[j].categoryId);
                                var id = items.result[j].categoryId;
                                // 储存数据源
                                goods[name] = id;

                            }


                        }
                    })

                }(i))
            }
            setTimeout(function () {
                // console.log(goods);
                // console.log(key+'---------'+goods[key]);
                // console.log('category_list.html?categoryid='+goods[key]+'&category='+key)
                //动态设置搜索按钮url
                $('#search').attr('href',"category_list.html?categoryid="+goods[key]+"&category="+key);
                // $('#search_form').attr('action',"category_list.html?categoryid="+goods[key]+"&category="+key);
                $('#search_id').val(goods[key]);

                //定义模糊搜索
                for(var attr in goods){
                    // console.log(attr);
                    //正检验
                    if(key.indexOf(attr)!=-1){
                        // console.log(key.indexOf(attr));
                        // console.log(attr+'------'+key);
                        $('#search').attr('href',"category_list.html?categoryid="+goods[attr]+"&category="+key);
                        $('#search_id').val(goods[attr]);
                        break;
                    }
                    //反检验
                    if(attr.indexOf(key)!=-1){
                        // console.log(attr+'------'+key);
                        $('#search').attr('href',"category_list.html?categoryid="+goods[attr]+"&category="+key);
                        $('#search_id').val(goods[attr]);
                        break;
                    }
                }
            },100);

        }
    })
})