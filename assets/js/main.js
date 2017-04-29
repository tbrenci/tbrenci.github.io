

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER
         * ----------------------------------------------------------------------------------------
         */

        $(window).load(function () {


            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');

            $(".menu-area").sticky({
                topSpacing: 0,
            });


            
            $(document).on('click', '.navbar-collapse.in', function (e) {
                if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                    $(this).collapse('hide');
                }
            });

			
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
            });

            $('.scrollup').on("click", function () {
                $("html, body").animate({
                    scrollTop: 0
                }, 800);
                return false;
            });


        });


        /*
		* scroll
         */
        $('a.smooth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 0
            }, 1000);
            e.preventDefault();
        });



    });

})(jQuery);