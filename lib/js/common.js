/**
 * Created by Administrator on 2017/1/4.
 */



/**
 * 封装了一个获取标签间文本内容的函数
 * @param ele
 * @returns {*}
 */
function  getText(ele){
    // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
    if(typeof ele.innerText=="string"){
        return ele.innerText;
    }else {
        return ele.textContent;//这是低版本的火狐浏览器支持的方式
    }
}

/**
 * 封装了一个设置标签间文本内容的函数
 * @param ele
 * @param value
 */
function setText(ele,value){
    // 能力检测  就是要看当前的浏览器是否支持此对象的属性或方法
    if(typeof ele.innerText=="string"){
        ele.innerText = value;
    }else {
        ele.textContent = value;
    }
}

/**
 * 封装了一个获取下一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function  getNextElement(ele){
    // 能力检测  就是要看当前的浏览器是否支持此对象的属性方法
    if(ele&&ele.nextElementSibling){  //首先得保证有一个正常的对象存在，再判断是否支持xtElementSibiling这个属性
        return ele.nextElementSibling;
    }else{  //到了else里面说明不支持nextElementSibling，只xtSibling
        ele = ele.nextSibling; //获得当前标签对象的下一个节点
        while(ele&&ele.nodeType!=1){
            ele=  ele.nextSibling;//继续在当前的标签节点找下一个标签节点
        }
        return ele;
    }
}

/*
 * 封装了一个兼容的获取上一个相邻的兄弟姊妹级标签节点的函数
 * @param ele
 * @returns {*}
 */
function  getPreviousElement(ele){
    //能力检测
    if(ele&&ele.previousElementSibling){
        return ele.previousElementSibling;
    }else {
        ele=  ele.previousSibling;
        while(ele&&ele.nodeType!=1){
            ele =   ele.previousSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个获取当前标签对象下面的第一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele){
    // 能力检测
    if(ele&&ele.firstElementChild){
        return ele.firstElementChild;
    }else {
        ele= ele.firstChild;
        while(ele&&ele.nodeType!=1){
            ele=  ele.nextSibling;
        }
        return ele;
    }
}
/*
 * 封装了一个兼容版本的获取当前标签对象的最后一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getLastElement(ele) {
    //能力检测
    if (ele && ele.lastElementChild) {
        return ele.lastElementChild;
    } else {
        ele = ele.lastChild;
        while (ele && ele.nodeType != 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}

var Txt = {
    getText:function(ele){
        // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
        if(typeof ele.innerText=="string"){
            return ele.innerText;
        }else {
            return ele.textContent;//这是低版本的火狐浏览器支持的方式
        }
    },
    setText:function(ele,value){
        // 能力检测  就是要看当前的浏览器是否支持此对象的属性或方法
        if(typeof ele.innerText=="string"){
            ele.innerText = value;
        }else {
            ele.textContent = value;
        }
    }
}

var ele = {
    getNextElement:function(ele){
        // 能力检测  就是要看当前的浏览器是否支持此对象的属性方法
        if(ele&&ele.nextElementSibling){  //首先得保证有一个正常的对象存在，再判断是否支持xtElementSibiling这个属性
            return ele.nextElementSibling;
        }else{  //到了else里面说明不支持nextElementSibling，只xtSibling
            ele = ele.nextSibling; //获得当前标签对象的下一个节点
            while(ele&&ele.nodeType!=1){
                ele=  ele.nextSibling;//继续在当前的标签节点找下一个标签节点
            }
            return ele;
        }
    },
    getPreviousElement:function(ele){
        //能力检测
        if(ele&&ele.previousElementSibling){
            return ele.previousElementSibling;
        }else {
            ele=  ele.previousSibling;
            while(ele&&ele.nodeType!=1){
                ele =   ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement:function(ele){
        // 能力检测
        if(ele&&ele.firstElementChild){
            return ele.firstElementChild;
        }else {
            ele= ele.firstChild;
            while(ele&&ele.nodeType!=1){
                ele=  ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement:function(ele){
        //能力检测
        if (ele && ele.lastElementChild) {
            return ele.lastElementChild;
        } else {
            ele = ele.lastChild;
            while (ele && ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    }
}

function $$(id){
    return  document.getElementById(id);
}

/**
 * 封装了一个从源来的标签追加到目标位置的函数
 * @param source
 * @param target
 */
function moveAll(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        target.appendChild(options[i]);
        i--;
    }
}

/**
 * 封装了一个将选中option移动另一侧的函数
 * @param source
 * @param target
 */
function moveSelected(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        if(options[i].selected){
            target.appendChild(options[i]);
            i--;
        }
    }
}


/**
 * 封装了一个兼容版本的注册事件的函数
 * @param obj
 * @param type
 * @param listener
 */
function addEventListener(obj,type,listener){
    // 能力检测 ，要看当前的浏览器是否支持此对象的属性或是方法
    if(obj&&obj.addEventListener){
        obj.addEventListener(type,listener,false);
    }else if(obj&&obj.attachEvent){
        obj.attachEvent("on"+type,listener);
    }else {
        obj["on"+type] = listener;
    }
}

/**
 * 封装了一个兼容版本的注册事件的函数
 * @param obj
 * @param type
 * @param listener
 */
function removeEventListener(obj,type,listener){
    // 能力检测
    if(obj&&obj.removeEventListener){  // 高级浏览器支持的方式
        obj.removeEventListener(type,listener,false);
    }else if(obj&&obj.detachEvent){ //IE8及之前的浏览器支持的方式
        obj.detachEvent("on"+type,listener);
    }else {
        btn["on"+type]=null;
    }
}

function page(e){
    return {
        pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,
        pageY: e.pageY || e.clientY+document.documentElement.scrollTop
    }
}