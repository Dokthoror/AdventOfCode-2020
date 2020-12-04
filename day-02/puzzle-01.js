const fs = require('fs');


const inputData = fs.readFileSync('input-file.txt', 'utf8');
const lines = inputData.split(/\r?\n/);


let goodPassword = 0;

lines.forEach((line) => {
	const data = line.split(': ');

	const policyData = data[0];
	const policyLetter = policyData.split(' ')[1];
	const policyMinMax = policyData.split(' ')[0];
	const policyMin = policyMinMax.split('-')[0];
	const policyMax = policyMinMax.split('-')[1];

	let countLetter = 0;

	const password = data[1];
	for (const letter of password) if (letter == policyLetter) countLetter++;

	if (countLetter >= policyMin && countLetter <= policyMax) goodPassword++;
});

console.log(goodPassword);
