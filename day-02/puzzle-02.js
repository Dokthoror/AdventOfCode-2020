const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let goodPassword = 0;

lines.forEach(line => {
    let data = line.split(': ');

    let policyData = data[0];
    let policyLetter = policyData.split(' ')[1];
    let policyPosition = policyData.split(' ')[0];
    let policyFirstPosition = policyPosition.split('-')[0];
    let policySecondPosition = policyPosition.split('-')[1];

    let letterPosition = 0;
    let countLetter = 0;

    let password = data[1].split('');
    for (let i = 0; i < password.length; i++) if (password[i] == policyLetter && (i == policyFirstPosition - 1 || i == policySecondPosition - 1)) countLetter++;

    if (countLetter == 1) goodPassword++;
});

console.log(goodPassword);