const people = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]
console.log(people[1].time)

function aFasterThanB (a, b) {
    return people[a].time > people[b].time
}

function bFasterThanA (a,b) {
    return people[a].time < people[b].time
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

console.log(people);
sort(aFasterThanB, people)
console.log(people);
sort(bFasterThanA, people)
console.log(people);
