$(function(){
    /*menu按鈕切換時動態效果*/
    var off = 1;
    $('.menuBtn').click(function(){
        if (off == 1) {
            $('.menuBtn span').eq(0).addClass('lineA1');
            $('.menuBtn span').eq(1).addClass('lineB1');
            $('.menuBtn span').eq(2).addClass('lineC1');
            $('body').addClass('offScroll');
            $('.menuWrap').stop(false, true).slideDown(500);
            $('.navBox').stop(false, true).show();
            $('.menuTxt').stop(false, true).show();
            off = 0;
        }
        else{
            $('.menuBtn span').eq(0).removeClass('lineA1');
            $('.menuBtn span').eq(1).removeClass('lineB1');
            $('.menuBtn span').eq(2).removeClass('lineC1');
            $('body').removeClass('offScroll');
            $('.menuWrap').stop(false, true).slideUp(500);
            $('.navBox').stop(false, true).hide();
            $('.menuTxt').stop(false, true).hide();
            off = 1;
        }
    });
    /*topBtn置頂按鈕*/
    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();
        var targetScroll = $('.proList').offset().top;
        if (scrollValue >= targetScroll) {
            $('.topBtn').stop(true,true).fadeIn(1000);
        } else {
            $('.topBtn').stop(true,true).fadeOut(1000);
        }
    });
    $('.topBtn').click(function(){
        $('html,body').animate({scrollTop:0} ,1500 ,'easeOutCirc');
    });
});