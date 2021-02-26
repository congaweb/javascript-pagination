$(function () {
    /* GNB */
    $('.gnb .depth1 .depth2').hide();
    $('.gnb .depth1').mouseenter(function () {
        $(this).parents('.header-wrap').addClass('on');
        $('.gnb .depth1').removeClass('on');
        $(this).addClass('on');
        $(this).children('.depth2').stop().fadeIn(200);
    });

    $('.gnb .depth1').mouseleave(function () {
        $(this).parents('.header-wrap').removeClass('on');
        $('.gnb .depth1').removeClass('on');
        $(this).children('.depth2').stop().fadeOut(200);
    });

    /* All-menu */
    $('.all-menu-open').click(function () {
        var innerWidth = window.innerWidth;
        if (innerWidth > 768) {
            $('.all-menu-view').stop().fadeIn(200);
        } else {
            $('.gnb-mo-wrap').stop().show(100);
            $('.gnb-mo-wrap div').addClass('on');
        }
    });
    $('.all-menu-close').click(function () {
        $('.all-menu-view').stop().fadeOut(200);
    });

    /* GNB-MO */
    $('.gnb-mo-wrap').hide();
    $('.gnb-mo .depth1>a').click(function () {
        $('.gnb-mo .depth2').stop().slideUp(300);
        $(this).next('.depth2').stop().slideToggle(300);
    });
    $('.menu-close').click(function () {
        $('.gnb-mo-wrap').stop().hide(300);
        $('.gnb-mo-wrap div').removeClass('on');
    });

    /*LNB*/
    $('.bread-crumb button').click(function () {
        $(this).toggleClass('on');
        $(this).parent().next('.lnb').stop().slideToggle(300);
    });
});

$(document).ready(function () {
    if (document.readyState === 'complete') {
        getFilterWidth();
    } else {
        document.addEventListener('readystatechange', function () {
            if (document.readyState === 'complete') {
                getFilterWidth();
            }
        });
    }

    function getFilterWidth() {
        if (!$('.container').hasClass('introduce')) {
            return false;
        } else {
            var targetObject = $('.introduce .filter-wrap');
            var getWidth = null;
            targetObject.attr('data-trigger', 1);
            $(window)
                .resize(function () {
                    if ($(window).width() > 768) {
                        targetObject.find('ul').css({
                            width: 'auto',
                        });
                        targetObject.attr('data-trigger', 1);
                        return false;
                    } else {
                        if (targetObject.attr('data-trigger') == 1) {
                            getWidth = 0;
                            targetObject.find('ul li').each(function () {
                                var a = $(this).outerWidth();
                                getWidth = getWidth + a;
                            });
                            targetObject.find('ul').width(getWidth + 2);
                            targetObject.attr('data-trigger', 0);
                        } else {
                            return false;
                        }
                    }
                })
                .resize();
        }
    }
});
