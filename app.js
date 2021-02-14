var num1;
var num2;
var result;

//CLEAR FUNCTIONS

function clear() {
    document.querySelector("#result").innerHTML = "";
}
function clearAll() {
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#history").innerHTML = "";
}

//CLEAR EVENT LISTENERS

document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#clear-all").addEventListener("click", clearAll);

//NUMBER PRESS FUNCTIONS

function one() {
    document.querySelector("#result").innerHTML += "1";
    document.querySelector("#history").innerHTML += "1";
}
function two() {
    document.querySelector("#result").innerHTML += "2";
    document.querySelector("#history").innerHTML += "2";
}
function three() {
    document.querySelector("#result").innerHTML += "3";
    document.querySelector("#history").innerHTML += "3";
}
function four() {
    document.querySelector("#result").innerHTML += "4";
    document.querySelector("#history").innerHTML += "4";
}
function five() {
    document.querySelector("#result").innerHTML += "5";
    document.querySelector("#history").innerHTML += "5";
}
function six() {
    document.querySelector("#result").innerHTML += "6";
    document.querySelector("#history").innerHTML += "6";
}
function seven() {
    document.querySelector("#result").innerHTML += "7";
    document.querySelector("#history").innerHTML += "7";
}
function eight() {
    document.querySelector("#result").innerHTML += "8";
    document.querySelector("#history").innerHTML += "8";
}
function nine() {
    document.querySelector("#result").innerHTML += "9";
    document.querySelector("#history").innerHTML += "9";
}
function zero() {
    document.querySelector("#result").innerHTML += "0";
    document.querySelector("#history").innerHTML += "0";
}

//NUMBER PRESS EVENT LISTENERS

document.querySelector("#one").addEventListener("click", one);
document.querySelector("#two").addEventListener("click", two);
document.querySelector("#three").addEventListener("click", three);
document.querySelector("#four").addEventListener("click", four);
document.querySelector("#five").addEventListener("click", five);
document.querySelector("#six").addEventListener("click", six);
document.querySelector("#seven").addEventListener("click", seven);
document.querySelector("#eight").addEventListener("click", eight);
document.querySelector("#nine").addEventListener("click", nine);
document.querySelector("#zero").addEventListener("click", zero);

//OPERATOR FUNCTIONS

function add() {
    if (!(document.querySelector("#history").innerHTML.includes("+") || document.querySelector("#history").innerHTML.includes("-") || document.querySelector("#history").innerHTML.includes("*") || document.querySelector("#history").innerHTML.includes("÷") || document.querySelector("#history").innerHTML.includes("mod"))) {
        document.querySelector("#history").innerHTML += "+";
        num1 = parseInt(document.querySelector("#result").innerHTML);
        document.querySelector("#result").innerHTML = "";
    }
}
function subtract() {
    if (!(document.querySelector("#history").innerHTML.includes("+") || document.querySelector("#history").innerHTML.includes("-") || document.querySelector("#history").innerHTML.includes("*") || document.querySelector("#history").innerHTML.includes("÷") || document.querySelector("#history").innerHTML.includes("mod"))) {
        document.querySelector("#history").innerHTML += "-";
        num1 = parseInt(document.querySelector("#result").innerHTML);
        document.querySelector("#result").innerHTML = "";
    }
}
function multiply() {
    if (!(document.querySelector("#history").innerHTML.includes("+") || document.querySelector("#history").innerHTML.includes("-") || document.querySelector("#history").innerHTML.includes("*") || document.querySelector("#history").innerHTML.includes("÷") || document.querySelector("#history").innerHTML.includes("mod"))) {
        document.querySelector("#history").innerHTML += "*";
        num1 = parseInt(document.querySelector("#result").innerHTML);
        document.querySelector("#result").innerHTML = "";
    }
}
function divide() {
    if (!(document.querySelector("#history").innerHTML.includes("+") || document.querySelector("#history").innerHTML.includes("-") || document.querySelector("#history").innerHTML.includes("*") || document.querySelector("#history").innerHTML.includes("÷") || document.querySelector("#history").innerHTML.includes("mod"))) {
        document.querySelector("#history").innerHTML += "&divide;";
        num1 = parseInt(document.querySelector("#result").innerHTML);
        document.querySelector("#result").innerHTML = "";
    }
}
function mod() {
    if (!(document.querySelector("#history").innerHTML.includes("+") || document.querySelector("#history").innerHTML.includes("-") || document.querySelector("#history").innerHTML.includes("*") || document.querySelector("#history").innerHTML.includes("÷") || document.querySelector("#history").innerHTML.includes("mod"))) {
        document.querySelector("#history").innerHTML += " mod ";
        num1 = parseInt(document.querySelector("#result").innerHTML);
        document.querySelector("#result").innerHTML = "";
    }
}

//EQUALS FUNCTION

function equals() {
    num2 = parseInt(document.querySelector("#result").innerHTML);
    if (document.querySelector("#history").innerHTML.includes("+")) {
        result = num1 + num2;
    }   else if (document.querySelector("#history").innerHTML.includes("-")) {
            result = num1 - num2;
        }
        else if (document.querySelector("#history").innerHTML.includes("*")) {
            result = num1 * num2;
        }
        else if (document.querySelector("#history").innerHTML.includes("÷")) {
            result = num1 / num2;
        }
        else if (document.querySelector("#history").innerHTML.includes("mod")) {
            result = num1 % num2;
        }
    document.querySelector("#result").innerHTML = result;
}

//OPERATOR EVENT LISTENERS

document.querySelector("#plus").addEventListener("click", add);
document.querySelector("#minus").addEventListener("click", subtract);
document.querySelector("#times").addEventListener("click", multiply);
document.querySelector("#divided-by").addEventListener("click", divide);
document.querySelector("#mod").addEventListener("click", mod);
document.querySelector("#equals").addEventListener("click", equals);

