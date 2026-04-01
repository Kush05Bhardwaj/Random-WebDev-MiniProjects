function compareNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const resultDisplay = document.getElementById('result');

    if (num1 > num2) {
        resultDisplay.textContent = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        resultDisplay.textContent = `${num2} is greater than ${num1}`;
    } else {
        resultDisplay.textContent = `Both numbers are equal`;
    }
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

document.getElementById('compareButton').addEventListener('click', compareNumbers);