/*n = 6
arr[] = {1,2,3,4,5,6}
Output: 6 1 5 2 4 3
Explanation: Max element = 6, min = 1, 
second max = 5, second min = 2, and 
so on... Modified array is : 6 1 5 2 4 3.*/

function rearrange(arr, n){
    let ans=[];
    let i=0,j=n-1;
    let flag = true;
    while(i<=j){
        if(flag){
            ans.push(arr[j]);
            j--;
            flag=!flag;
        }
        else{
            ans.push(arr[i]);
            i++;
            flag=!flag;
        }
    }
    for(let i=0 ;i<n ;i++){
        arr[i]=ans[i];
    }
    return ans;
}
let arr=[1,2,3,4,5,6],n=6;
console.log(rearrange(arr, n));