const fs = require('fs');
let accumulator = 0;
let measurementSums = [];

fs.readFile('input', 'utf8', (err, data) => {
    data = data.split("\n");
    for (let i = 0; i < data.length - 2; i++) {
        let sliced = data.slice(i, i + 3);
        measurementSums.push(sliced.reduce((a, b) => parseInt(a) + parseInt(b)));
    }
    measurementSums.reduce((previous, actual) => {
        if (previous < actual) accumulator++;
        return actual;
    });
    console.log(accumulator);
})