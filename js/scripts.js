var AnimationIsGoing = false;

function slideMenu(distance) {
	AnimationIsGoing = true;
	setTimeout(function() {AnimationIsGoing = false;}, 800);
    $('aside').animate({
        left: distance
    }, 800, 'easeInOutCubic');
    $('#greyScreen').fadeToggle(500);
}

$(document).ready(function() {

    $('.menu-button').click(function() {
        if (AnimationIsGoing == false) {
            slideMenu('0px');
        }
    });
    $('aside').on('swipeleft', function() {
        if (AnimationIsGoing == false) {
            slideMenu('-80%');
        }
    });
    $('#greyScreen').click(function() {
        if (AnimationIsGoing == false) {
            slideMenu('-80%');
        }
    });
});
