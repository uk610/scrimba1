// let points = 0
// function home1() {
//     points = points + 1
//     points = document.getElementsByClassName('score')[0].textContent = points
// }
// function home2() {
//     points = points + 2
//     points = document.getElementsByClassName('score')[0].textContent = points
// }
// function home3() {
//     points = points + 3
//     points = document.getElementsByClassName('score')[0].textContent = points
// }


// function guest1() {
//     points = points + 1
//     points = document.getElementsByClassName('score')[1].textContent = points
// }
// function guest2() {
//     points = points + 2
//     points = document.getElementsByClassName('score')[1].textContent = points
// }
// function guest3() {
//     points = points + 3
//     points = document.getElementsByClassName('score')[1].textContent = points
// }

let homePoints = 0;
let guestPoints = 0;

function updateHomePoints(increment) {
    homePoints += increment;
    document.getElementsByClassName('score')[0].textContent = homePoints
}
function updateGuestPoints(increment) {
    guestPoints += increment;
    document.getElementsByClassName('score')[1].textContent = guestPoints;
}
function home1() {
    updateHomePoints(1);
}

function home2() {
    updateHomePoints(2);
}

function home3() {
    updateHomePoints(3);
}

function guest1() {
    updateGuestPoints(1);
}

function guest2() {
    updateGuestPoints(2);
}

function guest3() {
    updateGuestPoints(3);
}