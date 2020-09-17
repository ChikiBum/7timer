let count,
	requestId;

const animatePopup = () => {

	const  popup = document.querySelector('.popup');
	popup.style.display = 'block';

	if (requestId === undefined) {
		count = -120;
		requestId = requestAnimationFrame(animatePopup);
	}

	popup.style.transform = `translate(${count++}%)`;

	if (count < 0) {
		requestAnimationFrame(animatePopup);
	} else {
		cancelAnimationFrame(requestId);
	}

};

//popup

const togglePopUp = () => {
	const popup = document.querySelector('.popup'),
		popupBtn = document.querySelectorAll('.popup-btn');

	popupBtn.forEach(elem => {
		elem.addEventListener('click', () => {
			console.log(window.innerWidth);
			if (window.innerWidth > 768) {
				animatePopup();
			} else {
				popup.style.display = 'block';
			}
		});
	});

	popup.addEventListener('click', event => {
		let target = event.target;

		
		if (target.classList.contains('popup-close')) {
			popup.style.display = 'none';
			requestId = undefined;
		} else {
			target = target.closest('.popup-content');

			if (!target) {
				popup.style.display = 'none';
				requestId = undefined;
			}
		}
	});
};

export default togglePopUp;
