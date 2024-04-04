let number1 = Number(prompt("Birinchi sonni kiriting"))
let number2 = Number(prompt("Ikkinchi sonni kiriting"))

function bigger() {
    if (number1 > number2){
        alert("Eng katta son: " + number1);
    }
    else if (number2 > number1){
        alert("Eng katta son: " + number2);
    }
    else {
        alert("Ikkalasi bir biriga teng")
    }
}

bigger()