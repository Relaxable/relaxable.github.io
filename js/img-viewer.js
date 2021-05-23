class ImgViewer {
    constructor(container, pictureContainer) {
        this._container = container;
        this._pictureContainer = pictureContainer;
    }

    show(selIndex) {
        this._selIndex = selIndex;
        this._showImage()
        $("#img-viewer").addClass("img-viewer-visible");
    }

    nav(back = false) {
        this._selIndex = (back ? this._selIndex -= 1 : this._selIndex += 1);
        this._showImage()
    }

    hide() {
        $('#img-viewer').removeClass("img-viewer-visible");
    }

    _showImage() {
        let image = this._container.children(this._pictureContainer).eq(this._selIndex).find("img").prop("src");
        $("#iv-image").html(`<img src="${image}" alt="Image"/>`);
        document.documentElement.style.setProperty('--sel-image', `url(${image}`);
    }
}

$(function () {

    let vi = new ImgViewer($("#showcase"), $(".picture-container"));

    $('.picture-container').on("click", function () {
        let i = $(this).index();
        vi.show(i);
    });

    $('#iv-back').on("click", function () {
        vi.nav(true);
    });

    $('#iv-forward').on("click", function () {
        vi.nav();
    });

    $('#img-viewer').on("click", function (e) {
        if ($(e.target).is($("#iv-image").children("img"))) return;
        if ($(e.target).is($(".iv-button"))) return;
        if ($(e.target).is($(".iv-button").children("img"))) return;
        vi.hide();
    });
});