$(window).scroll(function(){
    videoscroll();
});

function videoscroll() {
    var wscroll = $(window).scrolltop();

    $('.video-strip').css('background-position', 'center -' + wscroll + 'px')

}