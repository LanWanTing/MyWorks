/*APP圖片切換*/
$(function () {
    $('.appBtn1').click(function () {
        $(this).children('b').addClass('stay');
        $('.appBtn2,.appBtn3,.appBtn4,.appBtn5,.appBtn6,.appBtn7').children('b').removeClass('stay');
        $('.app1').css({'display':'block','opacity':'1'});
        $('.app3,.app4,.app2,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn2').click(function () {
        $(this).children('b').addClass('stay');
        $('.appBtn1,.appBtn3,.appBtn4,.appBtn5,.appBtn6,.appBtn7').children('b').removeClass('stay');
        $('.app2').css({'display':'block','opacity':'1'});
        $('.app3,.app4,.app1,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn3').children('b').click(function () {
        $(this).addClass('stay');
        $('.appBtn1,.appBtn2,.appBtn4,.appBtn5,.appBtn6,.appBtn7').children('b').removeClass('stay');
        $('.app3').css({'display':'block','opacity':'1'});
        $('.app2,.app4,.app1,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn4').click(function () {
        $(this).children('b').addClass('stay');
        $('.appBtn1,.appBtn2,.appBtn3,.appBtn5,.appBtn6,.appBtn7').children('b').removeClass('stay');
        $('.app4').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app5,.app6,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn5').click(function () {
        $(this).children('b').addClass('stay');
        $('.appBtn1,.appBtn2,.appBtn3,.appBtn4,.appBtn6,.appBtn7').children('b').removeClass('stay');
        $('.app5').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app6,.app4,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn6').click(function () {
        $(this).children('b').addClass('stay');
        $('.appBtn1,.appBtn2,.appBtn3,.appBtn4,.appBtn5,.appBtn7').children('b').removeClass('stay');
        $('.app6').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app5,.app4,.app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn7').children('b').click(function () {
        $(this).addClass('stay');
        $('.appBtn1,.appBtn2,.appBtn3,.appBtn4,.appBtn5,.appBtn6').children('b').removeClass('stay');
        $('.app7').css({'display':'block','opacity':'1'});
        $('.app3,.app2,.app1,.app5,.app6,.app4').css({'display':'none','opacity':'0'});
    });
});
