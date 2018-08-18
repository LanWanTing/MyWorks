/*APP圖片切換*/
$(function () {
    $('.appBtn1').click(function () {
        $('.app1').css({'display':'block','opacity':'1'});
        $('.app3,.app4,.app2').css({'display':'none','opacity':'0'});
    });
    $('.appBtn2').click(function () {
        $('.app2').css({'display':'block','opacity':'1'});
        $('.app3,.app4,.app1').css({'display':'none','opacity':'0'});
    });
    $('.appBtn3').click(function () {
        $('.app3').css({'display':'block','opacity':'1'});
        $('.app2,.app4,.app1').css({'display':'none','opacity':'0'});
    });
    $('.appBtn4').click(function () {
        $('.app4').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1').css({'display':'none','opacity':'0'});
    });
});
