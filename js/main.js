// JavaScript Document
$(function () {
    console.log('reading');

    var showNav = true;
    hideNav();


    $('#arrow').click(function () {

        var myMargin;

        if (showNav) {
            //console.log('show nav');
            myMargin = -210;

            $('#arrow img').attr('src', 'images/arrowMore.gif');

        } else {
            //console.log('hide nav');
            myMargin = 0;
            $('#arrow img').attr('src', 'images/arrowLess.gif');
        }
        $('#classInfo').animate({
            marginLeft: myMargin,
        });

        showNav = !showNav;
    });

    function hideNav() {
        console.log('hideNav');
        $('#classInfo').animate({
            marginLeft: -210,
        }, 750, scrollContent);

        showNav = false;
    }

    function scrollContent() {
        $('#arrow img').attr('src', 'images/arrowMore.gif');
        var myVal = $('#current').offset().top - 150;
        $('html, body').animate({
            scrollTop: myVal
        }, 1000);
    }
    return false;
});