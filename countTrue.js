function countTrue(arr) {
    let sum=1;
    let sum1=0;
    for (let i=0; i<arr.length; i++) {
        if( arr[i] == true)
            {
                sum1 += sum;
            }
    }
    return sum1;
}

function count(num){
    //let count = num.tostring();
    let count= num.toString().replace(/[^0-9]/g, '').length;
    return count;
}
let num = -8756
//console.log(count(num));
// let arr= [true ,true ,true ]
// console.log(countTrue(arr));

function string(a){
    a = a.toString();
    let b="something"+a;
    return b
}
let a= "hjvdywsfgcuiwbc";
//console.log(string(a));


function countZeroes(arr, n) {
        
    let sum=[];
    for(let i=0 ; i<n ;i++){
        if(arr[i] == 0){
            sum.push(arr[i]);
        }
    }
    return sum.length;
}

let arr=[1,2,0,0,0,0,0,0] ,n=8;
console.log(countZeroes(arr, n));