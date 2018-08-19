/*APP圖片切換*/
$(function () {
    $('.appBtn1').click(function () {
        $('.app1').css({'display':'block','opacity':'1'});
        $('.app3,.app4,.app2,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn2').click(function () {
        $('.app2').css({'display':'block','opacity':'1'});
        $('.app3,.app4,.app1,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn3').click(function () {
        $('.app3').css({'display':'block','opacity':'1'});
        $('.app2,.app4,.app1,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn4').click(function () {
        $('.app4').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn5').click(function () {
        $('.app5').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app6,.app4,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn6').click(function () {
        $('.app6').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app5,.app4,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn7').click(function () {
        $('.app7').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app5,.app6,.app4').css({'display':'none','opacity':'0'});
    });
});
