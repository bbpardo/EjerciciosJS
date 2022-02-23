const numbers = [11,9,13,12]

function orderRange(a, b ,array){
    let temp = array[a]
    for(let outer = a ; outer <= b; outer++){
        for(let inner= a; inner <= b; inner++){
            if(numbers[outer] < numbers[inner]){
                temp = numbers[outer];
                numbers[outer] = numbers[inner];
                numbers[inner] = temp;         
            }
        }
    }
}
orderRange(0,2,numbers)

console.log(numbers);