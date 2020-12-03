const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


lines.forEach((fLine) => {
    lines.forEach((sLine) => {
        if (Number(fLine) + Number(sLine) == 2020) {
            console.log(`${fLine} * ${sLine} = ${Number(fLine) * Number(sLine)}`);
        }
    });
});
