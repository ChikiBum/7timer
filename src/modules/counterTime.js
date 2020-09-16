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
            
            setTimeout(updateClock, 1000)
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        updateClock();
}

export default counterTime;