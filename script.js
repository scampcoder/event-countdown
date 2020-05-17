let counDownDate = new Date("Jan 1, 2020 12:00:00").getTime(); //initialize date and create a new one

const x = setInterval(function() {
  let now = new Date().getTime(); //get today's date and time
  const distance = countDownDate - now; //distance to countDownDate is itself minus today's date and time

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); //distance/(miliseconds * seconds * minutes * hours (miliseconds per day))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60)); //(distance % (miliseconds per day))/(miliseconds per minute)
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //(distance % miliseconds per minute) / (miliseconds per second)
  
})
