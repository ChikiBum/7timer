
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

export default changeImage;