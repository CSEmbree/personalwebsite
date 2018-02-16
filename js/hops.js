(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);



$(window).scroll(function(event) {

    $(".module").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("swing");
        }
    });

});

var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function(event) {

    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("swing");
        }
    });

});



function swing(target) {
    // the values in vars can (and should) be tweaked to modify the way the swing works
    // * = affected by power
    var vars = {
        origin: 'top center',   // transformOrigin
        perspective: 600,       // transformPerspective
        ease: Power1.easeInOut, // an easeInOut should really be used here...
        power: 1,               // multiplier for the effect that is reduced to 0 over the duration
        duration: 5,            // total length of the effect (well, it can be up to vars.speed longer than this)
        rotation: -90,          // start rotation, also stores target rotations during tween
        maxrotation: 60,        // * max rotation after starting
        speed: 0.5,             // minimum duration for each swing
        maxspeed: 0.2           // * extra duration to add to the larger swings (any sort of real physics seems like overkill)
    };

    // target could be a string selector (it will be selected each swing though...), or a DOM or jQuery object
    vars.target = target;

    // starting position
    TweenMax.set(vars.target, { rotationX: vars.rotation, transformOrigin: vars.origin, transformPerspective: vars.perspective });

    TweenMax.to(vars, vars.duration, { power: 0, delay: 1, onStart: nextSwing, onStartParams: [vars] });
}


function nextSwing(vars) {
    if (vars.power > 0) {
        vars.rotation = (vars.rotation > 0 ? -1 : 1) * vars.maxrotation * vars.power;
        TweenMax.to(vars.target, vars.speed + vars.maxspeed * vars.power, { rotationX: vars.rotation, ease: vars.ease, onComplete: nextSwing, onCompleteParams: [vars] });
    } else {
        TweenMax.to(vars.target, vars.speed, { rotationX: 0, ease: vars.ease, clearProps: 'all' });
    }
}
