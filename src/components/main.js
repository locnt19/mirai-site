$(document).ready(function () {
	// all script write here

	// back-2-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.btn-back-2-top').fadeIn()
		} else $('.btn-back-2-top').fadeOut()
	})
	$('.btn-back-2-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	})

	// Slider
	var homeBanner = new Swiper('.home-banner .swiper-container', {
		// loop: true,
		effect: 'coverflow',
		speed: 1500,
		lazy: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.home-banner .pagination',
			clickable: true
		},
	});
	var hoatDongMirai = new Swiper('.hoat-dong-mirai .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		lazy: true,
		speed: 1500,
		breakpoints: {
			576: {
				slidesPerView: 1
			}
		},
		pagination: {
			el: '.hoat-dong-mirai .pagination',
			clickable: true
		},
	});
	var camNhanHocVien = new Swiper('.cam-nhan-hoc-vien .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 3000,
		breakpoints: {
			767.97: {
				slidesPerView: 1
			}
		},
		pagination: {
			el: '.cam-nhan-hoc-vien .pagination',
			clickable: true,
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


	// stuff-hoi-dap
	$('.toggle-stuff').click(function () {
		$('.stuff-hoi-dap').toggleClass('active')
	})

	$('.hoi-dap .item-title').click(function () {
		$(this).parent().toggleClass('active');
		$(this).siblings('.item-content').slideToggle();
	})

	// tuyen-dung-popup
	$('.tuyen-dung .btn-so-yeu-li-lich').click(function () {
		$('.tuyen-dung-popup').addClass('active')
		$('.tuyen-dung-popup-background').addClass('active')
	})
	// close popup
	$('.tuyen-dung-popup .mdi-close').click(function () {
		$('.tuyen-dung-popup').removeClass('active')
		$('.tuyen-dung-popup-background').removeClass('active')
	})
});