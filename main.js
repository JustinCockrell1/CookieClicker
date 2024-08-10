let count = 0;
let targetValue = 0;

let lastElapsedTime = 0;

let totalDiff = 0;

document.getElementById("button").onclick = function() {
    targetValue += 1;
    if(count!=targetValue) {
        totalDiff = targetValue - count;
        window.requestAnimationFrame(animateCount)
    }
}

function animateCount(totalElapsedTime) {

    const elapsedTime = totalElapsedTime - lastElapsedTime;
    lastElapsedTime = totalElapsedTime;

    count += totalDiff / elapsedTime;

    if(count<targetValue) {
        window.requestAnimationFrame(animateCount);
    }
    else if(count > targetValue) {
        count = targetValue;
    }

    document.getElementById("count").innerHTML = count.toFixed(0);
}