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

export default addSliderDots;