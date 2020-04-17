//__Eigencode__
//Study Countdown

const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
var klick = false;
var countdownbtn: any = document.getElementById('startCountdown');


countdownbtn!.addEventListener("click", function(){
setInterval(updateCountdown, 1000);
countdownbtn!.disabled = true;
})

export function updateCountdown() {
  const minutes = Math.floor(time/60);
  let seconds: String | number = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdownEl!.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
