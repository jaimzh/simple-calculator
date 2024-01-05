const display = document.getElementById("display");

//showing whatever button that was clicked on the display screen
function showInDisplay(input){
    display.value = display.value + input;
}

//clear display
function clearDisplay(){
    display.value = '';
}

// delete one character (backspace)
function deButton(){
    display.value = display.value.toString().slice(0,-1);
}

//calculate
function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        display.classList.add('errorx'); 
    }
}

