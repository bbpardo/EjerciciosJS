const numbers = [22,1,4,3,5,7,8,9,12,11];
const odd = [];
const even = []

for (let item of numbers) {
    console.log("item:", item);
    let number = item%2
    if (number === 1){
        odd.push(item)
    }
    if (number === 0){
        even.push(item)
    }

}

console.log("odd:", odd);
console.log("even:", even);
