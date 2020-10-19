// *** fix display of units on mobile phone ***

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// *** Hamburger ***

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu__item-list');
const navItems = document.querySelectorAll('.menu__item');
const navLinks = document.querySelectorAll('.menu__link');

let flag = false;

// *** Hamburger - Animate Items ***
const animateItems = () => {
    navItems.forEach((navItem, index) => {
			if (navItem.style.animation) {
				navItem.style.animation = '';
			} else {
				navItem.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.75}s`;
			}
		});
}

const navSlide = () => {
    if (!flag) {
        flag = !flag;
        nav.classList.add('menu__item-list--is-active'); 
        hamburger.classList.add('hamburger--is-active'); 
        animateItems();
    } else {
        flag = !flag;
        nav.classList.remove('menu__item-list--is-active'); 
        hamburger.classList.remove('hamburger--is-active'); 
        animateItems();
    }

}

const navClose = () => {
    if (flag) {
        flag = false;
        nav.classList.remove('menu__item-list--is-active'); 
        hamburger.classList.remove('hamburger--is-active'); 
        animateItems();
    }
}

hamburger.addEventListener('click', navSlide);

for (const navLink of navLinks) {
    navLink.addEventListener('click', navClose);
};


// *** Particles ***
window.addEventListener("load", function () {
	Particles.init({
		selector: '.banner__canvas'
	});
}, false);