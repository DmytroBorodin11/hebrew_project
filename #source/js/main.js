'use strict'

let secondInnerBlock = document.querySelector('.second-inner-block');
let subMenu = document.querySelector('.sub-menu');
let cardIconBlockArray = [...document.querySelectorAll('.card-icon-block')];
let invisibleCardsArray = [...document.querySelectorAll('.invisible-card')];
let menuButton = document.querySelector('.icon-burger');
let sidebar = document.querySelector('.sidebar');
console.log(menuButton);
console.log(sidebar);
let sidebarBtn = document.querySelector('.sidebar-btn');
console.log(sidebarBtn);
console.log(cardIconBlockArray);

cardIconBlockArray.forEach(icon => {
	icon.addEventListener('click', () => {
		let likeIcon = icon.querySelector('.icon-heart_border');
		likeIcon.classList.toggle('like-active');
	})
});

secondInnerBlock.addEventListener('click', () => {
	subMenu.classList.toggle('opacity-1')
});

menuButton.addEventListener('click', () => {
	sidebar.classList.add('resp-sidebar');
});
sidebarBtn.addEventListener('click', () => {
	sidebar.classList.remove('resp-sidebar');
});
