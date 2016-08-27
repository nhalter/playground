$(function() {
  var a = function() {
    var b = $(window).scrollTop();
    var d = $("#scroller-anchor").offset({scroll:false}).top;
    var c=$(".tabs");
    if (b>d) {
      c.css({position:"fixed",top:"0px"})
    } else {
      if (b<=d) {
        c.css({position:"relative",top:""})
      }
    }
  };
  $(window).scroll(a);a()
});


$(function() {
  $('a.scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/***** Fixed Tabs *****/


var main = function () {

  var elementPosition = $('nav').offset();

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
    sr.reveal('.col');


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
               'opacity' : 0.3,
               'position': 'fixed',
               'top': 0,
               'left': 0,
               'background-color': 'rgba(0,0,0,1)',
               'width': '100%',
               'z-index': 10000,
               'transition' : 'opacity 0.3s ease-in-out'
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
            left:'0px'
        }, 200);

        $('#overlay').animate({
            left: '-2000px'
        }, 200);

    });

});

};

$(document) .ready(main);
