var main = function () {


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
               'opacity' : 0.5,
               'position': 'fixed',
               'top': 0,
               'left': 0,
               'background-color': 'rgba(0,0,0,0.7)',
               'width': '100%',
               'z-index': 5000,
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
