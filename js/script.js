$(document).ready(function() {


	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})

var $window = $(window), // Основное окно
 
    $target = $(".header"), // Блок, который нужно фиксировать при прокрутке
 
    $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)
 
  $window.on('scroll', function() {
 
    // Как далеко вниз прокрутили страницу
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
    // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
    if (scrollTop > $h) {
 
      $target.addClass("fixed");
 
    // Иначе возвращаем всё назад
    } else {     
 
      $target.removeClass("fixed");
    }
  });


});