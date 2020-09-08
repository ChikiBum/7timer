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

            btnMenu.addEventListener('click', handlerMenu);
                   
            menu.addEventListener('click', (event) => {
                let target = event.target;

                if (target == closeBtn){
                    handlerMenu();
                } else if (target){

                menuItems.forEach((item, i) => {
                        if(item.querySelector('a') === target){
                            handlerMenu();
                    }
                    
                });
            }
        })
           
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
            popupBtn = document.querySelectorAll('.popup-btn');

            if (window.outerWidth > 768){
            popupBtn.forEach((elem) => {
                elem.addEventListener('click', animatePopup);
            });
        } else {
            popupBtn.forEach((elem) => {
                elem.addEventListener('click', () =>  popup.style.display = 'block');
            });
        }

        popup.addEventListener('click', () => {
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
                requestId = undefined;
            } else {
                target = target.closest('.popup-content');

                if(!target){
                popup.style.display = 'none';
                requestId = undefined;
                }
            }
         })
    };

    togglePopUp();
    
   //tabs
   const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
     
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
          
            const toogleTabContent = (index) => {
                for (let i = 0; i < tabContent.length; i++){
                    if(index === i){
                        tab[i].classList.add('active');
                        tabContent[i].classList.remove('d-none') ;
                    } else {
                        tab[i].classList.remove('active');
                        tabContent[i].classList.add('d-none') ; 
                    }
                }
            
            };

            if (target){
                
                tab.forEach((item, i) => {

                        if(item === target){
                        toogleTabContent(i);
                    }
              });
            }
          
        });


   };
   
   tabs();

   //slider
   
   const addSliderDots = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        ulDotList = document.querySelector('.portfolio-dots');

        for (let i = 0; i < slide.length; i++){
            const li = document.createElement('li');
            li.classList.add('dot');
            
            if (i === 0) {
                li.classList.add('dot-active');
            }
            
            ulDotList.appendChild(li);
        }

    };

    addSliderDots();

   const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        dot = document.querySelectorAll('.dot'),
        slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);   
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length)
        {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stoptSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('#arrow-left, #arrow-right, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left')){
            currentSlide--;
        } else if (target.matches('.dot')){
            dot.forEach((elem, index) => {
                if(elem === target){
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
        
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
            stoptSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(1500);

   };

   slider();

   //change image 'Наша команда'

   const changeImage = () => {
    const command = document.getElementById('command'),
        commandPhoto = document.querySelectorAll('.command__photo');

    command.addEventListener('mouseover', (event) =>{
        const target = event.target,
            origImage = event.target.src;
 
        commandPhoto.forEach((element) => {
          
            if (target === element) {
               event.target.src = target.dataset.img;
               target.dataset.img = origImage.replace(/http\:\/\/127\.0\.0\.1\:5500\//, '');
            }
        });
    });

    command.addEventListener('mouseout', (event) =>{
        const target = event.target,
            origImage = event.target.src;
        
        commandPhoto.forEach((element) => {
                     if (target === element) {
               event.target.src = target.dataset.img;
               target.dataset.img = origImage.replace(/http\:\/\/127\.0\.0\.1\:5500\//, '');
            }
        });
    });

   };

   changeImage();

   //calc limit
   const calcEnterLimit = () => {
        const calcItem = document.querySelectorAll('input.calc-item');

            calcItem.forEach((elem, index) => {
                elem.addEventListener('input', () => {

                elem.value = elem.value.replace(/[^0-9]/gi, '');

            });
        });
   };

   calcEnterLimit();

   //calculator
   const calc = (price = 100) => {
       const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare= document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

            const countSum = () => {
                let total = 0,  
                    countValue = 1,
                    dayValue = 1;
                const typeValue = calcType.options[calcType.selectedIndex].value,
                     squareValue = +calcSquare.value;

                if (calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }

                if (calcDay.value && calcDay.value < 5){
                    dayValue *= 2;
                } else if (calcDay.value && calcDay.value < 10){
                    dayValue *= 1.5;
                }

                if (typeValue && squareValue){
                    total = price * typeValue * squareValue * countValue * dayValue;
                } 
            
                totalValue.textContent = total;
            };

            calcBlock.addEventListener('change', (event) => {
                const target = event.target;

                // if (target.matches('.calc-type') || target.matches('.calc-square') ||
                //     target.matches('.calc-day') || target.matches('.calc-count') )  {
                //         console.log(target)
                //     }

                // if (target === calcType || target === calcSquare ||
                //     target === calcDay || target === calcCount ) {
                //         console.log(target)
                //     }

                if (target.matches('select') || target.matches('input')){
                   countSum();
                }
            });

   };

   calc(100);
});