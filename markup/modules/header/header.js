jQuery(document).ready(function ($) {
    $('.header-phone__number span').click(function () {
        var number = $(this).data('number');
        $(this).addClass('active').html(number);
    });
});