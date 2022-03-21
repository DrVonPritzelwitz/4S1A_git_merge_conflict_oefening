let class4S1A = ['Ömer'];

let classList = document.getElementById('cl');

let outputList = '';

for(let i = 0; class4S1A.length > i; i++) {
	outputList += `<li>Hello ${class4S1A[i]}</li>`;
}

if(outputList === '') {
	classList.innerHTML = 'De studentenlijst is leeg.';
} else {
	classList.innerHTML = outputList;
}

