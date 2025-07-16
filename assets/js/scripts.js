/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

// 렌즈
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

// 타이핑 효과
document.addEventListener("DOMContentLoaded", function () {
    const forwardFrames = ["ㄱ", "기", "김", "김ㅈ", "김자", "김자ㅇ", "김자여", "김자연"];
    const backwardFrames = ["김자", "김", ""];
    const frames = [...forwardFrames, ...backwardFrames];

    const target = document.getElementById("typing-name");

    let index = 0;

    function typeStep() {
        target.textContent = frames[index];

        let delay = 150; // 기본 딜레이

        // "김자연"일 때 3초 멈춤
        if (frames[index] === "김자연") {
            delay = 5000;
        }

        index++;

        if (index >= frames.length) {
            index = 0;
        }

        setTimeout(typeStep, delay);
    }

    typeStep();
});


jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    // (function () {
    //     $('a[href*=#]').bind("click", function (e) {
    //         var anchor = $(this);
    //         $('html, body').stop().animate({
    //             scrollTop: $(anchor.attr('href')).offset().top
    //         }, 1000);
    //         e.preventDefault();
    //     });
    // }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#7ecbfa',
                trackColor: '#ebebeb',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    // (function () {

    //     var $grid = $('#grid');

    //     $grid.shuffle({
    //         itemSelector: '.portfolio-item'
    //     });

    //     /* reshuffle when user clicks a filter item */
    //     $('#filter a').click(function (e) {
    //         e.preventDefault();

    //         // set active class
    //         $('#filter a').removeClass('active');
    //         $(this).addClass('active');

    //         // get group name from clicked item
    //         var groupName = $(this).attr('data-group');

    //         // reshuffle grid
    //         $grid.shuffle('shuffle', groupName);
    //     });


    // }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    // (function () {
    //     $('.image-link').magnificPopup({

    //         gallery: {
    //             enabled: true
    //         },
    //         removalDelay: 300, // Delay in milliseconds before popup is removed
    //         mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    //         type: 'image'
    //     });

    // }());



    // (function () {
    //     $('.popup-video').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-with-zoom',
    //         removalDelay: 300,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // }());




    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: false

        }).init();

    }());

    // -------------------------------------------------------------
    // Popup JS
    // -------------------------------------------------------------

    $(function () {
        $('#popup01').click(function () {
            $('#pop01').show();
        });
        $('#popup02').click(function () {
            $('#pop02').show();
        });

        $('.popup i').click(function () {
            $('.popup').hide();
        });
    });

});


