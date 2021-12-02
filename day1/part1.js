const fs = require('fs');
let accumulator = 0;
const reducer = function (anterior, actual) {
    if (parseInt(anterior) < parseInt(actual)) accumulator++;
    return actual;
}
fs.readFile('input', 'utf8', (err, data) => {
    data.split("\n").reduce(reducer);
    console.log(accumulator);
})