//HOME

let home = 0;
document.getElementById("score1").textContent = home;

let totalHomeScore = document.getElementById('score1');

function addOne() {
home++
    totalHomeScore.textContent = home;
}
function addTwo() {
home += 2;
    totalHomeScore.textContent = home;
}
function addThree() {
home += 3;
      totalHomeScore.textContent = home;
}

//SUBTRACTION

function subOne() {
   home--;
    totalHomeScore.textContent = home;
}
function subTwo() {
home -= 2;
    totalHomeScore.textContent = home;
}
function subThree() {
  home -= 3;
    totalHomeScore.textContent = home;
}

//GUEST

let guest = 0;
document.getElementById("score2").textContent = guest;
let totalGuestScore = document.getElementById('score2');

function addOneG() {
    guest++
    totalGuestScore.textContent = guest;
}
function addTwoG() {
   guest += 2;
    totalGuestScore.textContent = guest; 
}
function addThreeG() {
    guest += 3;
    totalGuestScore.textContent = guest; 
}

//SUBTRACTION

function subOneG() {
    guest--
    totalGuestScore.textContent = guest;
}
function subTwoG() {
   guest -= 2;
    totalGuestScore.textContent = guest; 
}
function subThreeG() {
    guest -= 3;
    totalGuestScore.textContent = guest; 
}

function reset() {
    home = 0;
    guest = 0;
    totalHomeScore.textContent = home;
    totalGuestScore.textContent = guest;
}


let leader = document.getElementById('leader');
leader.textContent = 'Winning Team: ';


// if (home > guest) {
// leader.textContent = `Winning Team: Home`;
// } else {
// leader.textContent = `Winning Team: Guest`;
// }

// if (home == guest) {
// leader.textContent = `Winning Team: Home`;
// } else {
// leader.textContent = `Winning Team: Draw`;
// }


