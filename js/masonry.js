var prevWidth;

$(window).on("load", function () {

    let i = 0;
    $('.showcase').children('.picture-container').each(function () {
        $(this).css({"animation-delay": i * 100 + "ms"});
        i++;
    });

    $('.loading').css({"display": "none"});
    $('.showcase').css({"display": "block"});

    initMasonry();

    var tout;
    window.onresize = function () {
        clearTimeout(tout);
        tout = setTimeout(redoMasonry, 200);
    };
});

function initMasonry() {
    $('.showcase').masonry({
        itemSelector: '.picture-container',
        gutter: 0,
        fitWidth: true,
        isResizeBound: false
    });
    prevWidth = window.innerWidth;
}

function redoMasonry() {
    if (prevWidth != window.innerWidth) {
        $('.showcase').masonry('destroy');
        $('.showcase').removeData('masonry');
        initMasonry();
    }
}