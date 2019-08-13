const display = $('.maincontent');
const sections = $('section');

const $userWindow = $(window).height();

// One page scroll  
$('a[href^="#"]').on('click.smoothscroll',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);
  $('html, body').stop().animate( {
    'scrollTop': $target.offset().top
  }, 1000, 'swing', function () {
    window.location.hash = target;
  });
});


// Fixed Menu
$('.nav__prompt').on('click touchstart', function(e) {
  e.preventDefault();
  const $this = $(e.currentTarget);
  $('.nav__item').removeClass('active');
  $this.closest('.nav__item').addClass('active');
});
$(window).scroll(function(){    
  if ($(this).scrollTop() > $userWindow * 0.75){
    $('.fixed-menu').css('opacity', '1');
  } else {
    $('.fixed-menu').css('opacity', '0');
  }

  sections.each(function(){
    var $topOffset = $(this).offset().top;
        $elemHeight = $(this).height() + $topOffset - 150;

    if($(window).scrollTop() + $userWindow > $elemHeight)  {
      var $index = $(this).attr('data-index');
      $('.fixed-menu__item').removeClass('active');
      $('.fixed-menu__item[data-index="' + $index + '"]').addClass('active');
    }
  })

});

// Innovation change image
$('.color__item').on('click', function(e) {
  e.preventDefault();
  var $this= $(e.currentTarget);
      $dataAttr = $this.attr('data-color')
    $('.innovation .section-main').attr('data-image', $dataAttr);
});


// Accordion
$('.accordion').each(function(){
  $accordionItem = $(this).find('.accordion__item');
  $accordionItem.first().addClass('accordion__item--active');

  $accordionItem.on('click', function(e) {
    e.preventDefault();
    $this = $(e.currentTarget);
    $dataClass = $this.closest('.accordion').attr('data-class');
    $itemNumber = $this.index() + 1;
    $screenSrc = './assets/images/screens/' + $dataClass + $itemNumber + '.png'
    $this.siblings('.accordion__item').removeClass('accordion__item--active');

    $this.addClass('accordion__item--active');
    $this.closest('.section__content').find('.screen').attr('src', $screenSrc);
  })

  // Change screen images

})