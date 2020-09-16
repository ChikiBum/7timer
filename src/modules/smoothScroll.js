


const smoothScroll = () => {
    const mainHrefs = document.querySelector('main a[href*="#"]'),
        menuHrefs = document.querySelectorAll('menu ul a[href*="#"]');

        for (let item of menuHrefs){
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const hrefValue = item.getAttribute('href');
                document.querySelector(hrefValue).scrollIntoView({
                    behavior: 'smooth'
                });
            
            });
        } 

        mainHrefs.addEventListener('click', (e) => {
        e.preventDefault();
        const hrefValue = mainHrefs.getAttribute('href');
        document.querySelector(hrefValue).scrollIntoView({
            behavior: 'smooth'
        });
    
        });
       
};

export default smoothScroll;