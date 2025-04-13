// all functions ------------------
function initOutdoor() {
    "use strict";
    $(".loader").fadeOut(300, function() {
        $("#main").animate({
            opacity: "1"
        }, 900);
    });
    initgalheight();

    // popups    ------------------
    $(".image-popup").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
    $(".popup-gallery").lightGallery({
        selector: "a",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: true,
        counter: false
    });

    $(".hide-column").bind("click", function() {
        $(".not-vis-column").animate({
            right: "-100%"
        }, 500);
    });
    $(".show-info").bind("click", function() {
        $(".not-vis-column").animate({
            right: "0"
        }, 500);
    });

    // isotope    ------------------
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                $('html, body').animate({
                    scrollTop: $('.gallery-items').offset().top - 90
                }, 600);
                var c = $(this).attr("data-filter");
                setTimeout(function () {
                    a.isotope({
                        filter: c
                    });
                }, 700);
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
            a.isotope("on", "layoutComplete", function(a, b) {
                var c = a.length;
                $(".num-album").html(c);
            });
        }
        var b = {
            touchbehavior: true,
            cursoropacitymax: 1,
            cursorborderradius: "0",
            background: "#eee",
            cursorwidth: "10px",
            cursorborder: "0px",
            cursorcolor: "#292929",
            autohidemode: false,
            bouncescroll: false,
            scrollspeed: 120,
            mousescrollstep: 90,
            grabcursorenabled: true,
            horizrailenabled: true,
            preservenativescrolling: true,
            cursordragontouch: true,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            }
        };
    }
    var j = $(".portfolio_item , .gallery-item").length;
    $(".all-album , .num-album").html(j);
    n();
    $(".portfolio_item a").on("click", function() {
        var a = $(this).attr("href");
        window.location.href = a;
        return false;
    });
    $(".filter-button").on("click", function() {
        $(".hid-filter").fadeToggle(500);
        $(".filter-button i").toggleClass("roticon");
    });

    //  other functions    ------------------
    function showHidDes() {
        $(".show-hid-content").removeClass("ishid");
        $(".hidden-column").animate({
            left: "90px",
            opacity: 1
        }, 500);
        $(".anim-holder").animate({
            left: "450px"
        }, 500);
    }
    function hideHidDes() {
        $(".show-hid-content").addClass("ishid");
        $(".hidden-column").animate({
            left: "-450px",
            opacity: 0
        }, 500);
        $(".anim-holder").animate({
            left: "0"
        }, 500);
    }
    $(".show-hid-content").on("click", function() {
        if ($(this).hasClass("ishid")) showHidDes(); else hideHidDes();
    });
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 300) $(".to-top").addClass("vistotop"); else $(".to-top").removeClass("vistotop");
    });
    $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(".fix-box").scrollToFixed({
        marginTop: 90,
        minWidth: 1036
    });
    var gR = $(".gallery_horizontal"), w = $(window);
    function initGalleryhorizontal() {
        var a = $(window).height(), c = $("header").outerHeight(), d = $("footer").outerHeight(), e = $("#gallery_horizontal");
        e.find("img").css("height", a - c - d);
        if (gR.find(".owl-stage-outer").length) {
            gR.trigger("destroy.owl.carousel");
            gR.find(".horizontal_item").unwrap();
        }
        if (w.width() > 1036) gR.owlCarousel({
            autoWidth: true,
            margin: 4,
            items: 3,
            smartSpeed: 1300,
            loop: true,
            nav: false,
            dots: false,
            onInitialized: function() {
                gR.find(".owl-stage").css({
                    height: a - c - d,
                    overflow: "hidden"
                });
            }
        });
    }
    if (gR.length) {
        initGalleryhorizontal();
        w.on("resize.destroyhorizontal", function() {
            setTimeout(initGalleryhorizontal, 150);
        });
    }
    if (navigator.appVersion.indexOf("Win")!=-1) {
        var timestamp_mousewheel = 0;
        gR.on("mousewheel", ".owl-stage", function(a) {
            var d = new Date();
            if((d.getTime() - timestamp_mousewheel) > 1000){
                timestamp_mousewheel = d.getTime();
            if (a.deltaY < 0) gR.trigger("next.owl"); else gR.trigger("prev.owl");
                a.preventDefault();
            }
        });
    }
    $(".resize-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("next.owl.carousel");
    });
    $(".resize-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("prev.owl.carousel");
    });

    // counter    ------------------
    var $i = 1;
    $(document.body).on("appear", ".stats", function(a) {
        if (1 === $i) stats(2600);
        $i++;
    });
    function number(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(e); else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function stats(a) {
        $(".stats .num").each(function() {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            number(c, d, b, a);
        });
    }
    $(".animaper").appear();

    //    menu    ------------------
    $(".nav-holder").addClass("main-menu");
    $(".nav-button-holder").on("click", function() {
        $(".main-menu").toggleClass("vismobmenu");
    });
    function mobMenuInit() {
        var ww = $(window).width();
        if (ww < 1064) {
            $(".menusb").remove();
            $(".main-menu").removeClass("nav-holder");
            $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
            $(".menusb").menu();
        } else {
            $(".menusb").remove();
            $(".main-menu").addClass("nav-holder");
        }
    }
    mobMenuInit();

    //    css ------------------
    $(window).on("resize", function() {
        mobMenuInit();
    });
    $("#menu").menu();
}
//    Parralax    ------------------
function initparallax() {
    var b = $(".content");
    b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
        s = skrollr.init();
        s.destroy();
        skrollr.init({
            forceHeight: !1,
            easing: "outCubic",
            mobileCheck: function() {
                return !1;
            }
        });
    });
}
    initparallax();
function initgalheight() {
    var a = $(window).height(), b = $("header").outerHeight(), c = $("footer").outerHeight(), d = $(".port-subtitle-holder").outerHeight(), e = $(".p_horizontal_wrap");
    e.css("height", a - b - c);
    $(" #portfolio_horizontal_container .portfolio_item img , .port-desc-holder").css({
        height: $(".p_horizontal_wrap").outerHeight(true) - d
    });
}
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

//    Initialize everything when the DOM is ready
$(document).ready(function() {
    initOutdoor();
});