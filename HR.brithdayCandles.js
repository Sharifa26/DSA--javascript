let arr = [2,4,8,8];

function candle(arr){
    let count = 0;
    let ans = Math.max(...arr);
    for(let i =0; i<arr.length; i++){
        if(ans == arr[i]){
            count += 1;
        }
    }
    return count;
}

console.log(candle(arr));