$(function () {
    $('#hamburger-button').on("click", function () {

        let i = 0;
        $("#nav-links").children("a").each(function () {
            $(this).css({"animation-delay": i * 50 + "ms"});
            i++;
        });

        $(this).parent("header").parent("nav").toggleClass("nav-visible");
        $('html,body').toggleClass("root-noscroll");
    });
});
