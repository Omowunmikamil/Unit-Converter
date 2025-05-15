/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let per1Meter = 33.281
let per1Liter = 0.264
let per1Kilo = 0.264

const inputEl = document.getElementById("input-num")
const convertLen = document.getElementById("convert-len")
const convertVol = document.getElementById("convert-vol")
const convertMas = document.getElementById("convert-mas")
const convertBtn = document.getElementById("btn")

inputEl.addEventListener("focus", function() {
    if (this.value === "0") {
        this.value = ""
    }
})

convertBtn.addEventListener("click", function() {
    displayConvertLen()
    displayConvertVol()
    displayConvertMas()
    //inputEl.value = ""
})

function displayConvertLen() {
    let convertNum = Number(inputEl.value)
    let calculateLeft = convertNum * per1Meter
    let calculatrigth = convertNum / per1Meter
    
    convertLen.innerHTML = `
        ${convertNum} meters = ${calculateLeft.toFixed(3)} feet
        |
        ${convertNum} feet = ${calculatrigth.toFixed(3)} meters
        `
}

function displayConvertVol() {
    let convertNum = Number(inputEl.value)
    let calculateLeft = convertNum * per1Liter
    let calculatrigth = convertNum / per1Liter
    
    convertVol.innerHTML = `
        ${convertNum} liters = ${calculateLeft.toFixed(3)} gallons
        |
        ${convertNum} gallons = ${calculatrigth.toFixed(3)} liters
        `
}

function displayConvertMas() {
    let convertNum = Number(inputEl.value)
    let calculateLeft = convertNum * per1Kilo
    let calculatrigth = convertNum / per1Kilo
    
    convertMas.innerHTML = `
        ${convertNum} kilos = ${calculateLeft.toFixed(3)} pounds
        |
        ${convertNum} pound = ${calculatrigth.toFixed(3)} kilos
        `
}

