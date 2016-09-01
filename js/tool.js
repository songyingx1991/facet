/**
 * Created by hxsd on 2016/8/12.
 */

function show(){
	
	var oDiv=document.getElementsByClassName("foodName")[0];
    //alert(oDiv.length)
    var oUl=document.getElementsByClassName("ul1")[0];
    var aLi=oUl.getElementsByTagName('li');
    var w=aLi.length*aLi[0].offsetWidth;                     //ul的宽度
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';

    function startMove(speed){
        var timer=null;
        //timer=setInterval(move,30);
        function move(){
            var left=oUl.offsetLeft;              //oUl距离父级div盒子的左边距
            if(left<=-w){
                oUl.style.left=0;                 //oUl.style.left本身带有px的单位
            }
            else{
                oUl.style.left=oUl.offsetLeft-speed+"px";
            }
        }
        timer=setInterval(move,30);
        oDiv.onmousemove=function(){
            clearInterval(timer);
        };
        oDiv.onmouseout=function(){
            timer=setInterval(move,30);
        }
    }
    startMove(1);

}
    
