/*N = 5
arr[] = {1 2 3 4 5} 
K = 4
Output: 3
Explanation: 4 appears at index 3*/

/*N = 5
arr[] = {11 22 33 44 55} 
K = 445
Output: -1*/
function binarysearch(arr, n, k) {
    let i ,a;
    for(i=0;i<n;i++){
        if(arr[i] == k){
          a = arr.indexOf(arr[i]);
          return a;
        }
    }
    return -1;
}
let n=5,arr=[1 ,2 ,3 ,4 ,5],k = 3

function search(arr, n, k){
    let left=0;
    let right = arr.length -1;

    while(left <= right){
        let middle = Math.floor((left +right)/2);
        if(k === arr[middle]){
            return middle;
        }
        if(k < arr[middle]){
            right= middle -1;
        }
        else{
            left = middle +1;
        }

    }

    return -1;
}
//console.log(binarysearch(arr, n, k));

function isBinary(str){
    let mat = '101';
    let count = 0;
    for(let i=0;i<str.length;i++){
    let ans = mat.includes(str[i]);
    if(ans == true){
       count++;
    }
    }
    console.log(count ,str.length);
    if(count == str.length){
        return 1;
    }
    else{
    return 0;
    }
}
let str='11'
console.log(isBinary(str));