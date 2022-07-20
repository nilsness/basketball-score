let homePoints = 0
let awayPoints = 0
let period = 1
let homeEl = document.getElementById("homeEl")
let awayEl = document.getElementById("awayEl")
let periodEl = document.getElementById("period")
let timeleft = 20;

function addPoints(el, points) {
    if (el == 'homeEl'){
        homePoints += points
        console.log("Poeng til hjemmelaget! " + points)
        homeEl.innerText = homePoints
    }
    else if (el == 'awayEl'){
        awayPoints += points
        console.log("Poeng til bortelaget! " + points)
        awayEl.innerText = awayPoints   
    }
    else{
        period += points
        console.log("Ny periode " + period)
        periodEl.innerText = period
        timeleft = 20
        setInterval(downloadTimer)
    }
}
function reset(){
    console.log('Ny kamp!')
    homePoints = 0
    awayPoints = 0
    period = 1
    timeleft = 20
    
    homeEl.innerText = homePoints
    awayEl.innerText = awayPoints
    periodEl.innerText = period
    setInterval(downloadTimer)    
}



var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
      clearInterval(downloadTimer)
      document.getElementById("countdown").innerHTML = "00"
      
      }
      else{
          document.getElementById("countdown").innerHTML = timeleft
          }
    timeleft -= 1
    }
    , 1000);