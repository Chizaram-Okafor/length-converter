// VARIABLES var const let
const milimeter = document.getElementById('milimeter')
const feet = document.getElementById('feet')
const inches = document.getElementById('inches')
const feets = document.getElementById('feets')
const instruction = document.getElementById('instruction')
const form = document.getElementById('form')
const output = document.getElementById('output')

let convertType;

milimeter.addEventListener('click', function(){
    convertType = "milimeter";
    instruction.innerHTML = 'Type in a number of milimeter';
})

feet.onclick = function(){
    convertType = "feet";
    instruction.innerHTML = 'Type in a number of feet'
}

inches.onclick = function() {
    convertType = "inches"
    instruction.innerHTML = 'Type in a number of inches'
}

// function myfunction() { 
//     convertType = "inches"
//     instruction.innerHTML = 'Type in a number of inches'

// }

function myfunction2() {
    convertType = "feets"
    instruction.innerHTML = 'Type in a number of feets'

}
feets.onclick = function() {
    myfunction2()
}

// FORM SUBMIT
form.onsubmit = function(event){
    event.preventDefault();

    var number = document.getElementById('number').value;

    if (number) {
        if (convertType == "milimeter") {
            var result = (number * 0.00328084)
            output.innerHTML = `${number} milimeter = ${result} feet`
        }

        else if (convertType == "feet") {
            var result = (number * 304.8)
            output.innerHTML = `${number} feet = ${result} milimeter`
        }

        else if (convertType == "inches") {
            var result = (number * 0.0833333)
            output.innerHTML = `${number} inches = ${result} feets`
        }

        else if (convertType == "feets") {
            var result = (number * 12)
            output.innerHTML = `${number} feets = ${result} inches`
        }

    }
    else { 
        output.innerHTML = 'Please enter a value!'
    }
    
}