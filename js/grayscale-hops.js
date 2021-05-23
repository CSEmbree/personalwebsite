/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Slideshow stuff
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow');
},  1000);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);



function experienceMoreLess() {
    var elem = document.getElementById("extra-experience-button");
    if (elem.innerHTML.toLowerCase()=="More Experience".toLowerCase()) {
        elem.innerHTML = "Less Experience";
    }
    else {
        elem.innerHTML = "More Experience";
    }
}









// swing('#gsap');
//
// // just so you can repeat the effect easily. It's not configured well for replaying while it's in motion though; wait until the animation stops to get the full effect again.
// $('#i').on('click', function() { swing('#gsap') });
//
//
// function swing(target) {
//     // the values in vars can (and should) be tweaked to modify the way the swing works
//     // * = affected by power
//     var vars = {
//         origin: 'top center',   // transformOrigin
//         perspective: 600,       // transformPerspective
//         ease: Power1.easeInOut, // an easeInOut should really be used here...
//         power: 1,               // multiplier for the effect that is reduced to 0 over the duration
//         duration: 5,            // total length of the effect (well, it can be up to vars.speed longer than this)
//         rotation: -90,          // start rotation, also stores target rotations during tween
//         maxrotation: 60,        // * max rotation after starting
//         speed: 0.5,             // minimum duration for each swing
//         maxspeed: 0.2           // * extra duration to add to the larger swings (any sort of real physics seems like overkill)
//     };
//
//     // target could be a string selector (it will be selected each swing though...), or a DOM or jQuery object
//     vars.target = target;
//
//     // starting position
//     TweenMax.set(vars.target, { rotationX: vars.rotation, transformOrigin: vars.origin, transformPerspective: vars.perspective });
//
//     TweenMax.to(vars, vars.duration, { power: 0, delay: 1, onStart: nextSwing, onStartParams: [vars] });
// }
//
//
// function nextSwing(vars) {
//     if (vars.power > 0) {
//         vars.rotation = (vars.rotation > 0 ? -1 : 1) * vars.maxrotation * vars.power;
//         TweenMax.to(vars.target, vars.speed + vars.maxspeed * vars.power, { rotationX: vars.rotation, ease: vars.ease, onComplete: nextSwing, onCompleteParams: [vars] });
//     } else {
//         TweenMax.to(vars.target, vars.speed, { rotationX: 0, ease: vars.ease, clearProps: 'all' });
//     }
// }











