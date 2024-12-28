(function ($) {
    $.fn.inView = function (options) {
        var settings = $.extend({ scOffset: 50, toggleViewClass: true, viewport: window }, options),
            $this = this,
            $viewport = $(settings.viewport).length > 1 ? $(settings.viewport).eq(0) : $(settings.viewport),
            wh = $viewport.height(),
            wt = $viewport.scrollTop(),
            ivRun = function () {
                var $it = $(this),
                    oTop = $it.position().top;

                if ((+(wt + wh) > (oTop + settings.scOffset)) && (+(oTop + wh) > (wt + settings.scOffset))) {
                    $it.addClass("iv-active");
                    $it.trigger("inView");
                } else {
                    $it.trigger("outView");
                    settings.toggleViewClass && $it.removeClass("iv-active");

                }
            },
            onViewportScroll = function () {
                wt = $viewport.scrollTop();
                $this.each(ivRun);
            };

        $this.each(ivRun);
        $viewport.on('scroll', onViewportScroll);
        return $this;
    };
}(jQuery));