(function($) {
    "use strict";

    /**
     * Magnific popup init
     */
    $('.popup-video').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        zoom: {
            enabled:true
        }
    });

    /*--------------------------------------------------------------
     # Slidedown header
     --------------------------------------------------------------*/
    $(window).scroll(function(){
       if( $(document).scrollTop() > 350 ) {
           $('.slidedown_header').addClass( 'active' );
       } else {
           $('.slidedown_header').removeClass( 'active' );
       }
    });

    /**
     * Menu button open
     */
    $('.menu-button').click(function(){
        $(this).toggleClass('menu-button-open');
        $('.slidedown_menu').slideToggle(300);
    });


    /*--------------------------------------------------------------
     # Custom page title fade onscroll
     --------------------------------------------------------------*/
    function scrollBanner() {
        $(document).scroll(function(){

            // Text Opacity
            var scrollPos = $(this).scrollTop();
            $('.page-title, .breadcrumbs').css({
                'opacity' : 1-(scrollPos/300),
            });

            // Text Parallax Effect
            var transY = scrollPos / 3.4;
            $('.page-title, .breadcrumbs').css({
                'transform' : 'translateY(' + transY + 'px)'
            });
        });
    }

    // Only for devices over 1000px
    if ($(window).width() > 1000) {
        scrollBanner();
    }

    // Call when window resized
    $(window).resize(function() {
        if ($(window).width() > 1000) {
            scrollBanner();
        } else if($(window).width < 999) {
            // do nothing
        }
    });


    /*--------------------------------------------------------------
     # Magnific Popup Init
     --------------------------------------------------------------*/
    $('.popup-video').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        zoom: {
            enabled:true
        }
    });


    /*--------------------------------------------------------------
     # Check if element is in viewport
     --------------------------------------------------------------*/
    $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };



    /*--------------------------------------------------------------
     # Mobile Menu 1
     --------------------------------------------------------------*/

    // Open the menu.
    $('.hamburger-button').on('click', function() {
        $(this).toggleClass('hamburger-button-open');
        $('.mobile-menu-wrapper').toggleClass('mobile-menu-open');
    });

    // Add arrow to submenus.
    $('.mobile-menu-wrapper ul li ul').before($('<span class="mobile-submenu-arrow"><i class="fa fa-caret-right"></i></span>'));

    // Submenu slide up/down.
    $(".mobile-menu > li > span, .mobile-menu .sub-menu > li > span").click(function(event) {
        event.preventDefault();
        if (false == $(this).next().is(':visible')) {
            // If another submenu is open, slide this up.
            $(this).parent().siblings().find(".sub-menu").slideUp(300);
        }
        $(this).next().slideToggle(300);
        $(this).toggleClass("mobile-submenu-active");
    });



    /*--------------------------------------------------------------
     # Initialize Select 2
     --------------------------------------------------------------*/
    $("select").select2({
        width: '100%',
        minimumResultsForSearch: '-1'
    });


})(jQuery);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80556549-1', 'auto');
  ga('send', 'pageview');
//drip
//
// <!-- Drip -->
//
//   var _dcq = _dcq || [];
//   var _dcs = _dcs || {};
//   _dcs.account = '8321936';
//
//   (function() {
//     var dc = document.createElement('script');
//     dc.type = 'text/javascript'; dc.async = true;
//     dc.src = '//tag.getdrip.com/8321936.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(dc, s);
//   })();

// end document

window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
heap.load("3375695941");

// livechat

<script src="https://my.marketeer.co/interface/?k=0x179a19a7b"></script>
