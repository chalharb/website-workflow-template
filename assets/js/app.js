/**
 * Created by logan on 12/9/15.
 */
var app = (function(){
    'use strict';

    var s;
    return{
        settings: {
            document: $(document),
            pathname: window.location.pathname,
            html: $('html')
        },

        init: function(){
            s = this.settings;

            // RUN ALWAYS
            this.initNavbarDropdown();

            // Parse Segments
            var segmentArray = s.pathname.replace(/(^\/)|(\/$)/g,'').split('/');
            s['segment_1'] = segmentArray[0];
            s['segment_2'] = segmentArray[1];

            // Segment Dictated Scripts
            switch(s.segment_1){
                case "":
                    //this.initItemSlider();
                    break;
            }
        },

/*        initItemSlider:function(){
            $('.slider').slick({
                infinite: true,
                autoplay: true,
                arrows: false,
                dots: false,
                speed: 450,
                slidesToShow: 1,
                adaptiveHeight: false
            });
        },*/

        initNavbarDropdown: function() {
            $("#navbar li a").addClass("dropdown-toggle");
            $("#navbar li ul ").addClass("dropdown-menu multi-level");
            $("#navbar li").hover(
                function () {
                    $(this).addClass("open");
                },
                function () {
                    $(this).removeClass("open");
                }
            );
        }
    }
})();

$(function(){
    app.init();
});
//# sourceMappingURL=app.js.map
