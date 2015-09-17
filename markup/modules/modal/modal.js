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