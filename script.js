let countDownDate = new Date("Jan 1, 2024 12:00:00").getTime(); //initialize date and create a new one

const x = setInterval(function () {
  let now = new Date().getTime(); //get today's date and time
  const distance = countDownDate - now; //distance to countDownDate is itself minus today's date and time

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); //distance/(miliseconds * seconds * minutes * hours (miliseconds per day))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); //(distance % (miliseconds per day))/(miliseconds per minute)
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //(distance % miliseconds per hour) / (miliseconds per second)
  const seconds = Math.floor((distance % (1000 * 60)) / 1000); //(distance % miliseconds per minute) / miliseconds per second

  document.getElementById("root").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s "; //place vars into innerHTML

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("root").innerHTML = "Time Expired";
  }
}, 1000);
