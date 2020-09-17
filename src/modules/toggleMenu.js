const toggleMenu = () => {

	const btnMenu = document.querySelector('.menu'),
		menu = document.querySelector('menu'),
		closeBtn = document.querySelector('.close-btn'),
		menuItems = menu.querySelectorAll('ul>li');

	const handlerMenu = () => {
		if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
			menu.style.transform = 'translate(0)';
			menu.classList.toggle('menu-active');
		} else {
			menu.style.transform = 'translate(-100%)';
			menu.classList.toggle('menu-active');
		}
	};

	btnMenu.addEventListener('click', handlerMenu);

	document.addEventListener('click', (event) => {
		const target = event.target;

		if (target === closeBtn) {
			handlerMenu();
		} else if (menu.classList.contains('menu-active') && !target.closest('menu') && !target.closest('.menu')) {
			handlerMenu();
		} else if (target) {
			menuItems.forEach(item => {
				if (item.querySelector('menu a') === target) {
					handlerMenu();
				}

			});
		}
	});


};

export default toggleMenu;