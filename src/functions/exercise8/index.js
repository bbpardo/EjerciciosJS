numbers = [4,2,9,6,1,0,3,6,5,2,9];

function aGreatherThanB (a, b) {
    return numbers[a]>numbers[b]
}

function bGreatherThanA (a,b) {
    return numbers[a]<numbers[b]
}

function swap (idxA, idxB, array) {
    if(true){
        let swapVar = null;
        swapVar = array[idxA]
        array[idxA] = array[idxB]
        array[idxB] = swapVar
    }
}

function sort (comparator, array) {
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            if (
                comparator(currentIdx, nextIdx)
            ) swap (currentIdx, nextIdx, array)
        }
    }
}

sort(aGreatherThanB, numbers)
console.log(numbers)
sort(bGreatherThanA, numbers)
console.log(numbers)