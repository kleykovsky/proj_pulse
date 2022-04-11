	//Слайдер на js

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
	// Навигация slider блока право, лево (кнопки)
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