import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';


const swiper = new Swiper('.wallpaper__swiper', {
	// Install modules
	modules: [Navigation, Pagination, Scrollbar],
	speed: 500,
	navigation: {
		nextEl: '[data-role="wallpaper-slider-next"]',
		prevEl: '[data-role="wallpaper-slider-prev"]',
	},
});
