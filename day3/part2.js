const { count } = require('console');
const fs = require('fs');
const CO2 = 'CO2';
const O2 = 'O2';
const testAnswer = 230;

function calculateRating(data, watchFor) {
    let dataCopy = [...data];
    const readingLength = dataCopy[0].length;
    let rating;

    for (let j = 0; j < readingLength; j++) {
        let countCO2 = [0, 0];
        let expectedChar;
        dataCopy.forEach((element) => {
            if (element.charAt(j) == '0') {
                countCO2[0]++;
            } else {
                countCO2[1]++;
            }
        });

        if (watchFor == CO2) {
            expectedChar = countCO2[0] <= countCO2[1] ? 0 : 1;
        } else {
            expectedChar = countCO2[0] > countCO2[1] ? 0 : 1;
        }

        dataCopy.forEach((element) => {
            if (
                dataCopy.length > 1 &&
                element.charAt(j) != expectedChar
            ) {
                dataCopy = dataCopy.filter((e) => e !== element);
            }
        });
        if (dataCopy.length == 1) {
            rating = dataCopy[0];
        }
    }
    return parseInt(rating, 2);
}

function part1(data) {
    data = data.split('\n');

    let co2 = calculateRating(data, CO2);
    let o2 = calculateRating(data, O2);

    return co2 * o2;
}

const testData = fs.readFileSync('testinput', 'utf8');
const myTestAnswer = part1(testData);
if (myTestAnswer == testAnswer) {
    console.log('Test OK: ' + myTestAnswer);
    const data = fs.readFileSync('input', 'utf8');
    console.log(part1(data));
} else {
    console.log(
        'Wrong answer: ' + myTestAnswer + ' != ' + testAnswer,
    );
}
