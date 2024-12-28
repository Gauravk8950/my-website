$(document).ready(function () {

    $('.tab-btn').on('click', function (e) {

        e.preventDefault();

        var target = $($(this).attr('href'));

        $('.tab-pane, .tab-btn').removeClass('active');

        $(this).addClass('active');

        target.addClass('active');

    });

    $("#menu-trigger").on('click', function () {

        $('body').toggleClass('menu-sm--open')

    });

    $(".menu-item-trigger").on('click', function () {

        $(".menu-item-wrap").not($(this).parent()).removeClass("sub-menu-open")

        $(this).parent().toggleClass("sub-menu-open")

    });



    $("main section").inView({ toggleViewClass: false });



    $(document).on("click", "[data-toggle='popup']", function (e) {

        e.preventDefault();

        var target = $($(this).attr("data-target"));
        var info = $(this).attr("data-info");

        $(".popup").removeClass("active");

        target.addClass("active");

        $("body").addClass("popup-open");
        if (info) {
            target.find("#role").val(info)
        }

    });

    $(".popup-close").on("click", function () {

        $(this).closest(".popup").removeClass("active");

        $("body").removeClass("popup-open");

    });



})

