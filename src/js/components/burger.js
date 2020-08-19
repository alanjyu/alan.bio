import {
	gsap
} from 'gsap';

import {
	disableBodyScroll,
	enableBodyScroll,
} from 'body-scroll-lock';

export default class Burger {
	constructor() {
		var menuIsActive = false;

		/* Activate menu animation */

		const toActivateMenu = gsap.timeline();
		toActivateMenu
			.to(
				'nav', {
					visibility: 'visible',
					opacity: 1
				},
				0
			)
			.to(
				'.menu__item__link', {
					opacity: 1,
					stagger: .1
				},
				'-=.25'
			);

		toActivateMenu.pause();

		const burgerToggle = document.querySelector('.js-burger');
		burgerToggle.addEventListener('click', () => {
			if (!menuIsActive) {
				menuIsActive = true;
				disableBodyScroll(document.body);
				toActivateMenu.play();
			};
		});

		const navToggle = document.querySelector('.js-nav__background');
		navToggle.addEventListener('click', () => {
			if (menuIsActive) {
				menuIsActive = false;
				enableBodyScroll(document.body);
				toActivateMenu.reverse();
			}
		});

	};
}