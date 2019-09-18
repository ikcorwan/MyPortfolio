// *** fix display of units on mobile phone ***

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
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
			if(link.style.animation) {
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
window.onload = function() {
  Particles.init({
    selector: '.banner__canvas'
  });
};