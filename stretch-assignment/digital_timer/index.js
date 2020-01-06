// Select Objects & Define Vars
let digit1000 = document.getElementById('secondTens');
let digit0100 = document.getElementById('secondOnes');
let digit0010 = document.getElementById('msHundreds');
let digit0001 = document.getElementById('msTens');
let colon = document.getElementById('colon');
let dval = [0,0,0,0];
let allDigits = [digit1000, digit0100, digit0010, digit0001];
let timer = setInterval(function(){ addToTimer(); updateTimer(); }, 10);
let timer_started = false;


// Timer Functions
function updateTimer () {
    allDigits.forEach(function (digit, index) { digit.textContent = `${dval[index]}`; });
}

function addToTimer () {
    if (timer_started) {
        dval[3] += 1;
        if (dval[3] === 10) {
            dval[2] += 1;
            dval[3] = 0;
            if (dval[2] === 10) {
                dval[1] += 1;
                dval[2] = 0;
                if (dval[1] === 10) {
                    dval[0] += 1;
                    dval[1] = 0;
                    clearInterval(timer);
                    timer_started = false;
                    allDigits.forEach(turnRed);
                    turnRed(colon);
                }
            }
        }
    }
}

function startTimer () {
    allDigits.forEach(clearRed);
    clearRed(colon);
    dval = [0,0,0,0];
    updateTimer();
    timer_started = true;
}

// Digit functions
function turnRed (digit) {
    digit.className = "digit redDigit";
}

function clearRed (digit) {
    digit.className = "digit";
}

// Page Script
startTimer();
