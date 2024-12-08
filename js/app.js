"using strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");


function incrementCount() {
    // Write the relevant code in this block
    count++;
}

function decrementCount() {
    // Write the relevant code in this block
    count--;
}

function resetCount() {
    // Write the relevant code in this block
    count = 0;
}

function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", function onClick () {
    // Write code below this line
    incrementCount();
    // STOP HERE
    renderUpdatedCount();
});

resetBtn.addEventListener("click", function onClick () {
    // Write code below this line
    resetCount();
    // STOP HERE
    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function onClick() {
    // Write code below this line
    decrementCount();
    // STOP HERE
    renderUpdatedCount();
});
