lottie.setQuality('high');

var happiness_step_1_params = {
	container: document.querySelector('.happiness-step-1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: happiness_steps.step_1,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_2_1_params = {
	container: document.querySelector('.happiness-step-2-1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: happiness_steps.step_2,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_2_2_params = {
	container: document.querySelector('.happiness-step-2-2'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: happiness_steps.step_2,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_3_params = {
	container: document.querySelector('.happiness-step-3'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: happiness_steps.step_3,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_4_1_params = {
	container: document.querySelector('.happiness-step-4-1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: happiness_steps.step_4,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_4_2_params = {
	container: document.querySelector('.happiness-step-4-2'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: happiness_steps.step_4,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_1_animation = lottie.loadAnimation(happiness_step_1_params),
	happiness_step_2_1_animation = lottie.loadAnimation(happiness_step_2_1_params),
	happiness_step_2_2_animation = lottie.loadAnimation(happiness_step_2_2_params),
	happiness_step_3_animation = lottie.loadAnimation(happiness_step_3_params),
	happiness_step_4_1_animation = lottie.loadAnimation(happiness_step_4_1_params),
	happiness_step_4_2_animation = lottie.loadAnimation(happiness_step_4_2_params);

// happiness_step_1_animation;
// happiness_step_2_animation;
// happiness_step_3_animation;
// happiness_step_4_animation;

(function ($) {

	$("#owl-cards").owlCarousel({
		center: true,
		navigation: true,
		margin: 10,
		slideSpeed: 300,
		items: 5,
		loop: true,
		nav: true,
		navText: ['<img src="./assets/images/icons/ico-slider-prev.svg">', '<img src="./assets/images/icons/ico-slider-next.svg">'],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		}
	});

	setTimeout(function() {
		$('.tiles.photos .tile-container').isotope({
			layoutMode: 'masonry',
			masonry: {
				gutter: 10,
				columnHeight: 20,
			},
		});
	}, 500);

	$('.inview').each(function () {
		var inview = new Waypoint.Inview({
			element: this,
			enter: function (direction) {
				var animation = this.element.dataset.animation;
				$(this.element).addClass(animation);
				if ($(this.element).find('.happiness-step-1').length > 0) {
					
				}
			}
		});
	});

	$('.happiness-step-icon').each(function () {
		var inview = new Waypoint.Inview({
			element: this,
			enter: function (direction) {
				if (this.element.classList.contains('happiness-step-1')) {
					happiness_step_1_animation.play();
				}

				if (this.element.classList.contains('happiness-step-2-1')) {
					happiness_step_2_1_animation.play();
				}

				if (this.element.classList.contains('happiness-step-2-2')) {
					happiness_step_2_2_animation.play();
				}

				if (this.element.classList.contains('happiness-step-3')) {
					happiness_step_3_animation.play();
				}

				if (this.element.classList.contains('happiness-step-4-1')) {
					happiness_step_4_1_animation.play();
				}

				if (this.element.classList.contains('happiness-step-4-2')) {
					happiness_step_4_2_animation.play();
				}
			}
		});
	});

})(jQuery)