const phrase = "No hay bien que por mal no venga";
const counters = {};
function countLetter (letter, countersObject) {
    if(counters.hasOwnProperty(letter) === false){
        counters[letter] = 0;
    }
    if(counters.hasOwnProperty(letter)){
        counters[letter]++;
    }
}
for (letter of phrase) {
    console.log(letter)
    countLetter(letter, counters)
}
console.log(JSON.stringify(counters))