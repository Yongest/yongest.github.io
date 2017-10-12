/**
 * Created by yong on 2017/10/11.
 */
$(function(){
    //        var jsonData = {"kw_cate":{"display":"1","value":"","list":{"6":"AUDI","7":"BENZ","31":"TOYOTA","11":"BMW","19":"HONDA","13":"DAIHATSU","14":"DODGE","15":"FIAT","16":"FORD","17":"GM","18":"HOLDEN","20":"HYUNDAI","21":"ISUZU","22":"KIA","23":"MAZDA","24":"MITSUBISHI","25":"NISSAN","26":"OPEL","27":"PEUGEOT","28":"SUBARU","29":"SUZUKI","30":"SAAB","12":"DAEWOO","32":"VOLVO","33":"PASSAT","34":"SSANGYANG","35":"IVECO","36":"MACK","37":"GENERATOR","38":"HEATER"},"action":{"type":"cannotChoose"}},"kw_state":{"value":"","list":["",""]},"row":{"display":"1","value":"700","list":{"5":"5 line ","10":"10 line ","20":"20 line ","30":"30 line ","40":"40 line ","50":"50 line "},"action":{"type":"rowsChoose","url":"http:\/\/www.faret.cn\/index.html?mod=products&act=search&page=0"}},"mulop":{"display":"1","list":{"Enable":"","Disable":"","disabled_1":"------","Delete":"","Order":""},"action":{"type":"mulopChoose","Enable":{"msg":"","url":"http:\/\/www.faret.cn\/index.html?mod=products&act=state&value=1"},"Disable":{"msg":"","url":"http:\/\/www.faret.cn\/index.html?mod=products&act=state&value=0"},"Delete":{"msg":"","url":"http:\/\/www.faret.cn\/index.html?mod=products&act=state&value=2"},"Order":{"msg":"","url":"http:\/\/www.faret.cn\/index.html?mod=products&act=order"}}},"kw_bTime":{"value":""},"kw_eTime":{"value":""},"pagination":{"numDisplayEntries":"8","numEdgeEntries":"1","linkTo":"#","prevText":"Prev","nextText":"Next","ellipseText":"...","prevShowAlways":"1","nextShowAlways":"1","total":"4221","row":"700","currentPage":"0"}};
//        1.不同品牌的车
//        var jsonData = {"kw_cate":{"display":"1","value":"","list":{"6":"AUDI","7":"BENZ","31":"TOYOTA","11":"BMW","19":"HONDA","13":"DAIHATSU","14":"DODGE","15":"FIAT","16":"FORD","17":"GM","18":"HOLDEN","20":"HYUNDAI","21":"ISUZU","22":"KIA","23":"MAZDA","24":"MITSUBISHI","25":"NISSAN","26":"OPEL","27":"PEUGEOT","28":"SUBARU","29":"SUZUKI","30":"SAAB","12":"DAEWOO","32":"VOLVO","33":"PASSAT","34":"SSANGYANG","35":"IVECO","36":"MACK","37":"GENERATOR","38":"HEATER"}}};
    var jsonData = {"kw_cate":{"display":"1","value":"","list":{"6":"AUDI","7":"BENZ","31":"TOYOTA"}}};
//2.同一品牌不同型号
    var json = {"6":{"1":"A3/S3 1.8i20V TURBO","2":"A4/S3 1.8i20V AUDI"},
        "7":{"3":"b3/S3 1.8i20V TURBO","4":"b4/S3 1.8i20V BENZ"},
        "31":{"5":"c3/S3 1.8i20V TURBO","41":"b4/S3 1.8i20V TOYOTA"}
    };

// 3.根据品牌查看具体详细信息
    var jsonDetails = {
        "6":[{"no":"0342333","size":"520*328*32","nissens":"56073d6A","oem":"1712971/986 1719038 1723941","brand":"AUDI","at_mt":"MT","car_year":"E34/M50 520","year":"1989-1992","img":"baoma1.jpg"},
            {"no":"1342344","size":"520*328*32","nissens":"56073d6A","oem":"1712971/986 1719038 1723941","brand":"AUDI","at_mt":"MT","car_year":"E34/M50 520","year":"1989-1992","img":"baoma1.jpg"},
            {"no":"2423355","size":"520*328*32","nissens":"56073d6A","oem":"1712971/986 1719038 1723941","brand":"AUDI","at_mt":"MT","car_year":"E34/M50 520","year":"1989-1992","img":"baoma1.jpg"}],
        "7":[{"no":"134234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},
            {"no":"234234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},
            {"no":"334234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},
            {"no":"434234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},
            {"no":"534234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},
        ],
        "31":[{"no":"04234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma3.jpg"},
            {"no":"24234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma2.jpg"}]
    };

//4根据同一品牌不同型号查询
    var jsonDetails2 = {
        "1":[{"no":"0342333","size":"520*328*32","nissens":"56073d6A","oem":"1712971/986 1719038 1723941","brand":"AUDI","at_mt":"MT","car_year":"E34/M50 520","year":"1989-1992","img":"baoma1.jpg"},
            {"no":"2423355","size":"520*328*32","nissens":"56073d6A","oem":"1712971/986 1719038 1723941","brand":"AUDI","at_mt":"MT","car_year":"E34/M50 520","year":"1989-1992","img":"baoma1.jpg"}],
        "2":[{"no":"134234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},
            {"no":"234234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},
            {"no":"534234","size":"520*328*32","nissens":"607d36A","oem":"1712971/986 1719038 1723941","brand":"BENZ","at_mt":"AT","car_year":"E34/M50 520","year":"1980-1992","img":"baoma2.jpg"},],
        "3":[{"no":"04234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma3.jpg"},
            {"no":"24234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma2.jpg"}],
        "4":[{"no":"04234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma3.jpg"},],
        "5":[{"no":"04234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma3.jpg"},
            {"no":"24234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma2.jpg"}],
        "41":[{"no":"04234","size":"520*328*32","nissens":"760736A","oem":"1712971/986 1719038 1723941","brand":"TOYOTA","at_mt":"MT","car_year":"E34/M50 520","year":"1979-1992","img":"baoma3.jpg"}]
    };
    //1.渲染不同品牌的车
    (function(){
        var arr = [];
        $.each(jsonData.kw_cate.list,function(i,v){
            arr.push(' <option value="'+i+'">'+v+'</option>');
        });

        $("#kw_cate").append(arr.join('')) ;

    })();

//        2.选择不同品牌车触发的事件
    (function(){
        $("#kw_cate").change(function(e){
            //2.1获取品牌id
            var carTypeId = $(this).children('option:selected').val();
            clearValue();
            //2.2 发送请求给tbody渲染数据
            $.ajax({
                "type":"get",
                "url":"",
//                    carTypeId
                success:function(data){
                    //2.3 清除数据
                    $("#result_1").children().eq(0).siblings().remove();
                    var arr = [];
                    $.each(jsonDetails[carTypeId], function (i,v) {

                        var htmls = '<tr>'+
                            '<td><input class="is-check" name="id" type="checkbox" value="'+v.no+'"></td>'+
                            '<td><a href="#">'+v.no+'</a></td>'+
                            '<td>'+v.size+'</td>'+
                            '<td>'+v.nissens+'</td>'+
                            '<td width="20">'+v.oem+'</td>'+
                            '<td>'+v.brand+'</td>'+
                            '<td>'+v.at_mt+'</td>'+
                            '<td>'+v.car_year+'</td>'+
                            '<td>'+v.year+'</td>'+
                            '<td><a href="javascript:;" onclick="showpic(\'images/'+v.img+'\');">View Picture</a></td>'+
                            '</tr>'
                        arr.push(htmls);
                    });
                    $("#result_1").append(arr.join(''));
                    saveData();
                },
            });
            //2.4获取品牌id，给一个品牌多个型号渲染数据
            var arr2 = [];
            $.each(json[carTypeId],function(index,v){
                arr2.push('<option value="'+index+'">'+v+'</option>');
            });
            arr2.unshift('<option value=""></option>');
            $("#kw_type").children().remove().end().append(arr2.join(""));
            saveData();
        })
    })();

//        3.选择同一品牌车不同型号触发的事件;
    (function () {
        $("#kw_type").change(function(){
            var type_id = $(this).children('option:selected').val();
            clearValue();
            $.ajax({
                "type":"get",
                "url":"",
                success:function(data){
                    $("#result_1").children().eq(0).siblings().remove();
                    var arr = [];
                    $.each(jsonDetails2[type_id], function (i,v) {
                        console.log( v.at_mt)
                        var htmls = '<tr>'+
                            '<td><input class="is-check" name="id" type="checkbox" value="'+v.no+'"></td>'+
                            '<td><a href="#">'+v.no+'</a></td>'+
                            '<td>'+v.size+'</td>'+
                            '<td>'+v.nissens+'</td>'+
                            '<td width="20">'+v.oem+'</td>'+
                            '<td>'+v.brand+'</td>'+
                            '<td>'+v.at_mt+'</td>'+
                            '<td>'+v.car_year+'</td>'+
                            '<td>'+v.year+'</td>'+
                            '<td><a href="javascript:;" onclick="showpic(\'images/'+v.img+'\');">View Picture</a></td>'+
                            '</tr>'
                        arr.push(htmls);
                    });
                    $("#result_1").append(arr.join(''));
                    saveData();
                },
            });
        });
    })();

//        4.点击 search按钮进行搜索
    (function(){
        $("#search").click(function(){

            var carTypeId = $('#kw_cate').children('option:selected').val();
            var type_id = $('#kw_type').children('option:selected').val();
            var _no = $("#cleartext").val();
            var _oem = $("#kw_oem").val();
            var _nissen = $("#kw_nissens").val();
            if(!_no && !_nissen && !_nissen){
                return false;
            };
            if(carTypeId && type_id) {   //have brand and models
                console.log('hello1')
                $.ajax({
                    "type":"get",
                    "url":"",
                    success:function(data){
                        $("#result_1").children().eq(0).siblings().remove();
                        var arr = [];
                        $.each(jsonDetails2[type_id], function (i,v) {
                            //通过no,oem，nissen过滤掉没有的数据
                            if(v.no.indexOf(_no)=='-1' || v.nissens.indexOf(_nissen)=='-1' || v.oem.indexOf(_oem)=='-1'){
                                return ;
                            };
                            var htmls = '<tr>'+
                                '<td><input class="is-check" name="id" type="checkbox" value="'+v.no+'"></td>'+
                                '<td><a href="#">'+v.no+'</a></td>'+
                                '<td>'+v.size+'</td>'+
                                '<td>'+v.nissens+'</td>'+
                                '<td width="20">'+v.oem+'</td>'+
                                '<td>'+v.brand+'</td>'+
                                '<td>'+v.at_mt+'</td>'+
                                '<td>'+v.car_year+'</td>'+
                                '<td>'+v.year+'</td>'+
                                '<td><a href="javascript:;" onclick="showpic(\'images/'+v.img+'\');">View Picture</a></td>'+
                                '</tr>'
                            arr.push(htmls);
                        });
                        $("#result_1").append(arr.join(''));
                        saveData();
                    },
                });
            }else if (carTypeId && !type_id){   //have brand and no models

                $.ajax({
                    "type":"get",
                    "url":"",
                    success:function(data){

                        $("#result_1").children().eq(0).siblings().remove();
                        console.log('hello')
                        var arr = [];
                        $.each(jsonDetails[carTypeId], function (i,v) {
                            //通过no,oem，nissen过滤掉没有的数据
                            if(v.no.indexOf(_no)=='-1' || v.nissens.indexOf(_nissen)=='-1' || v.oem.indexOf(_oem)=='-1'){
                                return ;
                            };
                            var htmls = '<tr>'+
                                '<td><input class="is-check" name="id" type="checkbox" value="'+v.no+'"></td>'+
                                '<td><a href="#">'+v.no+'</a></td>'+
                                '<td>'+v.size+'</td>'+
                                '<td>'+v.nissens+'</td>'+
                                '<td width="20">'+v.oem+'</td>'+
                                '<td>'+v.brand+'</td>'+
                                '<td>'+v.at_mt+'</td>'+
                                '<td>'+v.car_year+'</td>'+
                                '<td>'+v.year+'</td>'+
                                '<td><a href="javascript:;" onclick="showpic(\'images/'+v.img+'\');">View Picture</a></td>'+
                                '</tr>'
                            arr.push(htmls);
                        });
                        $("#result_1").append(arr.join(''));
                        saveData();
                    },
                });
            }else{           //既没有选中品牌，也没有选中品牌子类型。

                $.ajax({
                    "type":"get",
                    "url":"",
                    success:function(data){
                        $("#result_1").children().eq(0).siblings().remove();
                        console.log('hello')
                        var arr = [];
                        $.each(jsonDetails,function(j,o){
                            $.each(o,function(i,v){
                                console.log(v);
                                //通过no,oem，nissen过滤掉没有的数据
                                if(v.no.indexOf(_no)=='-1' || v.nissens.indexOf(_nissen)=='-1' || v.oem.indexOf(_oem)=='-1'){
                                    return ;
                                };

                                var htmls = '<tr>'+
                                    '<td><input class="is-check" name="id" type="checkbox" value="'+v.no+'"></td>'+
                                    '<td><a href="#">'+v.no+'</a></td>'+
                                    '<td>'+v.size+'</td>'+
                                    '<td>'+v.nissens+'</td>'+
                                    '<td width="20">'+v.oem+'</td>'+
                                    '<td>'+v.brand+'</td>'+
                                    '<td>'+v.at_mt+'</td>'+
                                    '<td>'+v.car_year+'</td>'+
                                    '<td>'+v.year+'</td>'+
                                    '<td><a href="javascript:;" onclick="showpic(\'images/'+v.img+'\');">View Picture</a></td>'+
                                    '</tr>'
                                arr.push(htmls);
                            });
                        } );
                        $("#result_1").append(arr.join(''));
                        saveData();
                    },
                });

            };

            return false;
        });

    })();


//       5. click “add to quatation” button
    (function(){
        $("#to_check").click(function(){
//               5.1 若quatation 里面有了添加的内容，就限制不能添加
//                5.11获取到quatation 里面的 no 值；
            var result2Obj =  $("#result_2>").find('a').text();
//
            var obj=  $('#result_1').find(".is-check:checked").parent().parent().clone(true);
            if(!obj.length){
                alert("Please select a need operation record！");
                return false;
            };
            obj.find('td:last').before('<td><input style="text-align:center;" type="text" class="quality" value="1" size="1" maxlength="3""></td>')
            $('#result_1').find(".is-check").removeAttr("checked");
            obj.find(".is-check").removeAttr("checked");
//
//                5.12判断result2Obj 里面 有没有no
            $.each(obj,function(i,v){
                if(result2Obj.indexOf($(v).children('td').eq(1).children('a').text())!='-1'){
                    return;
                };
                $("#result_2").append(v);
            });
            saveData();
        });
    })();


//        6. click 'delete' button
    (function(){
        $("#_delete").click(function(){
            var obj = isLen();
            if(!obj){
                return false;
            };
            obj.remove();
            saveData ();
        });
    })();


    //  7. click 'send quatation' button
    (function(){
        $("#_send").click(function(){

            if(!$("#result_2>.title").siblings().length){
                alert("Please add a need operation record！")
                return false;
            };
            $.ajax({
                url:'',
                type:"post",
                data:{},
                success:function(data){
                    $("#success").css("display","block")
                },
                error: function () {
                    //$("#fail").css("display","block")     //未登录情况
                }
            })
            saveData();
        });
    })();

    (function(){
        $(".quality").keyup(function(){
            $(this).val($(this).val())
        });
    })();
    //触发change事件，清除其余3个input的value值
    function clearValue (){
        $("#cleartext").val('');
        $("#kw_oem").val("");
        $("#kw_nissens").val("");
    };

    //判断quatation 中是否有选中的。若有则提示
    function isLen(){
        var obj = $("#result_2").find('.is-check:checked').parent().parent();
        if(!obj.length){
            alert('Please select a need operation record！');
        };
        return obj;
    };

//        数据缓存
    function saveData (){
        var saveObj = {};
        saveObj.result1 = $("#result_1").html();
        saveObj.result2 = $("#result_2").html();
        saveObj.brand   = $("#kw_cate").html();
        saveObj.models = $("#kw_type").html();
        saveObj.no = $("#cleartext").val();
        saveObj.oem = $("#kw_oem").val();
        saveObj.nissens = $("#kw_nissens").val();
        localStorage.setItem('savedData',JSON.stringify(saveObj))
    };


    //8.刷新数据不变
    (function(){
        var obj2= localStorage.getItem('savedData')?localStorage.getItem('savedData'):'{}';
        if(obj2){
            var obj =  JSON.parse(obj2);
        }else{
            return false;
        };

        $("#result_1").children().remove().end().append(obj.result1);
        $("#result_2").children().remove().end().append(obj.result2);
        $("#kw_cate").children().remove().end().append(obj.brand);
        $("#kw_type").children().remove().end().append(obj.models);
        $("#cleartext").val(obj.no);
        $("#kw_oem").val(obj.oem);
        $("#kw_nissens").val(obj.nissens);
    })();
    //9.点击登录按钮
    (function(){
        $("#login").click(function(){
            $("#login_dialog").css("display","block");
        });
    })();
    //10点击登录关闭按钮
    (function(){
        $(".dialog_close").click(function(){
            $(this).parents(".marking:eq(0)").hide();
        })
    })();


});
//10查看图片
function showpic(src){
    $("#mypic").attr("src",src);
    $("#view_pic").css("display","block");
};