// для предотвращения повторного срабатывания скрипта
// во время выполнения анимации
var AnimationIsGoing = false;
// функция, выдвигающая/задвигающая боковое меню
function slideMenu(distance) {
	AnimationIsGoing = true;
	setTimeout(function() {AnimationIsGoing = false;}, 100);
    $('aside').animate({
        left: distance
    }, 100, 'easeInOutCubic');
    $('#greyScreen').fadeToggle(100);
}

$(document).ready(function() {
// работа с боковым меню
    $('.menu-button').click(function() {
        if (AnimationIsGoing == false) {
            slideMenu('0px');
        }});
    $('.swipe-for-aside').on('swiperight', function() {
        if (AnimationIsGoing == false) {
            slideMenu('0px');
        }});
    $('aside').on('swipeleft', function() {
        if (AnimationIsGoing == false) {
            slideMenu('-100%');
        }});
    $('#greyScreen').click(function() {
        if (AnimationIsGoing == false) {
            slideMenu('-100%');
        }});
    $('.close-menu-icon').click(function() {
        if (AnimationIsGoing == false) {
            slideMenu('-100%');
        }});
// анимация нажатия круглой кнопки
        $('.action-button').click(function() {
            $(this).addClass('animated bounceOut');
        });
});
