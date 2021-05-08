class ImgViewer {
    setSelImage(SelImage) {
        this._selImage = SelImage;
    }

    show(selImage = null) {
        if (selImage != null) {
            this._selImage = selImage;
        }
        if (this._selImage != null) {
            $("#iv-image").html(`<img src="${this._selImage}" alt="Image"/>`);
            document.documentElement.style.setProperty('--sel-image', `url(${this._selImage}`);
            $("#img-viewer").addClass("img-viewer-visible");
        }
    }
    hide(){
        $('#img-viewer').removeClass("img-viewer-visible");
    }
}


$(function () {

    let vi = new ImgViewer();

    $('#hamburger-button').on("click", function () {

        let i = 0;
        $("#nav-links").children("a").each(function () {
            $(this).css({"animation-delay": i * 50 + "ms"});
            i++;
        });

        $(this).parent("header").parent("nav").toggleClass("nav-visible");
        $('html,body').toggleClass("root-noscroll");
    });

    $('.picture-container').on("click", function (){
        let src = $(this).children("picture").children("img").prop("src");
        vi.show(src);
    });

    $('#img-viewer').on("click", function (e) {
        if ($(e.target).is($("#iv-image").children("img"))) return;
        if ($(e.target).is($(".iv-button"))) return;
        if ($(e.target).is($(".iv-button").children("img"))) return;
        vi.hide();
    });
});

