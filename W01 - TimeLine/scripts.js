let initialMousePosition = 0;
let canMove = false;
let currentTimelinePosition = 0;
let saveScrollPercent = 30;
let windowCenter = window.innerWidth / 2;
const leftValue = 30;
const rightValue = -55;
const spaceBetweenCards = 8;

window.onmousedown = event => {
    canMove = true;
    initialMousePosition = event.clientX;
}

window.onmouseup = () => {
    canMove = false;
    saveScrollPercent = currentTimelinePosition;
}

window.onmousemove = event => {
    if (canMove) {
        let movementDifference = event.clientX - initialMousePosition;
        let movePercentage = 100 * (movementDifference / window.innerWidth);

        currentTimelinePosition = Math.max(
            Math.min(saveScrollPercent + movePercentage, leftValue)
        , rightValue);

        document.getElementById("Timeline").style.transform = `translate(${currentTimelinePosition}%, ${leftValue}%)`;

        let children = document.getElementById("Timeline").children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove("centered");
            if (children[i].getBoundingClientRect().left <= windowCenter && children[i].getBoundingClientRect().right >= windowCenter - spaceBetweenCards) {
                children[i].classList.add("centered");
            }
        }
    }
}