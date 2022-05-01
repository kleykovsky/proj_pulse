	//Слайдер на js
	var tns;
(function($) {
	$(function(){
	const slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		nav: true,
		navPosition: "bottom",
		controls: false,
		autoplay: false,
	});
	// Навигация slider блока,
	// на jquery лево, право (кнопки)
	
	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');
	});
	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');
	});
	//Табы на jqury
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index())
			.addClass('catalog__content_active');
	  });
	// пролистывание блоков на jquery
	// $('.catalog-item__link').each(function(i) {
	// 		$(this).on('click', function(e) {
	// 			e.preventDefault();
	// 			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	});
	// });
	// $('.catalog-item_back').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	});
	// });
});
})(jQuery);
	// пролистывание блоков на js
function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item_back');
	//Modal windows JS
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
	//validate form jqery (созд. функ)
	function validateForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				  },
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите своё имя",
					minlength: jQuery.validator.format("Ваше имя должно содержать не меньше двух {0} символов! ")
				},
				phone: "Пожалуйста, введите свой номер телефона с кодом!",
				email: {
					  required: "Пожалуйста, введите свою почту",
					 email: "Неправильно введен адрес почты"
				}
			}
		});
	}
	// 3 type forms
	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');
	// Masks
	$('input[name=phone]').mask("+(99)-999-99-99");
	$('form').submit(function(e){
		e.preventDefault();
	//Если форма не прошла валидацию
		if (!$(this).valid()){
			return;
		}
	//Запрос на сервер(отправка данных на почту)
		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function(){
			$(this).find('input').val('');
		//Очистка всех форм
			$('form').trigger('reset');
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
		});
		return false;
	});
	//Smooth scroll up
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	/*Библиотека для работы анимации (Показывайте 
	анимацию CSS при прокрутке страницы вниз).*/
	var WOW;
	new WOW().init();