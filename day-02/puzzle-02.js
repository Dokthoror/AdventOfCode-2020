const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let goodPassword = 0;

lines.forEach((line) => {
    const data = line.split(': ');

    const policyData = data[0];
    const policyLetter = policyData.split(' ')[1];
    const policyPosition = policyData.split(' ')[0];
    const policyFirstPosition = policyPosition.split('-')[0];
    const policySecondPosition = policyPosition.split('-')[1];

    let countLetter = 0;

    const password = data[1].split('');
    for (let i = 0; i < password.length; i++) if (password[i] == policyLetter && (i == policyFirstPosition - 1 || i == policySecondPosition - 1)) countLetter++;

    if (countLetter == 1) goodPassword++;
});

console.log(goodPassword);
