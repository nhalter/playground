$(function() {
    var header = $(".fixed-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 700) {
            nav.removeClass('vis-no').addClass("vis-yes");
        } else {
            nav.removeClass("vis-yes").addClass('vis-no');
        }
    });
});



var sections = $('.scroll-active'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top
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


/* cta bar

function update() {
    if ($(window).scrollTop() > 1200) {
        $('.rac_scroll').animate({
            "bottom": '0px'
        }, 300);
    } else {
        $('.rac_scroll').animate({
            "bottom": '-90px'
        }, 300);
    }
}

$(function() {
    $('.rac_scroll').click(function() {
        $(this).hide(400);
        return false;
     });
 });

setInterval(update, 500); end cta bar */

/*$(function() {
  $('a.scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});*/

var main = function() {

    /*var elementPosition = $('nav').offset();

      $(window).scroll(function () {
          if ($(window).scrollTop() > elementPosition.top) {
              $('nav').css('position', 'fixed').css('top', '0');
          } else {
              $('nav').css('position', 'static');
          }
       });

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
