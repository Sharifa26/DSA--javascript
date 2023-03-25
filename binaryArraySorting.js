/*Input: 
5
1 0 1 1 0

Output: 
0 0 1 1 1

Explanation: 
After arranging the elements in 
increasing order, elements will be as 
0 0 1 1 1.*/

function  binSort(A)
{
   let j = -1 , i=1;
   let temp;
    for (i = 0; i < A.length; i++) {

        if (A[i] < 1) {
            j++;
            temp = A[j];
            A[j] = A[i];
            A[i] = temp;
        }
    }
    return A;
}
let A = [10,2,4,556,5,6], N=5


function bin(A){
    A.sort();
    return A;
}
console.log(binSort(A));

//console.log(binSort(A));