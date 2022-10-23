let scoreH = 0
let scoreG = 0


function addHome(int) {
    scoreH += int
    document.getElementById("home-score").textContent = scoreH

}
function addGuest(int) {
    scoreG += int
    document.getElementById("guest-score").textContent = scoreG

}

function reset() {
    document.getElementById("home-score").textContent = 0
    document.getElementById("guest-score").textContent = 0
    scoreH = 0
    scoreG = 0
}