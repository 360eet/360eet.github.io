/**
 * Created by _Nomo on 2016/12/20.
 */
$(function () {
    $('.side').click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    Vbrowser();
    console.log("浏览器："+browser+" 版本号："+version);
    if(browser == "Edge" || browser == "IE" || browser == "IE11+" || browser == "Firefox" ){
        $(".case-pic").css({"display":"none"});
        $(".case-img").css({"display":"block"});
    }else{
        $(".case-pic").css({"display":"block"});
        $(".case-img").css({"display":"none"});
    }


    $(".lettet-title img").css({"margin-left":"0"});
    $(".product-page .lettet-title .lettet-title-text").css({"left":"50px","opacity":"1"});

    $('.head-bg .title-one').css({"left":"200px","opacity":"1"});
    $('.head-bg .title-two').css({"left":"120px","opacity":"1"});
    $('.head-bg .DC').css({"left":"200px","transform":"rotate(360deg)","-ms-transform":"rotate(360deg)","-moz-transform":"rotate(360deg)","-o-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)"});
    $('.head-bg .DJ').css({"transform":"rotateY(0deg)","-ms-transform":"rotateY(0deg)","-moz-transform":"rotateY(0deg)","-o-transform":"rotateY(0deg)","-webkit-transform":"rotateY(0deg)"});

});

// 页面载入后的效果
$(window).load(function () {
    $('.banner .img-bg .begin').css({'left':'0','opacity':'1'});
    $('.banner .img-bg .title-2').css({'margin-left':'0','opacity':'1'});
    $('.banner .img-bg .title-3').css({'opacity':'1'});
    $('.banner .img-bg .title-4').css({'opacity':'1'});
    $('.banner .img-bg .line-y').css({'opacity':'1'});
});

//滚轴事件
$(window).scroll( function() {
    var a = $(this).scrollTop();
    if(a >= 100){
        $('.side').css({'opacity':'1'});
    }else {
        $('.side').css({'opacity':'0'});
    }
} );




















// 浏览器版本
var browser="unknown";
var version=0;
var agent=navigator.userAgent;

function Vbrowser(){
    var i=-1;
    if((i=agent.indexOf("Edge"))!=-1){//检测Edge
        browser="Edge";
        var starti=i+browser.length+1;
        version=parseFloat(agent.slice(starti,starti+3));

    }else if((i=agent.indexOf("IE"))!=-1){//检测IE 10以下的版本
        browser="IE";
        var starti=i+browser.length+1;
        version=parseFloat(agent.slice(starti,starti+3));

    }else if((i=agent.indexOf("Firefox"))!=-1){//检测firefox的版本
        browser="Firefox";//检测Firefox
        var starti=i+browser.length+1;
        version=parseFloat(agent.slice(starti,starti+3));
    }else if((i=agent.indexOf("OPR"))!=-1){//检查OPR
        browser="OPR";
        var starti=i+browser.length+1;
        version=parseFloat(agent.slice(starti,starti+3));
    }else if((i=agent.indexOf("Chrome"))!=-1){//检查Chrome
        browser="Chrome";
        var starti=i+browser.length+1;
        version=parseFloat(agent.slice(starti,starti+3));
    }else if((i=agent.indexOf("Safari"))!=-1){//检查Safari
        browser="Safari";
        var starti=i+browser.length+1;
        version=parseFloat(agent.slice(starti,starti+3));
    }else if(agent.indexOf("Trident")!=-1){//检测IE 11的版本：Trident
        browser="IE11+";
        var i=agent.indexOf("rv");
        var starti=i+2+1;
        version=parseFloat(agent.slice(starti,starti+3));
    }
}