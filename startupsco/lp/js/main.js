$("button#light").click(function() {
    $("link[rel=stylesheet]").attr({
        href: "css/style2.css"
    });
});

$("button#dark").click(function() {
    $("link[rel=stylesheet]").attr({
        href: "css/style.css"
    });
});


/* change right CTA color based on left tab color */



$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 1000) {
        $('.fixed-nav').fadeIn();
    } else {
        $('.fixed-nav').fadeOut();
    }

});

/* animated svg icons w/ vivus.js */

jQuery(function() {
    // Define your callback
    var myCallback = function() {};

    // Get your HTMLCollection of SVG to animate
    var myElements = document.getElementsByClassName("icon-vivus");

    // Go across them to create a Vivus instance
    // with each of them
    for (var i = myElements.length - 1; i >= 0; i--) {
        new Vivus(myElements[i], {
            duration: 50,
            type: 'async'
        }, myCallback);
    }
});

/* black overlay on scroll */

$(function() {
    $(window).scroll(function() {
        var currentScrollTop = $(window).scrollTop();
        $('.blackOverlay').css('opacity', currentScrollTop / $('.blackOverlay').height());

    });
});


/* Left Nav */

var sections = $('.scroll-active'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - 400;
        bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);

    return false;
});


var main = function() {


      /* scroll reveal */
    window.sr = ScrollReveal();
    sr.reveal('.tldr');
    sr.reveal('.fade');


    /* mobile menu */

    $('.icon-menu').click(function() {


        $('.menu').animate({
            left: '0px'
        }, 200);

        $('body').animate({
            left: '285px'
        }, 220);




        $(function() {

            var docHeight = $(document).height();

            $("body").append("<div id='overlay'></div>");

            $("#overlay")
                .height(docHeight)
                .css({
                    'opacity': 0.3,
                    'position': 'fixed',
                    'top': 0,
                    'left': 0,
                    'background-color': 'rgba(0,0,0,1)',
                    'width': '100%',
                    'z-index': 10000,
                    'transition': 'opacity 0.3s ease-in-out'
                });
        });



        $('#overlay').animate({
            left: '285px'
        }, 200);



        $('.icon-close').click(function() {
            $('.menu').animate({
                left: '-285px'
            }, 200);

            $('body').animate({
                left: '0px'
            }, 200);

            $('#overlay').animate({
                left: '-2000px'
            }, 200);

        });

    });

};

$(document).ready(main);
