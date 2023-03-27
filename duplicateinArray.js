https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1
/*N = 4
a[] = {0,3,1,2}
Output: -1
Explanation: N=4 and all elements from 0
to (N-1 = 3) are present in the given
array. Therefore output is -1.*/


function duplicates(a, n)
{
    let arr=[];
    for(let i=0;i<n ;i++){
        console.log(a[i-1]);
        if(a[i] == a[i-1] ){
            arr.push(a[i]);
        }
    }
    if(arr.length == 0){
        return -1
    }
    return arr
}
let a =[0,3,2,2] , n=a.length;
console.log(duplicates(a, n));