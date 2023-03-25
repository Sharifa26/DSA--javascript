/*Input:
N = 7, X = 2
Arr[] = {1, 1, 2, 2, 2, 2, 3}
Output: 4
Explanation: 2 occurs 4 times in the
given array.*/

/*N = 7, X = 4
Arr[] = {1, 1, 2, 2, 2, 2, 3}
Output: 0
Explanation: 4 is not present in the
given array.*/

function count(arr,n,x){
    let sum=[];
  
    for(let i = 0 ; i<n ;i++){
      if(arr[i]==x){
        sum.push(arr[i]);
      }
    }
    return sum.length;
}


let arr = [1, 1, 2, 2, 2, 2, 3] , x = 2 ,n=7;
console.log(count(arr,n,x));