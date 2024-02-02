function allCombinations(word) {
word.split('');
let single = [];
let pairs = [];
let triplets = [];
for (i = 0; i < word.length; i++) {
single.push(word[i])
for (j = 0; j < word.length; j++) {
    if (j !== i) {
        pairs.push(word[i] + word[j])
    }
for (k = 0; k < word.length; k++) {
    if (k !== j && k !== i) {
        triplets.push(word[i] + word[j] + word[k]);
    }
}
}
}
return {single, pairs, triplets};
}

console.log(allCombinations('Sarah'));