import {
	gsap
} from 'gsap';

export default class ThemeToggler {
	constructor(element) {
		var isLight = window.matchMedia('prefers-color-scheme: light').matches;
		var isLight = true;

		var toNight = gsap.timeline();
		toNight
			.to(
				'.theme__conveyor', {
					transform: 'translateY(-50%)'
				}, 0
			)
			.to(
				['nav', 'body', 'main', 'footer'], {
					background: '#15191e'
				}, 0
			)
			.to(
				['[data-theme="light color"]', '.title', '.description'], {
					color: '#fff',
				}, 0
			)
			.to(
				'[data-theme="light background"]', {
					background: '#fff',
				}, 0
			)
			.to(
				'[data-theme-fill]', {
					fill: '#fff',
				}, 0
			)
			.to(
				'.cursor', {
					borderColor: '#fff',
				}, 0
			)
			.to(
				'.neu-box', {
					boxShadow: '5px 5px 10px #12151a, -5px -5px 10px #181d23',
				},
				0
			)
			.to(
				'.ti-cursor', {
					color: '#ffff00',
				}, 0
			);

		if (isLight) {
			toNight.reverse();
		} else {
			toNight.play();
		};

		const switchToggle = document.querySelector('.js-theme');
		switchToggle.addEventListener('click', () => {
			if (isLight) {
				toNight.play();
				isLight = false;
			} 
			else {
				toNight.reverse();
				isLight = true;
			};
		});
	};
};