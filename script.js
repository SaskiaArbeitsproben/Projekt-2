// Pageload Image --------------------------------------
$(window).on("load", function () {
    $(".wrapper-load-img").fadeOut(1000);

});

$(document).ready(function () {
    var $window = $(window);

    // Display scroll down icon on mobile device-------------------------------------
    if ($window.width() < 1200) {
        $(".scroll-down-icon").css("display", "block");
    }

    // Place "to top icon" at beginning of footer -----------------------------
    if ($(window).width() > 678) {
        $margin = parseInt($(".main").css("margin-bottom")); // Get margin-bottom of .main div => footer height
        $iconHeight = parseInt($(".to-top").css("height")); // Get height of "to-top icon"
        $bottom = $margin - $iconHeight / 2; // Calculate margin-bottom
        $(".to-top").css("bottom", $bottom + "px"); // Apply margin-bottom to element
        $footerHeight = $("footer").css("height", $margin);
    } else {
        $("footer").css("height", "auto");
        $(".to-top").css("bottom", "-28px");
    }
    // Flip back to top -----------------------------------------------------
    $(".to-top").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

    // scroll effect  ------------------------------------------------------------

    // Section 2 Headline Parallax on desktop

    // if ($(window).width() > 1200) {
    var $horizontal = $('.parallax-inner');
    $window.scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();
        scrollPercent = (s / (d + c));
        $start = parseInt($(".section-part-2 .wrapper-headline").css("left"));
        var position = $start + (scrollPercent * ($(document).width()));
        $horizontal.css('left', position);
    });
    // }


    // Give animations class to slide up when they are in view
    var $animation_elements = $('.animate-down, .animate-up');
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = window_top_position + window_height;
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = element_top_position + element_height;

            if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
                $element.removeClass('exit-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);

    // Sidebar scroll icon
    var $vertical_sidebar_icon = $('.line');
    $window.scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();
        scrollPercent = (s / (d + c));
        $start = $(".sidebar-line").outerHeight();

        var position = (scrollPercent * ($(document).width()) - $start) / 6;


        $vertical_sidebar_icon.css('top', position);
    });

    // Sidebar Variables
    $sectionheight = parseInt($(".hero").height()); // Get hero height
    $sidebarInPos = $sectionheight - 300; // Minus 300px to get position where sidebar fades in
    $sectionHeightBottom = parseInt($(".main").css("margin-bottom")) + parseInt($(".section-part-5").outerHeight());
    $sidebarOutPos = $(document).height() - $sectionHeightBottom - 100;

    // Scroll function
    var lastScrollTop = 0;
    $window.scroll(function () {
        var st = $(this).scrollTop();

        // Detect Sidebar Sections
        if (st > $sidebarInPos && st < $sidebarOutPos) {
            $(".wrapper-sidebar").removeClass("animate-out-x").addClass("animate-in-x");
        } else if (st < $sidebarInPos || st > $sidebarOutPos) {
            $(".wrapper-sidebar").removeClass("animate-in-x").addClass("animate-out-x");
        }

        if (st > lastScrollTop) {// downscroll code
            console.log("down");

            // Menu
            $("header .wrapper-scroll-effect").removeClass("bg-menu").css("position", "absolute");

            // $margin = "20px";
            // $(".line").css("margin-top", $margin);

        } else { // upscroll code
            console.log("up");

            // Menu
            $("header .wrapper-scroll-effect").addClass("bg-menu").css("position", "fixed");
            if ($window.scrollTop() == 0) {
                // Detect if scrolled to top
                $("header .wrapper-scroll-effect").removeClass("bg-menu").css("position", "absolute");
            }

            $margin = "0px";
            $(".line").css("margin-top", $margin);


        }

        lastScrollTop = st;

    });

});

