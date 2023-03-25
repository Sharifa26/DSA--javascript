https://practice.geeksforgeeks.org/problems/replace-all-0s-with-5/1


/*Input:
N = 1004
Output: 1554
Explanation: There are two zeroes in 1004
on replacing all zeroes with "5", the new
number will be "1554".*/

function convertFive(num)
{
    const number = num.toString()
    const oldArray = number.split('')
    const  array =[];
    for(i=0;i<oldArray.length;i++){
        if(oldArray[i] == 0){
            array.push('5');
        }
        else{
            array.push(oldArray[i]);
        }
    }
    let joy = array.join('')
    return joy.toString();
}
let num = 1000004 ;
//console.log(convertFive(num));


https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions



function find(arr,n,x){
    let max=[];
    for(let i=0;i<n;i++){
        if(arr[i] == x){
            max.push(arr.indexOf(arr[i]));
        }
    }
    console.log(max)
    let mi=Math.min(...max);
    let ma=Math.max(...max);
    return [mi,ma]
 }

 let arr = [ 1, 3, 5, 5, 5, 5, 67, 123, 125 ]
 let n = arr.length
 let x = 5
 console.log(find(arr,n,x));

 https://practice.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions


 /*N = 4
A[] = {1, 2, 3, 4}
Output:
1 3*/


 function print(arr,n){
    const arra = [];
    for(let i=0;i<arr.length;i++){
        if( i % 2 == 0){
            arra.push(arr[i]);
        }
    }
    return arra;
  }
  let num =[1, 2, 3, 4];
  let n = num.length;
  console.log(print(num,n));