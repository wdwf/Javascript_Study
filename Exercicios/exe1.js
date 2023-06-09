const EXPECTED_MINUTES_IN_OVEN = 40;


//Tempo restante no forno
// const remainingMinutesInOver = (realMinutes) => {
//     return EXPECTED_MINUTES_IN_OVEN - realMinutes
// }

// //Tempo de preparação
// const preparationTimeInMinute = (layers) => {
//     return 2 * layers
// }

// const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
//     return console.log(numberOfLayers + actualMinutesInOven);
// }

// totalTimeInMinutes(preparationTimeInMinute(3), remainingMinutesInOven(20))



// const mult = (fac) => {
//     return (num) => {
//         return num / fac
//     }
// }

// let tt = mult(5)

// console.log(tt(2));


function remainingMinutesInOven (realMinutes){
    return EXPECTED_MINUTES_IN_OVEN - realMinutes
}

//Tempo de preparação
function preparationTimeInMinutes (layers){
    return 2 * layers
}

function totalTimeInMinutes (numberOfLayers, actualMinutesInOven) {
    return  preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

console.log(totalTimeInMinutes(1, 5));
