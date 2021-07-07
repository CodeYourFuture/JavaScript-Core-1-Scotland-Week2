

function moveRocket(y) {
    return y;
}



let rocket = document.querySelector('#rocketDiv');
let yPosition = (window.innerHeight - 250);
rocket.style.top = yPosition + "px";
window.setInterval(launchRocket, 10);

function launchRocket() {
    yPosition = moveRocket(yPosition);
    rocket.style.top = yPosition + "px";
}