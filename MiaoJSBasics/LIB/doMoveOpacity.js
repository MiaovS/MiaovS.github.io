/**
 * Created by xbd on 2016/6/3.
 */


function doMove(obj,attr,process,target,fnEnd){
    process = target > parseInt( getStyle(obj,attr) ) ? process : -process;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var speed = parseInt( getStyle(obj,attr) ) + process;
        if(speed > target && process > 0){
            speed = target;
        }
        if(speed < target && process < 0 ){
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if(speed === target){
            clearInterval(obj.timer);
            fnEnd && fnEnd();
        }
    },50);
}

function doOpacity(obj,process,target,fnEnd){  //元素 速度 // 透明到、取值0-1 函数（可选参数）
    process = Math.floor(getStyle(obj,'opacity')*100) > target ? -process : process;
    clearInterval(obj.opacity);
    obj.opacity = setInterval(function(){
        var speed = Math.floor(getStyle(obj,'opacity') * 100) + process;
        if(speed > target && process > 0 || speed < target && process < 0){
            speed = target;
        }
        obj.style.opacity = speed / 100;
        if(speed === target){
            clearInterval(obj.opacity);
            fnEnd && fnEnd();
        }
        console.log(speed)
    },60);
}


function getStyle(obj,attr){
    return getComputedStyle(obj) ? getComputedStyle(obj)[attr] : obj.currentStyle[attr];
}

//doem


//<!DOCTYPE html>
//<html lang="en">
//    <head>
//    <meta charset="UTF-8">
//    <title>doMove</title>
//    <style>
//    div{ position:absolute; top:50px; left:10px; width:100px; height:100px; background:red; opacity:1;}
//</style>
//</head>
//<body>
//<button>向下</button>
//<button>向上</button>
//<button>变淡</button>
//<button>变清晰</button>
//<div></div>
//</body>
//</html>
//<script>
//window.onload = function(){
//        var oDiv = document.getElementsByTagName('div')[0];
//        var aBtn = document.getElementsByTagName('button');
//
//        aBtn[0].onclick = function(){
//            doMove(oDiv,'top',20,600);
//        }
//        aBtn[1].onclick = function(){
//            doMove(oDiv,'top',10,50);
//        }
//        aBtn[2].onclick = function(){
//            doOpacity(oDiv,11,0.1)    //元素，透速, 透明到什么程度
//        }
//        aBtn[3].onclick = function(){
//            doOpacity(oDiv,11,1)
//        }
//
//        function doMove(obj,attr,process,target,fnEnd){
//            process = target > parseInt( getStyle(obj,attr) ) ? process : -process;
//            clearInterval(obj.timer);
//            obj.timer = setInterval(function(){
//                var speed = parseInt( getStyle(obj,attr) ) + process;
//                if(speed > target && process > 0){
//                    speed = target;
//                }
//                if(speed < target && process < 0 ){
//                    speed = target;
//                }
//                obj.style[attr] = speed + 'px';
//                if(speed === target){
//                    clearInterval(obj.timer);
//                    fnEnd && fnEnd();
//                }
//            },50);
//        }
//
//        function doOpacity(obj,process,target,fnEnd){  //元素 速度 // 透明到、取值0-1 函数（可选参数）
//            process = getStyle(obj,'opacity') > target ? -process : process;
//            clearInterval(obj.timer);
//            obj.timer = setInterval(function(){
//                var speed = getStyle(obj,'opacity') * 100 + process;
//                console.log(speed)
//                if(speed > target * 100 && process > 0){
//                    speed = target * 100;
//                }
//                if(speed < target * 100 && process < 0){
//                    speed = target* 100;
//                }
//                obj.style.opacity = speed / 100;
//                if(speed / 100 === target){
//                    clearInterval(obj.timer);
//                    fnEnd && fnEnd();
//                }
//            },100);
//        }
//
//        function getStyle(obj,attr){
//            return getComputedStyle(obj) ? getComputedStyle(obj)[attr] : obj.currentStyle[attr];
//        }
//    }
//    </script>