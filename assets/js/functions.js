$(function() {

  designBGStuff();

});

function designBGStuff() {

  $('.app-img-link').hover(function() {
    $(this).parent().parent().parent().css('background-color',$(this).data('color'));
  }, function(){
    $(this).parent().parent().parent().css('background-color',$(this).parent().parent().parent().data('orig-color'));
  });
}


//wscroll

$(window).scroll(function(){
    videoscroll();
});

function videoscroll() {
    var wscroll = $(window).scrollTop();

    $('.video-strip').css('background-position', 'center -' + wscroll + 'px')

}
