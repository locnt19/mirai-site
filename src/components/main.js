function LazyLoadFunction() {
	function logElementEvent(eventName, element) {
		console.log(Date.now(), eventName, element.getAttribute("data-src"));
	}
	var callback_enter = function (element) {
		logElementEvent("🔑 ENTERED", element);
	};
	var callback_exit = function (element) {
		logElementEvent("🚪 EXITED", element);
	};
	var callback_loading = function (element) {
		logElementEvent("⌚ LOADING", element);
	};
	var callback_loaded = function (element) {
		logElementEvent("👍 LOADED", element);
	};
	var callback_error = function (element) {
		logElementEvent("💀 ERROR", element);
		element.src = `https://via.placeholder.com/256/?text=Not found`;
	};
	var callback_finish = function () {
		logElementEvent("✔️ FINISHED", document.documentElement);
	};
	var lazyLoad = new LazyLoad({
		elements_selector: ".lazy",
		// Assign the callbacks defined above
		callback_enter: callback_enter,
		callback_exit: callback_exit,
		callback_loading: callback_loading,
		callback_loaded: callback_loaded,
		callback_error: callback_error,
		callback_finish: callback_finish
	});
	lazyLoad.update();
}


$(document).ready(function () {
	// all script write here
	AOS.init();

	// back-2-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.btn-back-2-top').fadeIn()
		} else $('.btn-back-2-top').fadeOut()

		// count number
		if ($(this).scrollTop() > 1100) {
			$('.sum span').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 2500,
					easing: 'linear',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}

	})

	$('.btn-back-2-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
	})

	// stuff hoi-dap
	$('.lien-he-ngay p, .lien-he-ngay img').click(function () {
		$('.form-lien-he-ngay').fadeToggle('fast')
	})

	// Slider
	var homeBanner = new Swiper('.home-banner .swiper-container', {
		loop: true,
		effect: 'coverflow',
		speed: 2500,
		lazy: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
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
			575.97: {
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
			575.97: {
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

	LazyLoadFunction();
});