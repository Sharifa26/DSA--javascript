https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1?page=1&sortBy=submissions

/*N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.*/

function maxSubarraySum(arr, N){
    let currMax = arr[0];
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        currMax = Math.max(arr[i] ,currMax+arr[i]);
        if(currMax > max){
            max = currMax;
        }
    }
    return max;
} 

let arr = [1,2,3,-2,5] , N=arr.length;
//console.log(maxSubarraySum(arr, N));


function rotate(arr){
    let e = arr[arr.length-1]
    arr.pop();
    arr.unshift(e);
    return arr;
}

console.log(rotate(arr));