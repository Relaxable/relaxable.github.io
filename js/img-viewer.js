class ImgViewer {
    constructor(container, pictureContainer, imgCount) {
        this._container = container;
        this._pictureContainer = pictureContainer;
        this._imgCount = imgCount;
    }

    show(selIndex) {
        this._selIndex = selIndex;
        this._showImage()
        $("#img-viewer").addClass("img-viewer-visible");
    }

    nav(back = false) {
        this._selIndex = this._getIndex(back);
        this._showImage()
    }

    hide() {
        $('#img-viewer').removeClass("img-viewer-visible");
    }

    _showImage() {
        let image = this._container.find(this._pictureContainer).eq(this._selIndex).find("img").prop("src");
        $("#iv-image").html(`<img src="${image}" alt="Image"/>`);
        document.documentElement.style.setProperty('--sel-image', `url(${image}`);
    }

    _getIndex(back = false) {
        if (back) {
            return ((this._selIndex - 1) < 0 ? this._imgCount - 1 : this._selIndex - 1);
        }
        else{
            return ((this._selIndex + 1) > this._imgCount - 1 ? 0 : this._selIndex + 1);
        }
    }
}

$(function () {

    let imgCount = $("#showcase .picture-container").length;
    let vi = new ImgViewer($("#showcase"), $(".picture-container"), imgCount);

    $('.picture-container').on("click", function () {
        let i = $(this).parent().find($('.picture-container')).index(this);
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