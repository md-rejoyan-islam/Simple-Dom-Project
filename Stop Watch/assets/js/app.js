
/* watch time(hour, minute ,second ) selector */
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const audio=document.querySelector('audio')
/* watch control button selector */
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')


// Initial value declare for minute,second ,hour 
let sec = 0;
let min = 0;
let hr = 0;
let clear = ''

// start button event 
start.onclick = () => {
    //clearInterval use for remove extra click event
   clearInterval(clear)
   clear = setInterval(() => {
      sec++;
      audio.play()
        // after every 60 second ,second value increases
      if (sec == 60) {
         sec = 0;
         second.innerHTML = sec;
         min++
            // after every 60 minute , hour value increases 
         if (min == 60) {
            min = 0;
            minute.innerHTML = min;
            hr++;
            hour.innerHTML = hr;
         } else {
            minute.innerHTML = min
         }

      }else {
         second.innerHTML = sec;
         minute.innerHTML = min;
         hour.innerHTML = hr;
      }

      // if value(second,minute,hour) will be less than 10 then add extra zero in their front 
      (sec < 10) ? second.innerHTML = `0${sec}`: second.innerHTML = sec;
      (min < 10) ? minute.innerHTML = `0${min}`: minute.innerHTML = min;
      (hr < 10) ? hour.innerHTML = `0${hr}`: hour.innerHTML = hr;

   }, 1000)


}

// stop button event :
stop.onclick = () => {
   clearInterval(clear);
}

// reset button event :
reset.onclick = () => {
    // stop event  
   clearInterval(clear);
   //after reset value wii be zero 
   min = 0;
   sec = 0;
   hr = 0;
    // value reset
   second.innerHTML = `0${sec}`
   minute.innerHTML = `0${min}`
   hour.innerHTML = `0${hr}`
}