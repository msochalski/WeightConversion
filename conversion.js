let outputArea = document.querySelector('.output');
let inputType = document.querySelector('#inputType');


function round(value) {
    return Math.round((value + Number.EPSILON) * 10**4) / 10**4;
}

class Converter
{
    static kilogramsToAll(kg) {
        return [["Grams", round(kg * 1000)],
                ["Pounds", round(kg * 2.205)],
                ["Ounces", round(kg * 35.274)]
            ]
    }

    static gramsToAll(grams) {
        return [
                ["Kilograms", round(grams / 1000)],
                ["Pounds", round(grams / 454)],
                ["Ounces", round(grams / 28.35)]
            ]
    }

    static ouncesToAll(ounces) {
        return [
            ["Kilograms", round(ounces / 35.274)],
            ["Grams", round(ounces * 28.3495)],
            ["Pounds", round(ounces / 16)]
        ]
    }

    static poundsToAll(pounds) {
        return [
            ["Kilograms", round(pounds / 2.205)],
            ["Grams", round(pounds * 454)],
            ["Ounces", round(pounds * 16)]
        ]
    }
}

function updateValues() {
    let input = document.querySelector('#weight').value;
    switch(inputType.value){
        case "kilograms": updateOutput(Converter.kilogramsToAll(input));
            break;
        case "grams": updateOutput(Converter.gramsToAll(input));
            break;
        case "pounds": updateOutput(Converter.poundsToAll(input));
            break;
        case "ounces": updateOutput(Converter.ouncesToAll(input));
    }
}

function updateOutput(values) {
    outputArea.style.visibility = 'visible';

    document.querySelector('#firstOutputName').innerHTML = values[0][0];
    document.querySelector('#firstOutputValue').innerHTML = values[0][1];

    document.querySelector('#secondOutputName').innerHTML = values[1][0];
    document.querySelector('#secondOutputValue').innerHTML = values[1][1];

    document.querySelector('#thirdOutputName').innerHTML = values[2][0];
    document.querySelector('#thirdOutputValue').innerHTML = values[2][1];
}

inputType.addEventListener('change', (event) => {
    if(document.querySelector('#weight').value != 0)
    updateValues()
});

document.querySelector('#weight').addEventListener('input', (event) => updateValues());
