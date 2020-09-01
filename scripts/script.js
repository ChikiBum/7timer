window.addEventListener('DOMContentLoaded',function(){
'use strict';

    function counterTime(deadline){
    const timerHours =  document.querySelector('#timer-hours'),
        timerMinutes =  document.querySelector('#timer-minutes'),  
        timerSeconds =  document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemainig =(dateStop - dateNow) / 1000,
                seconds =  Math.floor(timeRemainig % 60),
                minutes =  Math.floor((timeRemainig / 60) % 60)  ,
                hours =  Math.floor(timeRemainig / 60 / 60);

                return {timeRemainig, hours, minutes, seconds};
        }

        function addFistNum(num){
            if (num <= 9 && num > 0) {
                 return num = '0' + num; 
            } else {
                return num;
            }
        }

        function updateClock(){
            let timer =  getTimeRemaining();

            if (timer.timeRemainig > 0){
            timerHours.textContent = addFistNum(timer.hours);
            timerMinutes.textContent = addFistNum(timer.minutes);
            timerSeconds.textContent = addFistNum(timer.seconds);
           
            setInterval(updateClock, 1000)
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        updateClock();
    }

    counterTime('1 october 2020');

    //menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

            const handlerMenu = () => {
                if(!menu.style.transform || menu.style.transform === 'translate(-100%)'){
                    menu.style.transform = 'translate(0)';
                } else {
                    menu.style.transform = 'translate(-100%)';
                }
            };

            // const handlerMenu = () => {
            //     menu.classList.toggle('active-menu');
            // };

            btnMenu.addEventListener('click', handlerMenu);
            closeBtn.addEventListener('click', handlerMenu);

            menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    };

    toggleMenu();

    //ANIMATE
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
        
        if (count < 0 ) {
        requestAnimationFrame(animatePopup)
        } else {
            cancelAnimationFrame(requestId);
        }
        
    }

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

            if (window.outerWidth > 768){
            popupBtn.forEach((elem) => {
                elem.addEventListener('click', animatePopup);
            });
        } else {
            popupBtn.forEach((elem) => {
                elem.addEventListener('click', () =>  popup.style.display = 'block');
            });
        }

            popupClose.addEventListener('click', () => {
                popup.style.display = 'none';
                requestId = undefined;
            })
    };

    togglePopUp();
    
   
   console.log(window.outerWidth)
  
});