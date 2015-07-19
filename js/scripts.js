// для предотвращения повторного срабатывания скрипта
// во время выполнения анимации
var AnimationIsGoing = false;
// функция, выдвигающая/задвигающая боковое меню
function slideMenu(distance) {
	AnimationIsGoing = true;
	setTimeout(function() {AnimationIsGoing = false;}, 800);
    $('aside').animate({
        left: distance
    }, 800, 'easeInOutCubic');
    $('#greyScreen').fadeToggle(500);
}

$(document).ready(function() {
// работа с боковым меню
    $('.menu-button').click(function() {
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
// анимация круглой кнопки по нажатию
    $('.action-button').click(function() {
        $(this).addClass('animated bounceOut');
    });
});
