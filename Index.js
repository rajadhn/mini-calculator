const buttonEl = document.querySelectorAll("button");

const inputFiledEl = document.getElementById("result");

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", () => {
        const buttonValue = buttonEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFiledEl.value = "";
}

function calculateResult() {
    inputFiledEl.value = eval(inputFiledEl.value);
}

function appendValue(buttonValue) {
    inputFiledEl.value += buttonValue;
    //    inputFieldEl.value = inputFieldEl.value + buttonValue;
}