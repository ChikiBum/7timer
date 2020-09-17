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

export default toggleMenu;