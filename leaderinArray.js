/*n = 6
A[] = {16,17,4,3,5,2}
Output: 17 5 2*/
function  leaders(arr, n){
    let a =[];
    for( let i=0; i<n ; i++){
       let j;
       for(j=i+1;j<n;j++){
        if (arr[i] <= arr[j])
                break;
       }
       if (j == n) 
       a.push(arr[i]);
    } 
    return a;
}

let n = 6,arr = [16,17,4,3,5,2];
console.log(leaders(arr, n));