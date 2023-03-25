//Given two unsorted arrays A of size N and B of size M of distinct elements, the task is to find all pairs from both arrays whose sum is equal to X.
/*Input:
A[] = {1, 2, 4, 5, 7}
B[] = {5, 6, 3, 4, 8} 
X = 9 
Output: 
1 8
4 5 
5 4
Explanation:
(1, 8), (4, 5), (5, 4) are the
pairs which sum to 9.*/

function allPairs(A, B, X) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] + B[j] == X) {
                // let r =[A[i],B[j]];
                // //[[1,2] , [2,3]]
                // //return [A[i], B[j]];
                // let v = A[i];
                // let u = B[j];
                //console.log([A[i],B[j]]);
                arr.push([A[i], B[j]]);
            }
        }
    } return arr;
}
let A = [1, 2, 4, 5, 7];
let B = [5, 6, 3, 4, 8];
let X = 9;
//console.log(allPairs(A,B,X));


function findTriplets(arr, n) {
    let X = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] + arr[i + 1] + arr[i + 2] == X) {
            return true
        }
    }
    return false;
}

let n = 5, arr = [0, -1, 2, -3, 1]
//console.log(findTriplets(arr, n));

function triplets(arr, n) {
    for (let i = 0; i < n; i++) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum == 0)
                return 1;
            else if (sum > 0) {
                k--;
            }
            else {
                j++;
            }
        }
    }

    return 0;
}
console.log(triplets(arr, n));

function Maximize(arr,n){
    arr.sort();
   let sum = 0
   let val=Math.pow(10,9)+7
   arr.map((val,index)=>{
     sum=sum+(val*index);
   })
 return sum;
}
