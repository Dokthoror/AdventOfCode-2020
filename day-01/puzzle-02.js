const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


lines.forEach((fLine) => {
    lines.forEach((sLine) => {
        lines.forEach((tLine) => {
            if (Number(fLine) + Number(sLine) + Number(tLine) == 2020) {
                console.log(Number(fLine) * Number(sLine) * Number(tLine));
            }
        });
    });
});
