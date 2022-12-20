// 1. conversion metrics stored into const variables, as the values won't change
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPounds = 2.204

// 2.  DOM manipulations to store the html values into dedicated variables
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let btnEl = document.getElementById("btn-el")
let btnDel = document.getElementById("btn-del")
let inputEl = document.getElementById("input-el")

// 3. Build of the button through addEventListener
btnEl.addEventListener("click", function(){
    
    // 3.1 Whatever value the user type into the input field, has to be stored into a variable
    let baseValue = inputEl.value
    
    // 3.2 Rendering of each conversion string using $ as selector to return the set of DOM elements and keep the code leaner. The toFixed() method is to round down each result to 2 decimals.
    
    lengthEl.textContent = `${baseValue} Meter = ${(baseValue*meterToFeet).toFixed(2)} Feet | ${baseValue} Feet = ${(baseValue/meterToFeet).toFixed(2)}`
    
    volumeEl.textContent = `${baseValue} Liter = ${(baseValue*literToGallon).toFixed(2)} Gallons | ${baseValue} Gallons = ${(baseValue/literToGallon).toFixed(2)}`
    
    massEl.textContent = `${baseValue} Kilos = ${(baseValue*kilogramToPounds).toFixed(2)} Pounds | ${baseValue} Pounds = ${(baseValue/kilogramToPounds).toFixed(2)}`
})

