// Select Objects & Define Vars
const digit1000 = document.getElementById('secondTens');
const digit0100 = document.getElementById('secondOnes');
const digit0010 = document.getElementById('msHundreds');
const digit0001 = document.getElementById('msTens');
const colon = document.getElementById('colon');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
stopButton.disabled = true;
const resetButton = document.getElementById('resetButton');
resetButton.disabled = true;
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
                    // clearInterval(timer);
                    stopTimer();
                    allDigits.forEach(turnRed);
                    turnRed(colon);
                }
            }
        }
    }
}

function startTimer () {
    if (dval[0]===1) {
        resetTimer();
    }
    timer_started = true;
    stopButton.disabled = false;
    stopButton.className = "button";
    resetButton.disabled = true;
    resetButton.className = "button disabled";
    startButton.disabled = true;
    startButton.className = "button disabled";
}

function stopTimer () {
    timer_started = false;
    stopButton.disabled = true;
    stopButton.className = "button disabled";
    resetButton.disabled = false;
    resetButton.className = "button";
    if (dval[0]===0) {
        startButton.disabled = false;
        startButton.className = "button";
    }
}

function resetTimer () {
    allDigits.forEach(clearRed);
    clearRed(colon);
    dval = [0,0,0,0];
    updateTimer();
    resetButton.disabled = true;
    resetButton.className = "button disabled";
    startButton.disabled = false;
    startButton.className = "button";
}

// Digit functions
function turnRed (digit) {
    digit.className = "digit redDigit";
}

function clearRed (digit) {
    digit.className = "digit";
}

// Button event listenersstartButton.addEventListener('click', startTimer);

stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

