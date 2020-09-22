// Heron's Formula

// Event Listener
document.getElementById("calculate").addEventListener("click", calc);

// Event Functions
function calc() {
    let sideA = +document.getElementById('sideA').value;
    let sideB = +document.getElementById('sideB').value;
    let sideC = +document.getElementById('sideC').value;
    
    document.getElementById("answer").innerHTML =  heronsFormula(sideA, sideB, sideC);
}

function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area;
}