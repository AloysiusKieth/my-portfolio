$(function() {
  $('.hidden').fadeIn(1000).removeClass('hidden');
  //mobileNav();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
  	
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');$("#fadeIn").fadeIn(3000); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

$('.site-nav .link').click(function() {
    if ($(this).hasClass('active')) return false;
    var name = $(this).attr('id');
    var $visible = $('.wrapper .section:visible');
    $('.active').removeClass('active');
    $(this).addClass('active');
    if ($visible.length == 0) showContent(name);
    else $visible.fadeOut(500, function() {    
        showContent(name);
    });
});

$('.mobile-nav .link').click(function() {
    if ($(this).hasClass('active')) return false;
    var name = $(this).attr('id');
    var $visible = $('.wrapper .section:visible');
    $('.active').removeClass('active');
    $(this).addClass('active');
    if ($visible.length == 0) showContent(name);
    else $visible.fadeOut(500, function() {    
        showContent(name);
    });
});

function showContent(name)
{
    $('.wrapper .' + name).fadeIn(100);
    
}
