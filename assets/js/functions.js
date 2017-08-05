$(window).scroll(function(){
    videoscroll();
});

function videoscroll() {
    var wscroll = $(window).scrollTop();

    $('.video-strip').css('background-position', 'center -' + wscroll + 'px')

}
