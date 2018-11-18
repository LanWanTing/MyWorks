/*APP圖片切換*/
/*
$(function () {
    $('.appBtn1').click(function () {
        $('.app1').stop(true, true).fadeIn(300);
        $('.app2').stop(true, true).fadeOut(300);
        $('.app3').stop(true, true).fadeOut(300);
        $('.app4').stop(true, true).fadeOut(300);
    });
    $('.appBtn2').click(function () {
        $('.app2').stop(true, true).fadeIn(300);
        $('.app1').stop(true, true).fadeOut(300);
        $('.app3').stop(true, true).fadeOut(300);
        $('.app4').stop(true, true).fadeOut(300);
    });
    $('.appBtn3').click(function () {
        $('.app3').stop(true, true).fadeIn(300);
        $('.app1').stop(true, true).fadeOut(300);
        $('.app2').stop(true, true).fadeOut(300);
        $('.app4').stop(true, true).fadeOut(300);
    });
    $('.appBtn4').click(function () {
        $('.app4').stop(true, true).fadeIn(300);
        $('.app1').stop(true, true).fadeOut(300);
        $('.app2').stop(true, true).fadeOut(300);
        $('.app3').stop(true, true).fadeOut(300);
        $('.app3').stop(true, true).fadeOut(300);
    });
});

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
*/

/*APP圖片切換*/
$(function () {
    $('.appBtn1').click(function () {
        $('.app1').css({'display':'block','opacity':'1'});
        $('.app2, .app3, .app4, .app5, .app6, .app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn2').click(function () {
        $('.app2').css({'display':'block','opacity':'1'});
        $('.app1, .app3, .app4, .app5, .app6, .app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn3').click(function () {
        $('.app3').css({'display':'block','opacity':'1'});
        $('.app1, .app2, .app4, .app5, .app6, .app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn4').click(function () {
        $('.app4').css({'display':'block','opacity':'1'});
        $('.app1, .app2, .app3, .app5, .app6, .app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn5').click(function () {
        $('.app5').css({'display':'block','opacity':'1'});
        $('.app1, .app2, .app3, .app4, .app6, .app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn6').click(function () {
        $('.app6').css({'display':'block','opacity':'1'});
        $('.app1, .app2, .app3, .app4, .app5, .app7').css({'display':'none','opacity':'0'});
    });
    $('.appBtn7').click(function () {
        $('.app7').css({'display':'block','opacity':'1'});
        $('.app1, .app2, .app3, .app4, .app5, .app6').css({'display':'none','opacity':'0'});
    });
});


/*APP圖片按鈕顯示設定*/
$(function () {
    var viewW = $(window).width();
    if (viewW <= 768) {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            var targetScroll = $('.workTxtContent').offset().top();
            if (scrollValue >= targetScroll) {
                $('.workApp').stop(true, true).fadeIn(1000);
            } else {
                $('.workApp').stop(true, true).fadeOut(1000);
            }
        });
    } else {
        $('.workApp').show();
    }
    var previousDimensions = {
        width: $(window).width(),
        height: $(window).height()
    }
    $(window).resize(function () {
        var newDimensions = {
            width: $(window).width(),
            height: $(window).height()
        }
        if (newDimensions.height > previousDimensions.height) {
            location.reload();
        }
        previousDimensions = newDimensions
    });
});
