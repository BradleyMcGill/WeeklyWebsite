let initialMousePosition = 0;
let canMove = false;
let currentTimelinePosition = 0;
let saveScrollPercent = 0;

window.onmousedown = event => {
    canMove = true;
    initialMousePosition = event.clientX;
}

window.onmouseup = () => {
    canMove = false;
    saveScrollPercent = currentTimelinePosition;
}

window.onmousemove = event => {
    if (canMove){
        let movementDifference = event.clientX - initialMousePosition;
        let movePercentage = 100 * (movementDifference / window.innerWidth);

        currentTimelinePosition = Math.max(
            Math.min(saveScrollPercent + movePercentage, 30)
        , -55);

        document.getElementById("Timeline").style.transform = `translate(${currentTimelinePosition}%, 50%`;
    }
}