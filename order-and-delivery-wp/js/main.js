$(document).ready(function () {
    $('.buy').click(function (e) {
        e.preventDefault();

        $('.payment-form-container').css('opacity', 1).css('visibility', 'visible');
        
    });
    $('.close-payment-form-btn').click(function (e) {
        e.preventDefault();
        $('.payment-form-container').css('opacity', 0).css('visibility', 'hidden');
    });
});