function  PalinArray(arr,n){
    let count =0;
   for(let i=0;i<n;i++){
    let ans =arr[i].toString().split("").reverse().join("");
    if(ans == arr[i]){
        count++;
    }
   }
    if(count == n){
        return 1;
    }
    else{
        return 0;
    }
}

let arr =[111,222,443,444,555]
let n = arr.length;
console.log(PalinArray(arr,n));