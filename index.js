// Calculator program

const display = document.getElementById("display");

function appendToDisplay(input){ 
    if (display.value == "0") {
        display.value = ""; 
    }
    display.value += input;
}

function clearDisplay(){
    display.value = "0";
}

function calculate(){
    if (eval(display.value) == Infinity) {
        display.value = "Undefined";
    }
    else {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    }
}