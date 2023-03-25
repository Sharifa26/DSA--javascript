function numberSquares(n) {
	let square = n * n;
    let sum = 0;
    let v= n-1;
    for( let i=1 ; i < v ; i++ ){
         sum  +=(i*i) + (i-1);
         //console.log(sum);
    }
    final =((square + sum));
    return final;
}
let n = 11;
//console.log(numberSquares(n));


function add(digits) {
    let x=1;
    let ans = (digits.toString().split(',').join('').toString());
    console.log(ans);
    var arr = (ans).toString().split("").map((ans)=>{
        return Number(ans)
    })
   //return arr;
};
let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(add(digits));
