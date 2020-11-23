function searchArray(x, numbers = []) {
    if (numbers.includes(x) === true){
        return numbers.indexOf(x)
    }else{
        return -1
    }
}

let num = [3, 5, 6, 4, 9, 7, 0];

console.log(searchArray(5,num));
console.log(searchArray(1,num));
