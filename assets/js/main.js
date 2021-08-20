console.log('test')
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz
let male = document.getElementById('male');
let female = document.getElementById('female')

let pal = document.getElementById('pal')
// let palValue = 0.95
// let isFemale = true

let age = document.getElementById("alter")
let weight = document.getElementById('gewicht')
let size = document.getElementById('größe')

let result1 = document.getElementById('result1')
let result2 = document.getElementById('result2')

//die Berechnung
function calc() {

    if (getGender()) {
        console.log(grundsatzFemale(weight.value, age.value, size.value).toFixed(2))
        console.log('test1')


        result1.innerHTML = 'Grundumsatz: ' + grundsatzFemale(weight.value, age.value, size.value).toFixed(2)

        result2.innerHTML = 'Gesamtumsatz: ' + (grundsatzFemale(weight.value, age.value, size.value) * getPal()).toFixed(2)

    } else {
        result1.innerHTML = 'Grundumsatz: ' + grundsatzMale(weight.value, age.value, size.value).toFixed(2)

        result2.innerHTML = 'Gesamtumsatz: ' + (grundsatzMale(weight.value, age.value, size.value) * getPal()).toFixed(2)
        console.log(getPal())
        console.log('test2')
        console.log(grundsatzMale(weight.value, age.value, size.value) * Number(getPal()))
    }
}



function grundsatzMale(weight, age, size) {
    return 664.7 + (13.7 * weight) + (5 * size) - (6.8 * age)
}

function grundsatzFemale(weight, age, size) {
    return 655.1 + (9.6 * weight) + (1.8 * size) - (4.7 * age)

}

function getGender() {
    if (female.checked) {
        // console.log('female')
        // isFemale = true
        return true
    } else {
        //console.log('male')
        // isFemale = false
        return false
    }
}

function getPal() {
    // getElementById('pal').value
    return pal.value
}