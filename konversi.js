function celciusToFahrenheit(celcius) {
    var fahrenheit = (celcius * 9 / 5) + 32;
    return fahrenheit
}

function konversi() {
    var inputCelcius = parseFloat(document.getElementById("inputCelcius").value);
    var suhuFahrenheit = celciusToFahrenheit(inputCelcius);
    var caraPerhitungan = inputCelcius + " derajat Celcius dikonversi ke Fahrenheit dengan cara: ("
        + inputCelcius + " 9/5) + 32 = " + suhuFahrenheit;

    document.getElementById("hasilFahrenheit").value = suhuFahrenheit + " derajat Fahrenheit.";
    document.getElementById("caraPerhitungan").value = caraPerhitungan;
}

function reset() {
    document.getElementById("inputCelcius").value = "";
    document.getElementById("hasilFahrenheit").value = "";
    document.getElementById("caraPerhitungan").value = "";
}

function reverse() {
    var inputCelcius = parseFloat(document.getElementById("inputCelcius").value);
    var suhuFahrenheit = celciusToFahrenheit(inputCelcius);
    var caraPerhitungan = suhuFahrenheit + " derajat Fahrenheit dikonversikan ke celcius dengan cara : ("
        + suhuFahrenheit + " - 32) * 5/9 = " + inputCelcius;

    document.getElementById("hasilFahrenheit").value = suhuFahrenheit + " derajat Fahrenheit";
    document.getElementById("caraPerhitungan").value = caraPerhitungan;
}
