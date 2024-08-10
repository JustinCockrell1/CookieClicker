let count = 0;
let targetValue = 0;

document.getElementById("button").onclick = function() {
    targetValue += 100;
    if(count!=targetValue) {
        animateCount();
    }
}

function animateCount() {

    if(count!=targetValue) {
        window.requestAnimationFrame(animateCount);
    }
}