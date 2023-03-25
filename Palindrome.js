
function isPalindrome(S){
    
    let count = 0;
    let arr = S.split('');
    let str = arr.reverse();
    for(let i = 1;i<=arr.length;i++){
        if(arr[arr.length-(i)] == (str[i -1])){
            count++;
        }
    }
    if(count == arr.length){
        return 1;
    }
    else{
        return 0;
    }
    
}

let S = "appa";
console.log(isPalindrome(S));