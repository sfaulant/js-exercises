const countVowels = function(string) {
string.split('');
let vowelCount = 0;
for (let i = 0; i < string.length; i++) {
if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
    vowelCount++;
}
}
return vowelCount;
}

//console.log(countVowels('Hi there, my name is Sarah!'))

const typeOfData = string => console.log(typeof string);

//typeOfData(true)

