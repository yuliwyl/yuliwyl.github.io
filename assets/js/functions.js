$(function() {

  designBGStuff();
  setInterval(function(){articleTada()}, 3000);
  articleTada();
  mobileNav();

});

function mobileNav(){
  $('.mobile-nav-toggle').on('click',function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle,.mobile-nav').removeClass('is-open');}
    else {$('.mobile-nav-toggle,.mobile-nav').addClass('is-open');}
  });
}


function articleTada(){
  var randNum = Math.floor(Math.random() * $('.photo-thumb').length)+1

  $('.photo-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');

}

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
    startPhoto();
});

function videoscroll() {
    var wscroll = $(window).scrollTop();

    $('.video-strip').css('background-position', 'center -' + wscroll + 'px')

}

function startPhoto(){

  var wscroll = $(window).scrollTop();

  if($('section.photo').offset().top - $(window).height()/2 < wscroll) {

    $('.photo-thumb').each(function(i){

      setTimeout(function(){

        $('.photo-thumb').eq(i).addClass('is-visible');

      }, 160 * i);
    });
  }
}
