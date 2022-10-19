let scoreH = 0 
let scoreG = 0


function addHome (int) {
    scoreH += int
    document.getElementById("home-score").innerText = scoreH
    
}
 function addGuest (int) {
      scoreG += int
    document.getElementById("guest-score").innerText = scoreG
    
}
