const numbers = [11,9,13,12]

function minorInRange(a,b,array){
    let minor = array[a]
    for(let idx = a; idx <= b;idx++){
        if(array[idx] < minor){
            minor = array[idx]
        }
    }
    return minor
}
console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3,numbers));