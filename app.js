var _hour = document.getElementsByClassName('hour')[0];
var _min = document.getElementsByClassName('min')[0];
var _sec = document.getElementsByClassName('sec')[0];
var _msec = document.getElementsByClassName('msec')[0];

var startBtn = document.getElementsByClassName('start-btn')[0];
var stopBtn = document.getElementsByClassName('stop-btn')[0];
var resetBtn = document.getElementsByClassName('reset-btn')[0];

var hour = 0;
var min = 0;
var sec = 0;
var ms = 0;

var IntervalID;

function showTime (event) {
  event.preventDefault();
  if(ms < 100){
    ms = ms + 1;
  }else {
    ms = 0
    sec += 1;
  }

  if(sec === 60 ){
      min += 1;
      sec = 0;
  }

  if( min === 60 ){
    hour += 1;
    min = 0;
  }

   _msec.innerHTML = (ms < 10) ? '0'+ms : ms;
   _sec.innerHTML = (sec < 10) ? '0'+sec : sec;
   _min.innerHTML = (min < 10) ? '0'+min : min;
   _hour.innerHTML = (hour < 10) ? '0'+hour : hour;
}

function StartCount (event) {
    event.preventDefault();
    clearInterval(IntervalID);
    IntervalID = setInterval(function () {
      showTime(event);
    }, 10);
}


function stopCount(event){
  event.preventDefault();
    clearInterval(IntervalID)
}

function resetCount() {
  event.preventDefault();
    clearInterval(IntervalID);
    _msec.innerHTML = '00';
    _sec.innerHTML = '00';
    _min.innerHTML = '00';
    _hour.innerHTML = '00';
}

startBtn.addEventListener('click', StartCount);
stopBtn.addEventListener('click', stopCount);
resetBtn.addEventListener('click', resetCount);
