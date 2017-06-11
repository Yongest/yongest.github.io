/**
 * Created by LYC on 2017/3/12.
 */
$.ajax({
    type: 'get',
    url: 'http://139.199.192.48:9090/api/getinlanddiscount',
    data: '',
    success: function (data) {
        var result = template('template', data);
        $('.container').append(result);
        //获取图片进行懒加载
        var aImg = $('.img img')
        var imgNum = aImg.length;
        //循环给图片添加属性
        for(var i=0;i<imgNum;i++){
            var reSrc = aImg.eq(i).attr('src');
            aImg.eq(i).attr('src','').attr('alt','').addClass('lazy').css({
                width:140/18.75+'rem',
                height:140/18.75+'rem'
            }).attr('data-original',reSrc)
        }
        //调用懒加载插件
        $("img.lazy").lazyload({
            // placeholder : "../images/lazyload.gif",
            // threshold :-150,
            // event : "foobar",
            effect : "fadeIn",

        });
        // <img class="lazy" alt="" width="640" height="480" data-original="img/example.jpg" />

    }
})
