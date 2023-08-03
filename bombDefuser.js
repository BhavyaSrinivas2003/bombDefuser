let inputElement = document.getElementById("defuser");
let timerElement = document.getElementById("timer");
let counter = 10;
let uniqueId = setInterval(function() {
    let inputElementValue = inputElement.value;
    if ((counter !== 0) && (inputElementValue !== "defuse")) {
        timerElement.textContent = counter;
        counter = counter - 1;
    } else if ((counter === 0) && (inputElementValue !== "defuse")) {
        timerElement.textContent = "BOOM";
        clearInterval(uniqueId);
    } else if (inputElementValue === "defuse") {
        timerElement.textContent = "You did it";
        clearInterval(uniqueId);
    }
}, 1000)