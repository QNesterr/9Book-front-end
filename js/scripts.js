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
// active/inactive состояния кнопки следующего вопроса ("далее")
    $('.answer-the-question').change(function() {
        if( $(this).is(':checked') ) {
            $('.next-answer').removeClass('raised-button-disabled');
            $('.next-answer').wrap('<a href=""></a>');
        }
    });
// анимация при переходе к следующему вопросу
    $('.next-answer').click(function() {
        if(!($('.next-answer').hasClass('raised-button-disabled'))) {
            $(this).addClass('animated little-push');
            setTimeout(function() {
                $('section').addClass('animated fadeOutLeftBig');
            }, 200);
        }
    });
});
