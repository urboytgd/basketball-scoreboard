const homeScore = document.getElementById("home-score")
const awayScore = document.getElementById("away-score")

let homeCount = 0
let awayCount = 0

// HOME SCORE CALCULATION
function addOneH() {
    homeCount += 1
    homeScore.innerText = homeCount

}

function addTwoH() {
    homeCount += 2
    homeScore.innerText = homeCount
}

function addThreeH() {
    homeCount += 3
    homeScore.innerText = homeCount
}

// AWAY SCORE CALCULATION
function addOneA() {
    awayCount += 1
    awayScore.innerText = awayCount
}

function addTwoA() {
    awayCount += 2
    awayScore.innerText = awayCount
}

function addThreeA() {
    awayCount += 3
    awayScore.innerText = awayCount
}

// RESET GAME
function resetGame() {
    awayCount = 0
    homeCount = 0
    homeScore.innerText = homeCount
    awayScore.innerText = awayCount
}