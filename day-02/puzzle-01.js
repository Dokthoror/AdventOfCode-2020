const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let goodPassword = 0;

lines.forEach(line => {
    let data = line.split(': ');

    let policyData = data[0];
    let policyLetter = policyData.split(' ')[1];
    let policyMinMax = policyData.split(' ')[0];
    let policyMin = policyMinMax.split('-')[0];
    let policyMax = policyMinMax.split('-')[1];

    let countLetter = 0;

    let password = data[1];
    for (let letter of password) if (letter == policyLetter) countLetter++;

    if (countLetter >= policyMin && countLetter <= policyMax) goodPassword++;
});

console.log(goodPassword);