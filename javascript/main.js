// *** fix display of units on mobile phone ***

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// *** Scroll ***
window.scroll({
	top: 2500,
	left: 0,
	behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
	top: 150, // could be negative value
	left: 0,
	behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.top').scrollIntoView({
	behavior: 'smooth'
});

// *** Hamburger ***

const navSlide = () => {
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.menu__item-list');
	const navLinks = document.querySelectorAll('.menu__item');

	hamburger.addEventListener('click', () => {
		// *** Hamburger - Toggle Nav ***
		nav.classList.toggle('menu__item-list--is-active');


		// *** Hamburger - Animate Links ***
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.75}s`;
			}
		});
		// *** Hamburger Animation ***
		hamburger.classList.toggle('hamburger--is-active');
	});

}

navSlide();

// *** Particles ***
window.addEventListener("load", function () {
	Particles.init({
		selector: '.banner__canvas'
	});
}, false);