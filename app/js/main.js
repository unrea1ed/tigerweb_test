$(window).scroll(function () {
  if ($(window).scrollTop() > 175) {
    $('.menu-block').addClass('menu-block-fixed');
    $('.interaction-block-fixed').removeClass('fixed');
    $('.signup').removeClass('hidden');
  } else {
    $('.menu-block').removeClass('menu-block-fixed');
    $('.interaction-block-fixed').addClass('fixed');
    $('.signup').addClass('hidden');
  }
});

$('#open-catalog').click(function () {
  $('.catalog-modal').addClass('opened');
  $('.modal_shadow').addClass('modal_show');
});
$('#close-catalog').click(function () {
  $('.catalog-modal').removeClass('opened');
  $('.modal_shadow').removeClass('modal_show');
});
$(document).mouseup(function (e) {
  let modal = $('.catalog-modal');
  if (!modal.is(e.target) && modal.has(e.target).length === 0) {
    $('.modal_shadow').removeClass('modal_show');
    $('.catalog-modal').removeClass('opened');
  }
});
$('.catalog-modal_tab').click(function () {
  let id = $(this).attr('data-tab'),
    content = $('.catalog-modal__body[data-tab="' + id + '"]');
  $('.catalog-modal_tab.active').removeClass('active');
  $(this).addClass('active');
  $('.catalog-modal__body.active').removeClass('active');
  content.addClass('active');
});
$('.main-menu_btn').click(function () {
  $('.main-menu').toggleClass('open-menu');
  $('.main-menu_btn').toggleClass('close-menu');
});
