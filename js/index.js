window.onload = function () {
    (function () {
        var box = $('#box');
        var ad = $('.ad');
        var ul = $('#imgs');
        var lis = ul.children;
        var ol = $('#ol');
        var arr = $('#arr');
        var arrLeft = $('#left');
        var arrRight = $('#right');
        var imgWidth = ad.offsetWidth;
        // var index =0;
        var timer = null;
        // 0000000动态的生成图片
        for(var i = 0;i<lis.length;i++){
            lis[i].children[0].setAttribute('src','images/'+(i+1)+'.jpg');
        }
        //1.动态生成小方框
        // console.log(lis.length);
        for (var i = 0; i < lis.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = i + 1;
            ol.appendChild(li);
        }
        //2移入到小方块变色
        var olLis = ol.children;//动态生成的children.不用获取重新获取父元素,也可以都到其子元素.
        // console.log(olLis.length);
        olLis[0].setAttribute('class', 'current');
        for (var i = 0; i < olLis.length; i++) {
            // olLis[i].setAttribute('index',i);
            olLis[i].index = i;
            olLis[i].onmouseenter = function () {
                empty();
                this.setAttribute('class', 'current');

                // var index = this.getAttribute('index');
                // 10.让所有的操作都同步起来
                pic = square = this.index;
                //3.移入相应的小方块,让ul移动到相应的位置
                var target = -this.index * imgWidth;
                animate(ul, target);
            }
        }
        //4/鼠标移入的时候,让箭头显示,鼠标移除的时候,让箭头隐藏
        box.onmouseenter = function () {
            arr.style.display = 'block';
            //9.清除定时器
            clearInterval(timer);
        }
        box.onmouseleave = function () {
            arr.style.display = 'none';
            //9.离开时开启定时器
            timer = setInterval(autoLeft, 2000)
        }
        // console.log(lis.length)//5
        //5克隆一张图片放在最后面
        var firstLi = lis[0].cloneNode(true);
        ul.appendChild(firstLi)
        // console.log(lis.length)//6
        //6.给左右按钮注册点击事件,让图片移动
        var pic = 0;//图片的个数
        var square = 0;//小方块的索引
        arrRight.onclick = function () {
            autoLeft();
        }

        arrLeft.onclick = function () {
            if (pic == 0) {
                pic = lis.length - 1;
                ul.style.left = -imgWidth * pic + 'px';
            }
            pic--;
            var target = -imgWidth * pic;
            animate(ul, target);
            //7改变小方块颜色
            square > 0 ? square-- : square = olLis.length - 1;
            empty();
            olLis[square].className = 'current';
        }

        //8.开启定时器
        timer = setInterval(autoLeft, 2000);

        function autoLeft() {
            if (pic == lis.length - 1) {
                pic = 0;
                ul.style.left = 0 + 'px';
            }
            pic++;
            var target = -imgWidth * pic;
            animate(ul, target);
            //7改变小方块颜色
            square < olLis.length - 1 ? square++ : square = 0;
            empty();
            olLis[square].className = 'current';
        }
        /*
        封装了一个清空小方块颜色的方法*/
        function empty() {
            for (var j = 0; j < olLis.length; j++) {
                olLis[j].removeAttribute('class', 'current');
                // olLis[j].className = '';
            }
        }
    })()
}
//
// arrRight.onclick = function(){
//     if(index<lis.length-1){
//         index++;
//     }
//     animate(ul,-index*imgWidth);
// }

// arrLeft.onclick = function(){
//     if(index>0){
//         index--;
//     }
//     animate(ul,-index*imgWidth);
// }
