window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');

    let startbtn = document.querySelector('#start');
     let stopbtn = document.querySelector('#stop');
      let resetbtn = document.querySelector('#reset');
      let Interval;



      const startTimer = () => {
        tens++
        if (tens <= 9){
            appendTens.innerHTML = '0' + tens
        }
        if (tens > 9){
            appendTens.innerHTML = tens
        }
        if(tens > 99){
            seconds++
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
      };

      startbtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      };
      stopbtn.onclick = () => {
        clearInterval(Interval);
      }
      
      resetbtn.onclick = ()=> {
        clearInterval(Interval);
        tens ='00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
      }


};





