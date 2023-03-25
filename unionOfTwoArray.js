/*Input:
5 3
1 2 3 4 5
1 2 3
Output: 
5
Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.*/

/*Input:
6 2 
85, 25, 1 ,32, 54, 6
85, 2 
Output: 
7
Explanation: 
85, 25, 1, 32, 54, 6, and
2 are the elements which comes in the
union set of both arrays. So count is 7*/

function  doUnion(a,b){
    let arr=[];
    if( a == null || b == null){
        return 0;
    }
    for(let i = 0; i<a.length ; i++){
       arr[a[i]] = a[i];
    }
    for(let j = 0; j<b.length ; j++){
        arr[b[j]] = b[j];
    }
   
    let res = [];

    for(let e in arr){
        res.push(arr[e]);
    }
    res = res.length;
    return res;
}
let a =[85, 25, 1 ,32, 54, 6] , b=[85, 2 ] 
console.log(doUnion(a,b));