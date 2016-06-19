/**
 * Created by xbd on 2016/6/1.
 */
function doMove(attr,obj,process,target,fnEnd){ //(属性 元素 移动速度 终点位置)必填 回调函数 非必填
    clearInterval(obj.timer);
    process = parseInt(getStyle(obj,attr)) > target ? -process : process;
    obj.timer = setInterval(function(){
        var speed = parseInt(getStyle(obj,attr)) + process;
        if(speed > target && process > 0 || speed < target && process < 0){
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if(speed === target){
            clearInterval(obj.timer)
            fnEnd && fnEnd();
        }
    },100)
}

function getStyle(obj,attr){
    return getComputedStyle(obj) ? getComputedStyle(obj)[attr] : obj.currentStyle[attr];
}
