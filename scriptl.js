const btn = document.getElementById('menu-img')
const nav_media = document.getElementById('nav-media')
$('#list-menu').hide();
$('#whatscard').hide();
$('#footer-list').hide();

let count = 0;
btn.addEventListener('click', function () {
    count++;

    if (count === 1 && window.screen.availWidth > 1023) {
        $('.social-media-nav').toggleClass('nav-media-social');
        $('#list-menu').show();
    }

    else if (count === 1)
        $('#list-menu').show();

    else if (count === 2 && window.screen.availWidth > 1023) {
        count = 0
        $('#list-menu').hide();
        $('.social-media-nav').toggleClass('social-media-nav-2');

    }

    else if (count === 2) {
        count = 0
        $('#list-menu').hide();

    }

})

let appear = 0;

$('#btn-footers').click(function () {
    appear++;
    if (appear === 1)
        $('#footer-list').show();
    else {
        $('#footer-list').hide();
        appear = 0;
    }

});

