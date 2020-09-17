
    const sendForm = () => {

        const errorMessage = 'Что-то пошло не так....',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const forms = document.querySelectorAll('form');
        
        const statusMassage = document.createElement('div'); 
        statusMassage.style.csstext = 'font-size: 2rem; ';
        statusMassage.setAttribute("style","height: 12rem; display: inline-block;");

        const animateGif = document.createElement("img");
            animateGif.setAttribute("src","./animation.gif");
            animateGif.setAttribute("alt","animation preload");
            animateGif.setAttribute("style","height: 100%");

          
        forms.forEach((elem) => {
            elem.addEventListener('submit', (event) => {
                event.preventDefault();
                const target = event.target,
                        form = target.closest('form');

                const inputs = form.querySelectorAll('input');

                form.appendChild(statusMassage);
                // statusMassage.textContent = loadMessage;
                statusMassage.append(animateGif);
                const formData = new FormData(form);
               
                let body = {};

                // for (let val of formData.entries()){
                //     body[val[0]] = val[1];
                // }

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body) 
                    .then((response) => {
                        if (response.status !== 200){
                            throw new Error('status network not 200')
                        }
                    statusMassage.setAttribute("style","height: auto;");
                    statusMassage.textContent = successMessage; 
                    }) 
                    .catch((error) => {
                    statusMassage.setAttribute("style","height: auto;");
                    statusMassage.textContent = errorMessage; 
                    console.error(error);
                    });
                
                inputs.forEach((elem) => {
                    // console.log(elem);
                elem.value = '';
                });
            });

        });

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'  
                },
                body: JSON.stringify(body)
            });
        };
    };

    export default sendForm;