
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");        //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return decodeURI(r[2]);
        return null; //返回参数值
    }
    var para=getUrlParam("id");
    console.log(para);


    $.ajax({
        type:'get',
        url:'http://139.199.192.48:9090/api/getmoneyctrlproduct',
        data:{ productid : para},
        success:function(data){
            console.log(data);
            var result = template('mytemplate',data);
            console.log(result)
            $('.save-content').html('');
            $('.save-content').append(result);
        }
    })

