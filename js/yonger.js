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
 * 封装了一个匀速移动的动画函数
 * @param obj
 * @param target
 */
function animate(obj, target) {
  clearInterval(obj.timerId); // 保证当前标签对象运动的时候，只会开启一个定时器
  var step, leader;
  obj.timerId = setInterval(function () {  // 开启定时器
    step = 20;//定义一个步长
    leader = obj.offsetLeft; //获取标签对象的当前的位置
    step = leader < target ? step : -step; //判断步长是正还是负
    if (Math.abs(leader - target) > Math.abs(step)) { //修改判断条件
      leader = leader + step;//在当前的位置加上步长
      obj.style.left = leader + 'px';
    } else {
      clearInterval(obj.timerId); //清除当前对象的定时器
      obj.style.left = target + 'px'; //最后不足一个步长的时候，不用迈那一步了，直接设置成目标位置即可
    }
  }, 15);
}