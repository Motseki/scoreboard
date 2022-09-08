let homeEl = document.getElementById("el-home")
let guestEl = document.getElementById("el-guest")
let homeScore = 0;
let guestScore = 0;

homeEl.textContent = homeScore;
guestEl.textContent = guestScore;

function homescore1() {
    homeScore+=1;
    homeEl.textContent = homeScore;
}

function homescore2() {
    homeScore+=2;
    homeEl.textContent = homeScore; 
}

function homescore3() {
    homeScore+=3;  
    homeEl.textContent = homeScore;
}

function guestscore1() {
    guestScore+=1;
    guestEl.textContent = guestScore;
    
}

function guestscore2() {
    guestScore+=2;
     guestEl.textContent = guestScore;    
}

function guestscore3() {
    guestScore+=3;
     guestEl.textContent = guestScore;
}