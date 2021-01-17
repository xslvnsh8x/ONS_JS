'use strict';

const currentTime = document.querySelector('#currentTime');
const userTime = document.querySelector('#alarm-time');
const sound = new Audio('media/alarm.mp3');
const setBtn = document.querySelector('#set-btn');
const stopBtn = document.querySelector('#stop-btn');

function formatTime(time) {
  let hr = time.getHours();
  if (hr < 10) hr = '0' + hr;

  let mn = time.getMinutes();
  if (mn < 10) mn = '0' + mn;

  return `${hr}:${mn}`;
}

setInterval(() => {
  currentTime.textContent = formatTime(new Date());
}, 1000);

let setAlarm;

function activateAlarm() {
  setAlarm = setInterval(() => {
    let time = new Date();

    if (userTime.value === formatTime(time)) {
      document.querySelector('.alarm__form-showtime').textContent = 'Wake Up!!!!';
      sound.play();
      sound.loop = true;
    }
  }, 1000);
}

function stopAlarm() {
  sound.pause();
  sound.loop = false;
  document.querySelector('.alarm__form-showtime').textContent = '';
  clearInterval(setAlarm);
}

setBtn.addEventListener('click', () => {
  document.querySelector('.alarm__form-showtime').textContent = 'Alarm is set on ' + userTime.value;
  activateAlarm();
});

userTime.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
    document.querySelector('.alarm__form-showtime').textContent = 'Alarm is set on ' + userTime.value;
    activateAlarm();
  }
});

stopBtn.addEventListener('click', () => stopAlarm());
