jQuery(document).ready(function ($) {
    $('.header-phone__number span').click(function () {
        var number = $(this).data('number');
        $(this).addClass('active').html(number);
    });
});
$(document).ready(function () {
    $('a[data-click="modal"]').click(function () {
        var modal = $(this).data('item');
        $(modal).addClass('active');
        $('.mask').addClass('active');
    });
    $('.mask').click(function () {
        $('.mask, .modal').removeClass('active');
    });
});
jQuery(document).ready(function ($) {
    $('.top-product-control__item').click(function () {
        var itemColor = $(this).data('color');
        $(itemColor).addClass('active').siblings().removeClass('active');
    });
});