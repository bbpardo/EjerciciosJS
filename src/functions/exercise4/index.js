let numbers = [11,12,13,14]

function swap(a , b , array){
    let temp = 0;
    temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);