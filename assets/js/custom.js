(function (a) {
    a(window).load(function () {
        a("#status").fadeOut();
        a("#preloader").delay(300).fadeOut("slow")
    });
    a(document).ready(function () {
        a("a[href*=#]").bind("click", function (b) {
            var c = a(this);
            a("html, body").stop().animate({scrollTop: a(c.attr("href")).offset().top}, 1E3);
            b.preventDefault()
        });
        a(window).scroll(function () {
            100 < a(this).scrollTop() ? a(".scroll-up").fadeIn() : a(".scroll-up").fadeOut()
        });
        a(".header").sticky({topSpacing: 0});
        a("body").scrollspy({target: ".navbar-custom", offset: 70});
        a(".skills").waypoint(function () {
            a(".chart").each(function () {
                a(this).easyPieChart({
                    size: 140,
                    animate: 2E3,
                    lineCap: "butt",
                    scaleColor: !1,
                    barColor: "#41a9f2",
                    trackColor: "transparent",
                    lineWidth: 10
                })
            })
        }, {offset: "80%"});
        a(function () {
            a("#cbp-qtrotator").cbpQTRotator()
        });
        a(".screen-height").height(a(window).height());
        a(window).resize(function () {
            a(".screen-height").height(a(window).height())
        });
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? a("#home").css({"background-attachment": "scroll"}) : a("#home").parallax("50%", .1);
        wow = new WOW({mobile: !1});
        wow.init();
        a("#contact-form").submit(function (b) {
            b.preventDefault();
            b = a("#c_name").val();
            var c = a("#c_email").val(), e = a("#c_message ").val(), d = a("#contact-form .ajax-response"),
                f = {name: b, email: c, message: e};
            a('form input[type="text"], form input[type="password"], form input[type="email"], form textarea').val("");
            "" != b && "" != c && "" != e && (new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i)).test(c) ?
                a.ajax({
                    type: "POST",
                    url: "assets/php/contact.php",
                    data: f,
                    dataType: "json",
                    encode: !0,
                    success: function (b) {
                        b = a.parseJSON(JSON.stringify(b));
                        d.html(b.message).fadeIn(500)
                    }
                }) : (d.fadeIn(500), d.html('<i class="fa fa-warning"></i> Please fix the errors and try again.'));
            return !1
        })
    })
})(jQuery);
