/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meterFeet = document.getElementById("meters-feet")
let litersGallons = document.getElementById("liters-gallons")
let kilosPounds = document.getElementById("kilograms-pounds")
const convertBtn = document.getElementById("convert")
const userInput = document.getElementById("user-input")


convertBtn.addEventListener("click", function() {
    const numbCalc = userInput.value
    meterFeet.innerHTML = `<p>${numbCalc}
     meters = ${(numbCalc * 3.281).toFixed(3)} feet | ${numbCalc} 
     feet = ${(numbCalc / 3.281).toFixed(3)} meters </p>`
    litersGallons.innerHTML = `<p>${numbCalc}
     liters = ${(numbCalc * 0.264).toFixed(3)} gallons | ${numbCalc} 
     gallons = ${(numbCalc / 0.264).toFixed(3)} liters </p>`
    kilosPounds.innerHTML = `<p>${numbCalc}
     kilos = ${(numbCalc * 2.204).toFixed(3)} pounds | ${numbCalc} 
     pounds = ${(numbCalc / 2.204).toFixed(3)} kilos </p>`       
})



