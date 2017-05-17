/**
 * 封装了一个通过class或者id获取标签的方法
 *  @param sel
 */
function $(sel) {
  var sel1;
  if (sel.trim().indexOf('.') == 0) {
    sel1 = sel.split('.')[1];
    return document.getElementsByClassName(sel1)[0];
  } else if (sel.trim().indexOf('#') == 0) {
    sel1 = sel.split('#')[1];
    return document.getElementById(sel1);
  } else {
    console.log('未选中相应的标签');
  }
}


 /**
       * 封装了一个兼容版本的获取当前对象内嵌属性的函数
       * @param obj
       * @param attr
       * @returns {*}
       */
      function getStyle(obj,attr){
        // 能力检测 ，就是要看当前的浏览器是否支持此对象的属性和方法
        if(obj.currentStyle){  //IE浏览器支持的属性
          return obj.currentStyle[attr];
        }else { // 谷歌和火狐  IE9+
          return  window.getComputedStyle(obj,false)[attr];
        }
      }

    
/**
 * 封装了一个匀速移动的动画函数
 * @param obj
 * @param target
 */
  function animate(obj,attr,target){
        clearInterval(obj.timerId);
        obj.timerId= setInterval(function (){
          // 获取对象的当前位置
//          var leader = obj.offsetLeft; // 只能获得当前的位置，不合适了
          var leader = parseInt(getStyle(obj,attr))||0;
          console.log(leader);
          var step =(target-leader)/10 ;  //63.15  0.9  0  1
          step= step>0?Math.ceil(step):Math.floor(step);
          leader = leader + step;
          obj.style[attr] = leader + 'px';
          if(leader==target){
            clearInterval(obj.timerId);
          }
        },15)

      }