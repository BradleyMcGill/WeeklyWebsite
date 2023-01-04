let initialMousePosition = 0;
let canMove = false;
let currentTimelinePosition = 0;
let saveScrollPercent = 0;
let windowCenter = window.innerWidth / 2;

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
            Math.min(saveScrollPercent + movePercentage, 30)
        , -55);

        document.getElementById("Timeline").style.transform = `translate(${currentTimelinePosition}%, 0%)`;

        let children = document.getElementById("Timeline").children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove("centered");
            if (children[i].getBoundingClientRect().left <= windowCenter && children[i].getBoundingClientRect().right >= windowCenter) {
                children[i].classList.add("centered");
            }
        }
    }
}