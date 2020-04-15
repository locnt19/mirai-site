function LazyLoadFunction() {
	var lazyLoad = new LazyLoad({
		elements_selector: ".lazy"
	});
	lazyLoad.update();
}


$(document).ready(function () {
	document.querySelector('.header-mobile__button__open').addEventListener('click', function () {
		document.querySelector('#header-mobile__nav').classList.add('open');
		document.querySelector('body').classList.add('offcanvas-container');
	})
	document.querySelector('.header-mobile__button__close').addEventListener('click', function () {
		document.querySelector('#header-mobile__nav').classList.remove('open');
		document.querySelector('body').classList.remove('offcanvas-container');
	})

	// back-2-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.btn-back-2-top').fadeIn()
		} else $('.btn-back-2-top').fadeOut()

		// // count number
		// if ($(this).scrollTop() > 1100) {
		// 	$('.sum span').each(function () {
		// 		var $this = $(this),
		// 			countTo = $this.attr('data-count');
		// 		$({
		// 			countNum: $this.text()
		// 		}).animate({
		// 			countNum: countTo
		// 		}, {
		// 			duration: 2500,
		// 			easing: 'linear',
		// 			step: function () {
		// 				$this.text(Math.floor(this.countNum));
		// 			},
		// 			complete: function () {
		// 				$this.text(this.countNum);
		// 			}
		// 		});
		// 	});
		// }
	})

	$('.btn-back-2-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	})

	// Slider
	new Swiper('.home-banner .swiper-container', {
		loop: true,
		effect: 'coverflow',
		speed: 3000,
		lazy: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.home-banner .pagination',
			clickable: true
		},
	});
	new Swiper('.hoat-dong-mirai .swiper-container', {
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		speed: 1500,
		breakpoints: {
			slidesPerView: 1,
			768: {
				slidesPerView: 3
			}
		},
		pagination: {
			el: '.hoat-dong-mirai .swiper-pagination',
			clickable: true
		},
	});
	new Swiper('.cam-nhan-hoc-vien .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		// autoplay: {
		// 	delay: 8000,
		// 	disableOnInteraction: false,
		// },
		speed: 2000,
		breakpoints: {
			768: {
				slidesPerView: 2
			}
		},
		pagination: {
			el: '.cam-nhan-hoc-vien .swiper-pagination',
			clickable: true
		},
	});

	// // Resposive
	// const windowSize = $(window).width();
	// if (windowSize <= 768) {
	// 	$('.header-bottom .row .col-12').prepend($('.header-right'))
	// 	$('.header-bottom-inner').append($('.search-box'))
	// 	$('.header-bottom-inner').append($('.header-left'))
	// }
	// $('.toggle-menu').on('click', function () {
	// 	$(this).toggleClass('open')
	// 	$('.header-bottom-inner').slideToggle()
	// });


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

	LazyLoadFunction();
});