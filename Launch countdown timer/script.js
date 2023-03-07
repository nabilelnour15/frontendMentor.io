let daysnum = document.querySelector(".days .num");
let hoursnum = document.querySelector(".hours .num");
let minsnum = document.querySelector(".mins .num");
let secnum = document.querySelector(".sec .num");
const theDATE = new Date("2023-12-30");
const thetime = theDATE.getTime();
function countdown() {
  let nowdate = new Date();
  let nowtime = nowdate.getTime();
  let diff = Math.abs(thetime - nowtime);
  let days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  diff -= days * (1000 * 60 * 60 * 24);
  let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  diff -= hours * (1000 * 60 * 60);
  let mins = Math.floor(diff / (1000 * 60)) % 60;
  diff -= mins * (1000 * 60);
  let sec = Math.floor(diff / 1000) % 60;
  diff -= sec * 1000;
  daysnum.innerHTML = days <= 9 ? `0${days}` : days;
  hoursnum.innerHTML = hours <= 9 ? `0${hours}` : hours;
  minsnum.innerHTML = mins <= 9 ? `0${mins}` : mins;
  secnum.innerHTML = sec <= 9 ? `0${sec}` : sec;
}
countdown();
setInterval(function () {
  countdown();
}, 1000);
