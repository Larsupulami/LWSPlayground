function syncXValue() {
    const xSlider = document.getElementById('xValueSlider');
    const xInput = document.getElementById('xValue');
    xInput.value = xSlider.value;
    checkValues();
}

function syncXSlider() {
    const xSlider = document.getElementById('xValueSlider');
    const xInput = document.getElementById('xValue');
    xSlider.value = xInput.value;
    checkValues();
}

function syncYValue() {
    const ySlider = document.getElementById('yValueSlider');
    const yInput = document.getElementById('yValue');
    yInput.value = ySlider.value;
    checkValues();
}

function syncYSlider() {
    const ySlider = document.getElementById('yValueSlider');
    const yInput = document.getElementById('yValue');
    ySlider.value = yInput.value;
    checkValues();
}

function checkValues() {
    const x = parseFloat(document.getElementById('xValue').value);
    const y = parseFloat(document.getElementById('yValue').value);
    const xResult = x / 3;
    const yResult = y / 3;

    let isXValid = Math.abs(xResult - Math.floor(xResult) - 0.6666) < 0.001;
    let isYValid = Math.abs(yResult - Math.floor(yResult) - 0.3333) < 0.001;

    if (x > 455 || x < 425) isXValid = false;
    if (y > 451 || y < 400) isYValid = false;

    if (isXValid) {
        document.getElementById('xIndicator').className = 'ok-indicator';
    } else {
        document.getElementById('xIndicator').className = 'not-ok-indicator';
    }

    if (isYValid) {
        document.getElementById('yIndicator').className = 'ok-indicator';
    } else {
        document.getElementById('yIndicator').className = 'not-ok-indicator';
    }

    if (isXValid && isYValid) {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').classList.add('green');
        document.getElementById('status').innerText = "OK";
        document.body.classList.add('background-ok');
        document.body.classList.remove('background-not-ok');
    } else {
        document.getElementById('result').style.display = 'none';
        document.getElementById('result').classList.remove('green');
        document.getElementById('status').innerText = "Not OK";
        document.body.classList.add('background-not-ok');
        document.body.classList.remove('background-ok');
    }
}

setInterval(checkValues, 1000);
window.onload = checkValues;
