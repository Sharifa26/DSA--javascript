function addUp(num) {
    sum = 0;
	for (let i =0 ; i<=num ; i++){
        sum += i;
    }
    return sum;
}
let num = 4;
console.log(addUp(num));