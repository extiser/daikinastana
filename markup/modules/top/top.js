jQuery(document).ready(function ($) {
    $('.top-product-control__item').click(function () {
        var itemColor = $(this).data('color');
        $(itemColor).addClass('active').siblings().removeClass('active');
    });
});