const validateForm = () => {
    const phoneFroms = document.querySelectorAll('.form-phone'),
            form2name = document.getElementById('form2name'),
            form2message = document.getElementById('form2message');

        phoneFroms.forEach((elem) => {
            elem.addEventListener('input', () =>{
                         
                elem.value = elem.value.replace(/[^\+\d]/g, '');
            });
        });

        form2name.addEventListener('input', () =>{
        form2name.value = form2name.value.replace(/[^а-яё ]/gi, '');
        });
        
        form2message.addEventListener('input', () =>{
            form2message.value = form2message.value.replace(/[^а-яё ]/gi, '');
            });
};

export default validateForm;