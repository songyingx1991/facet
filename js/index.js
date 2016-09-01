/**
 * Created by hxsd on 2016/8/11.
 */
/*轮播图渐变*/
function carousel(){
    var i=1;
    setInterval(banner_bian,5000);
    function banner_bian(){
    	console.log(i);
        $(".banner-bg li").eq(i).attr("style","opacity: 1;background-size:cover;").siblings().attr("style","opacity: 0;background-size:cover;");
        i++;
        if(i>4) i=1;
    }


}
carousel();