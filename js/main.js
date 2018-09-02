jQuery(document).ready(function( $ ) {

    $('#menuToggle, .menu-close').on('click', function(){
        $('#menuToggle').toggleClass('active');
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
    });

    $(document).ready(function(){
          $("#menu").on("click","a", function (event) {
              event.preventDefault();
              var id  = $(this).attr('href'),
                  top = $(id).offset().top;
              $('body,html').animate({scrollTop: top}, 1500);
          });
      });
      


});
