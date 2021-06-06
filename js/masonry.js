var prevWidth;

$(function () {
    $('.art-wall').imagesLoaded(function () {

        let i = 0;
        $('.art-wall').children('.art').each(function () {
            $(this).css({"animation-delay": i * 100 + "ms"});
            i++;
        });

        //sleepFor(10000);

        $('.loading').css({"display": "none"});
        $('.art-wall').css({"display": "block"});

        initMasonry();

        var tout;
        window.onresize = function () {
            clearTimeout(tout);
            tout = setTimeout(redoMasonry, 200);
        };
    });
});

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */
    }
}

function initMasonry() {
    $('.art-wall').masonry({
        itemSelector: '.art',
        gutter: 0,
        fitWidth: true,
        isResizeBound: false
    });
    prevWidth = window.innerWidth;
}

function redoMasonry() {
    if (prevWidth != window.innerWidth) {
        $('.art-wall').masonry('destroy');
        $('.art-wall').removeData('masonry');
        initMasonry();
    }
}