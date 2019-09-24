$(document).ready(function () {
	// all script write here

	// Slider
	var homeBanner = new Swiper('.swiper-container', {
		loop: true,
		// Effect
		effect: 'coverflow',
		grabCursor: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.btn-prev',
			prevEl: '.btn-next',
		},
		pagination: {
			el: '.pagination',
		},
		
	});

	// Resposive
	const windowSize = $(window).width();
	if (windowSize <= 768) {
		$('.header-bottom .row .col-12').prepend($('.header-right'))
		$('.header-bottom-inner').append($('.search-box'))
		$('.header-bottom-inner').append($('.header-left'))
	}
	$('.toggle-menu').on('click', function () {
		$(this).toggleClass('open')
		$('.header-bottom-inner').slideToggle()
	});


	// Tabs viec lam
	$('.viec-lam-title li').on('click', function () {
		$('.viec-lam-title li').removeClass('active')
		$(this).addClass('active')
		var currentTabsOpen = $(this).attr('tabs');
		$('.tabs-content-wrap').each(function () {
			$(this).removeClass('active')
			if ($(this).attr('tabs') === currentTabsOpen) {
				$(this).addClass('active')
			}
		})
	})
	
});