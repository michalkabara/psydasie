'use strict';

const slider = document.querySelector('.slider');
const controls = document.querySelector('.controls');

const slides = slider.querySelectorAll('.slide');

const arrowLeft = controls.querySelectorAll('i')[0];
const arrowRight = controls.querySelectorAll('i')[1];

arrowLeft.addEventListener('click', () => {
	let newSlides = [...slides];
	let activeSlide = slider.querySelector('.active-slide');
	let activeIndex = newSlides.indexOf(activeSlide);
	if (activeIndex === 0) {
		activeSlide.classList.remove('active-slide');
		slides[slides.length - 1].classList.add('active-slide');
		activeIndex = slides.length - 1;
	} else {
		activeSlide.classList.remove('active-slide');
		slides[activeIndex - 1].classList.add('active-slide');
		activeIndex = activeIndex - 1;
	}
});

arrowRight.addEventListener('click', () => {
	let newSlides = [...slides];
	let activeSlide = slider.querySelector('.active-slide');
	let activeIndex = newSlides.indexOf(activeSlide);
	if (activeIndex === slides.length - 1) {
		activeSlide.classList.remove('active-slide');
		slides[0].classList.add('active-slide');
		activeIndex = 0;
	} else {
		activeSlide.classList.remove('active-slide');
		slides[activeIndex + 1].classList.add('active-slide');
		activeIndex = activeIndex + 1;
	}
});
