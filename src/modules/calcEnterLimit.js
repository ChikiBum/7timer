const calcEnterLimit = () => {
    const calcItem = document.querySelectorAll('input.calc-item');

        calcItem.forEach((elem, index) => {
            elem.addEventListener('input', () => {

            elem.value = elem.value.replace(/[^0-9]/gi, '');

        });
    });
};

export default calcEnterLimit;